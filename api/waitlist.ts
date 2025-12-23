import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

// Rate limiting storage (in-memory, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, source } = req.body;

    // Validation
    if (!email || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    if (!source || !['header', 'hero', 'cta', 'footer'].includes(source)) {
      return res.status(400).json({ error: 'Invalid source' });
    }

    // Rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const clientKey = `${clientIp}-${email}`;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 3;

    const rateLimit = rateLimitMap.get(clientKey);
    if (rateLimit) {
      if (now < rateLimit.resetTime) {
        if (rateLimit.count >= maxRequests) {
          return res.status(429).json({ 
            error: 'Too many requests. Please try again later.' 
          });
        }
        rateLimit.count++;
      } else {
        rateLimitMap.set(clientKey, { count: 1, resetTime: now + windowMs });
      }
    } else {
      rateLimitMap.set(clientKey, { count: 1, resetTime: now + windowMs });
    }

    // Google Sheets API setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Sheet1';

    // Check for duplicate email
    const checkResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!B:B`, // Email column
    });

    const existingEmails = checkResponse.data.values?.flat() || [];
    if (existingEmails.includes(email.toLowerCase())) {
      return res.status(409).json({ 
        error: 'Email already registered',
        message: 'You are already on the waitlist!' 
      });
    }

    // Append data to sheet
    const timestamp = new Date().toISOString();
    const userAgent = req.headers['user-agent'] || 'Unknown';

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[timestamp, email.toLowerCase(), source, clientIp, userAgent]],
      },
    });

    return res.status(200).json({ 
      success: true,
      message: 'Successfully joined the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process request. Please try again.' 
    });
  }
}