import Icon from '../components/ui/Icon';

interface TermsOfServiceProps {
  onBack: () => void;
}

export const TermsOfService = ({ onBack }: TermsOfServiceProps) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 border-b border-gray-200 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            <Icon name="arrow_back" size={16} />
            Back to Home
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-muted dark:text-muted-foreground mb-8">
            <strong>Effective Date:</strong> December 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              By accessing or using Asteron services, including our website (ai-companion-web) and mobile application (ai-companion-app), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              These Terms constitute a legally binding agreement between you and Asteron ("we," "us," or "our"). We may update these Terms from time to time as described in Section 15.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              Your continued use of our services after any changes to these Terms will constitute your acceptance of such changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">2. Description of Services</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              Asteron provides productivity and task management services through two platforms:
            </p>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">2.1 Asteron Website</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Our website (ai-companion-web) is a marketing landing page that provides:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>Information about the Asteron mobile application</li>
              <li>Feature descriptions and product showcase</li>
              <li>Waitlist signup with optional survey questions</li>
              <li>Dark and light theme viewing options</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              The website does not require user accounts or authentication.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">2.2 Asteron Mobile App</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              Our mobile application (ai-companion-app) is available for iOS and Android devices and provides:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Feature</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Capture</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Text input for recording thoughts, tasks, and reminders</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Voice Input</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Voice capture interface (future feature)</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Confirm Screen</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Review and edit AI-parsed items before saving</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Daily Brief</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Summary view of today's tasks and reminders</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Upcoming</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">View of future tasks organized by date</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Settings</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Theme preferences, quiet hours, and data management</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Notifications</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Local push notifications for reminders</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Delete All Data</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Permanent data deletion option</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 rounded-xl p-4">
              <p className="text-zinc-700 dark:text-zinc-200">
                <strong>Important:</strong> The mobile app uses a <strong>local-first architecture</strong>. All your data is stored exclusively on your device using SQLite. We do not have access to your data, and there is no cloud synchronization.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">3. Eligibility</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">To use Asteron services, you must:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>Be at least <strong>13 years of age</strong></li>
              <li>Have the legal capacity to enter into these Terms</li>
              <li>Not be prohibited from using the services under applicable law</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              If you are between 13 and 18 years of age, we recommend that a parent or guardian review these Terms with you. By using our services, you represent and warrant that you meet these eligibility requirements.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              We do not knowingly collect information from or provide services to children under 13. If we discover that a user is under 13, we will take appropriate steps as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">4. User Accounts</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">4.1 No Account Required</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Asteron operates without user accounts. This means:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li><strong>No registration</strong> — You do not need to create an account to use the mobile app</li>
              <li><strong>No passwords</strong> — There are no credentials to remember or recover</li>
              <li><strong>No login</strong> — Simply download and start using the app</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">4.2 Local-Only Data Storage</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">All your data is stored locally on your device. As a result:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li><strong>No password recovery</strong> — Since there are no accounts, there is no password to reset</li>
              <li><strong>No remote access</strong> — We cannot access, recover, or restore your data</li>
              <li><strong>Device-dependent</strong> — Your data exists only on the device where you created it</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">4.3 Waitlist Signup</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              The waitlist signup on our website requires only an email address and survey responses. This is not an account—it is simply a way to join our notification list for product updates.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">5. User Responsibilities</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              By using Asteron, you agree to the following responsibilities:
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">5.1 Device Security</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Since your data is stored locally on your device, you are responsible for:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Keeping your device secure with a passcode, PIN, or biometric authentication</li>
              <li>Maintaining your device's operating system with security updates</li>
              <li>Protecting physical access to your device</li>
              <li>Understanding that anyone with access to your unlocked device may access your Asteron data</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">5.2 Data Backup</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Our local-first architecture means:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li><strong>You are responsible for backing up your device</strong> using your device manufacturer's backup features (e.g., iCloud, Google Backup)</li>
              <li><strong>We cannot recover lost data</strong> if your device is lost, stolen, damaged, or reset</li>
              <li><strong>No cloud sync</strong> — Your data is not automatically backed up to our servers</li>
              <li><strong>Data loss is permanent</strong> without your own backup measures</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">5.3 Accurate Information</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">You agree to:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Review AI-parsed items before saving them</li>
              <li>Verify that task details, dates, and reminders are accurate</li>
              <li>Not rely solely on AI parsing for critical information</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">5.4 Appropriate Use</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">You agree not to use our services to:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Store illegal, harmful, or offensive content</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the application</li>
              <li>Interfere with or disrupt the services or servers</li>
              <li>Use the services for any unauthorized commercial purpose</li>
              <li>Circumvent any security features of the services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">6. User Content</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">6.1 Ownership</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              You retain full ownership of all content you create within Asteron, including:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>Tasks and reminders</li>
              <li>Notes and descriptions</li>
              <li>Any other text you input</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              We do not claim any ownership rights over your content.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">6.2 Local Storage</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Your content remains on your device at all times. We do not:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Store your content on our servers</li>
              <li>Have access to your content</li>
              <li>Transmit your content to third parties</li>
              <li>Use your content for any purpose</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">6.3 User Responsibility for Content</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">You are solely responsible for:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>The content you create and store in the app</li>
              <li>Ensuring your content complies with applicable laws</li>
              <li>Any consequences resulting from your content</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300">
              Since your content never leaves your device, we have no ability to monitor, review, or moderate it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">7. AI Features and Limitations</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">7.1 AI Text Parsing</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Asteron includes AI-powered text parsing features that attempt to:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Extract task titles from your input</li>
              <li>Identify dates and times</li>
              <li>Detect task types and priorities</li>
              <li>Parse natural language into structured data</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">7.2 Accuracy Disclaimer</h3>
            <div className="bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 dark:border-amber-500/30 rounded-xl p-4 mb-4">
              <p className="text-zinc-700 dark:text-zinc-200 font-medium mb-2">
                <strong>The AI parsing feature provides suggestions only.</strong> You must understand that:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-1">
                <li>AI parsing is not guaranteed to be accurate</li>
                <li>Confidence scores are provided to indicate parsing reliability</li>
                <li>You should always review parsed results before saving</li>
                <li>Critical information should be verified manually</li>
                <li>AI may misinterpret dates, times, or intent</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">7.3 Confidence Scores</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              The app displays confidence scores for AI-parsed items. These scores indicate:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li><strong>High confidence</strong> — The AI is relatively certain about the parsing</li>
              <li><strong>Medium confidence</strong> — Some uncertainty exists; review recommended</li>
              <li><strong>Low confidence</strong> — Significant uncertainty; manual verification strongly recommended</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 font-medium mb-6">
              You are responsible for verifying AI-parsed information regardless of confidence level.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">7.4 No Guarantee of Results</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">We do not guarantee that:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>AI parsing will correctly interpret your input</li>
              <li>All tasks will be captured accurately</li>
              <li>Dates and times will be parsed correctly</li>
              <li>The AI will understand context or nuance</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">8. Notifications</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">8.1 Permission-Based</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Push notifications require your device permission. You control:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Whether to enable or disable notifications</li>
              <li>What types of notifications you receive</li>
              <li>When notifications can be delivered</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">8.2 Quiet Hours</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              The app includes a quiet hours feature that allows you to:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Set times when notifications are silenced</li>
              <li>Customize your notification schedule</li>
              <li>Reduce disruptions during specific hours</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">8.3 Daily Limits</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">To prevent notification overload:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>The app implements daily notification limits</li>
              <li>Excessive notifications may be batched or limited</li>
              <li>You can adjust notification preferences in Settings</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">8.4 Local Notifications Only</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              All notifications are generated and delivered locally on your device. We do not:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Send remote push notifications</li>
              <li>Track notification interactions</li>
              <li>Access your notification history</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">9. Intellectual Property</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">9.1 Our Property</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Asteron and all associated intellectual property are owned by us, including:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>The Asteron name and brand</li>
              <li>Logos, icons, and visual design</li>
              <li>App interface and user experience design</li>
              <li>Source code and software</li>
              <li>Documentation and written content</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              You may not use our intellectual property without written permission.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">9.2 Your Content</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              As stated in Section 6, you retain ownership of all content you create within the app. We claim no intellectual property rights over your personal data or content.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">9.3 Feedback</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              If you provide feedback, suggestions, or ideas about our services, you grant us the right to use such feedback without compensation or attribution to you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">10. Disclaimers</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">10.1 "As Is" Service</h3>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 mb-6">
              <p className="text-zinc-700 dark:text-zinc-200 font-mono text-sm uppercase">
                AI COMPANION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-1 mt-2">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY OR RELIABILITY OF CONTENT</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">10.2 No Warranty of Accuracy</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">We do not warrant that:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>AI parsing will be accurate or error-free</li>
              <li>The services will meet your specific requirements</li>
              <li>The services will be uninterrupted, timely, or secure</li>
              <li>Any errors will be corrected</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">10.3 Local Storage Risks</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              By using the local-first architecture, you acknowledge:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Data may be lost if your device is damaged, lost, or stolen</li>
              <li>Data may be lost if you uninstall the app without backup</li>
              <li>Device failures may result in permanent data loss</li>
              <li>We cannot recover or restore locally stored data</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">10.4 Third-Party Services</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Our services may interact with third-party services. We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Third-party service availability or performance</li>
              <li>Third-party privacy practices</li>
              <li>Any damages arising from third-party services</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">11. Limitation of Liability</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">11.1 Exclusion of Damages</h3>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 mb-6">
              <p className="text-zinc-700 dark:text-zinc-200 font-mono text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI COMPANION AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-1 mt-2">
                <li>ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>LOSS OF PROFITS, DATA, USE, OR GOODWILL</li>
                <li>SERVICE INTERRUPTION OR COMPUTER DAMAGE</li>
              </ul>
            </div>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">11.2 Cap on Liability</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">11.3 Basis of the Bargain</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm">
              THE LIMITATIONS IN THIS SECTION REFLECT THE ALLOCATION OF RISK BETWEEN THE PARTIES AND ARE AN ESSENTIAL ELEMENT OF THE BASIS OF THE BARGAIN BETWEEN US.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">11.4 Jurisdictional Limitations</h3>
            <p className="text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm">
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES, SO SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">12. Future Features</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">12.1 Subscription Model</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              We may introduce a paid subscription model in the future. If we do:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Current features may remain free or become part of a paid tier</li>
              <li>New premium features may be offered to subscribers</li>
              <li>You will be notified of any changes to pricing or feature availability</li>
              <li>A "Pro Member" designation currently exists as a placeholder with no associated charges</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">12.2 Cloud Synchronization</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              We may add cloud synchronization features in the future. If we do:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Cloud sync will be optional</li>
              <li>You will control whether your data is synced</li>
              <li>Our Privacy Policy will be updated to reflect new data practices</li>
              <li>You will be notified before any automatic data syncing occurs</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">12.3 Additional Features</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              We continuously improve our services and may:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>Add new features and capabilities</li>
              <li>Modify existing features</li>
              <li>Remove features that are no longer supported</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300">
              We will communicate significant changes through appropriate channels.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">13. Termination</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">13.1 By You</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              You may stop using our services at any time by:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Deleting your data using the "Delete All Data" feature</li>
              <li>Uninstalling the mobile application</li>
              <li>Ceasing to visit our website</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">13.2 By Us</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">We reserve the right to:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Discontinue the services at any time with reasonable notice</li>
              <li>Terminate or suspend access for violations of these Terms</li>
              <li>Modify or discontinue features without liability</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">13.3 Effect of Termination</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Upon termination:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Your right to use the services ceases</li>
              <li>Locally stored data remains on your device until you delete it</li>
              <li>Provisions that should survive termination will remain in effect (including Sections 6, 9, 10, 11, and 14)</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">13.4 No Liability for Termination</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              We shall not be liable to you or any third party for any termination of your access to our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">14. Governing Law and Disputes</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">14.1 Governing Law</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the <strong>State of California, United States</strong>, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">14.2 Jurisdiction</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              You agree to submit to the personal and exclusive jurisdiction of the courts located in <strong>California, United States</strong> for any disputes arising from these Terms or your use of the services.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">14.3 Dispute Resolution</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Before filing a claim, you agree to attempt to resolve disputes informally by contacting us. If informal resolution is unsuccessful after 30 days, either party may proceed with formal legal action.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">14.4 Class Action Waiver</h3>
            <p className="text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm">
              TO THE EXTENT PERMITTED BY LAW, YOU AND AI COMPANION AGREE THAT ANY PROCEEDINGS TO RESOLVE DISPUTES WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">15. Changes to Terms</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">15.1 Right to Modify</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              We reserve the right to modify these Terms at any time. When we make changes:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>We will update the "Effective Date" at the top of this document</li>
              <li>For material changes, we will provide notice through our website or app</li>
              <li>We encourage you to review these Terms periodically</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">15.2 Acceptance of Changes</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Your continued use of our services after changes to these Terms constitutes acceptance of the modified Terms. If you do not agree to the modified Terms, you should discontinue use of the services.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">15.3 Notice Methods</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">We may notify you of changes through:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Updates to this document on our website</li>
              <li>In-app notifications</li>
              <li>Email (if you provided one via the waitlist)</li>
              <li>Other appropriate communication methods</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">16. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              If you have questions, concerns, or feedback about these Terms of Service, please contact us:
            </p>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-zinc-700">
              <p className="text-zinc-700 dark:text-zinc-200 mb-2">
                <strong>Email:</strong> legal@aicompanion.app
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">17. Additional Provisions</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">17.1 Entire Agreement</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              These Terms, together with our <button onClick={onBack} className="text-primary hover:text-primary-dark underline">Privacy Policy</button>, constitute the entire agreement between you and Asteron regarding the services and supersede any prior agreements.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">17.2 Severability</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">17.3 Waiver</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Our failure to enforce any provision of these Terms shall not be deemed a waiver of such provision or our right to enforce it in the future.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">17.4 Assignment</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              You may not assign or transfer these Terms without our prior written consent. We may assign our rights and obligations without restriction.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">17.5 Headings</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              Section headings are for convenience only and shall not affect the interpretation of these Terms.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">17.6 Contact for Support</h3>
            <p className="text-zinc-600 dark:text-zinc-300">
              For general support inquiries (not legal matters), please visit our website or use the contact information provided in Section 16.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Summary</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Aspect</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Website</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Mobile App</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Account required</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">No</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">No</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Data location</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Our servers (waitlist only)</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Your device only</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Cloud backup</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Not applicable</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Not available</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">AI features</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">None</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Text parsing with confidence scores</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Subscription required</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">No</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">No (free)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">User content ownership</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">You own it</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">You own it</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">Related Documents</h2>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300">
              <li>
                <button 
                  onClick={onBack} 
                  className="text-primary hover:text-primary-dark underline"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </section>

          <div className="border-t border-gray-200 dark:border-zinc-700 pt-6 mt-10">
            <p className="text-sm text-muted dark:text-muted-foreground italic">
              These Terms of Service were last updated in December 2025.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};