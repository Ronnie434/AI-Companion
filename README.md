# AI Life Companion Landing Page

A modern, dark-themed landing page for an AI-powered life management companion built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme design
- 📱 Fully responsive layout
- ⚡ Built with Vite for optimal performance
- 🎯 TypeScript for type safety
- 🌊 Smooth animations and transitions
- 🎨 Custom Tailwind configuration

## Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Material Symbols Outlined
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

Or manually:

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

The project is configured with `vercel.json` for optimal deployment settings.

### Deployment Configuration

The project includes:
- **vercel.json**: Optimized Vercel configuration for SPA routing
- **.vercelignore**: Excludes unnecessary files from deployment
- **Build scripts**: Pre-configured for production builds

### Manual Deployment Steps

1. **Fork or clone the repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect the Vite configuration
3. **Deploy:**
   - Click "Deploy"
   - Your site will be live in minutes

## Project Structure

```
src/
├── components/
│   ├── layout/      # Header, Footer, Logo
│   ├── sections/    # Page sections
│   ├── ui/          # Reusable UI components
│   └── features/    # Specialized components
├── data/            # Content constants
├── types/           # TypeScript definitions
└── styles/          # Global styles and Tailwind config
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## License

© 2025 AI Companion. All rights reserved.