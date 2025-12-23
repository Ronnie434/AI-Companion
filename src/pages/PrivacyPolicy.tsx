import Icon from '../components/ui/Icon';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy = ({ onBack }: PrivacyPolicyProps) => {
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
            Privacy Policy
          </h1>
          <p className="text-muted dark:text-muted-foreground mb-8">
            <strong>Effective Date:</strong> December 2025
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              This Privacy Policy explains how AI Companion ("we," "us," or "our") collects, uses, and protects your information when you use our services, which include:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li><strong>AI Companion Website</strong> (ai-companion-web) — Our marketing landing page and waitlist signup</li>
              <li><strong>AI Companion Mobile App</strong> (ai-companion-app) — Our iOS and Android application</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300">
              We are committed to protecting your privacy and being transparent about our data practices. This policy applies to all users of our website and mobile application.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">2.1 Website Waitlist Information</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              When you sign up for our waitlist through the AI Companion website, we collect the following information:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Information</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Required</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Email address</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">To notify you when the app launches and for waitlist management</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Signup source</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">To understand where you discovered us</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Primary pain point</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">To better understand user needs through research</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Current method</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">To understand how you currently manage tasks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">2.2 Mobile App Information</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              The AI Companion mobile app stores all your data <strong>locally on your device</strong>. We do not have access to this data, and it is never transmitted to our servers. Information stored locally includes:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li><strong>Task titles</strong> — Names you give to your tasks and items</li>
              <li><strong>Task details</strong> — Optional additional notes you add</li>
              <li><strong>Task type</strong> — Category such as task, bill, renewal, follow-up, or reminder</li>
              <li><strong>Dates</strong> — Due dates and reminder times you set</li>
              <li><strong>Priority level</strong> — Your chosen priority (low, medium, high)</li>
              <li><strong>Status</strong> — Task status (active, done, archived)</li>
              <li><strong>Capture input</strong> — Text or voice input you provide when creating items</li>
            </ul>
            <div className="bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 rounded-xl p-4 mb-6">
              <p className="text-zinc-700 dark:text-zinc-200 font-medium">
                <strong>Important:</strong> All mobile app data remains on your device. We use a local SQLite database and do not sync your personal data to any cloud service.
              </p>
            </div>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">2.3 Automatically Collected Information</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              When you visit our website, certain information is collected automatically:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Information</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">IP address</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Rate limiting to prevent abuse (limited to 3 requests per 15 minutes)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">User agent</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Analytics and compatibility</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Timestamp</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Record keeping and service improvement</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300">
              <strong>Note:</strong> Our website does not use cookies for tracking purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Website (Waitlist)</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">We use your waitlist information to:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Add you to our launch notification list</li>
              <li>Send you updates about AI Companion availability</li>
              <li>Conduct user research to improve our product</li>
              <li>Analyze signup patterns to better understand our audience</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Mobile App</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Since all app data is stored locally on your device, we do not use or access your personal task information. The app uses your data solely to:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li>Display and manage your tasks, reminders, and items</li>
              <li>Send local push notifications for reminders you've set</li>
              <li>Provide the core functionality of the application</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">4. Data Storage and Security</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Website Data</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Waitlist information collected through our website is stored securely using:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li><strong>Google Sheets</strong> — Your waitlist submission data is stored in Google Sheets via the Google Sheets API</li>
              <li><strong>Vercel</strong> — Our website is hosted on Vercel's secure infrastructure</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 mb-6">
              We implement appropriate security measures to protect your information, including secure API connections and access controls.
            </p>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Mobile App Data</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Your mobile app data is stored <strong>exclusively on your device</strong> using:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li><strong>SQLite Database</strong> — A local database stored on your iOS or Android device</li>
              <li><strong>Local Storage</strong> — All data remains on your device and is not transmitted to external servers</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300">
              Your data security on the mobile app depends on your device's security settings, including passcode, biometric authentication, and device encryption. We recommend keeping your device's operating system updated and using strong device security measures.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">5. Third-Party Services</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">We use the following third-party services:</p>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Website</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Google Sheets API</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Storing waitlist submissions</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Vercel</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Website hosting and serverless functions</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Google Fonts</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Typography and visual design</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Mobile App</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 dark:border-zinc-700 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 dark:bg-zinc-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Service</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-zinc-700">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Expo Notifications</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Local push notifications (processed on-device)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Expo Crypto</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Generating unique identifiers (UUIDs) locally</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Google Fonts</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Typography and visual design</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 rounded-xl p-4 mb-4">
              <p className="text-zinc-700 dark:text-zinc-200">
                <strong>Future Services:</strong> We may integrate a backend AI API for text parsing in future versions. This policy will be updated before any such integration to describe how that data will be handled.
              </p>
            </div>

            <p className="text-zinc-600 dark:text-zinc-300 mb-2">
              Please note that these third-party services have their own privacy policies, and we encourage you to review them:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">Google Privacy Policy</a></li>
              <li><a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">Vercel Privacy Policy</a></li>
              <li><a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark underline">Expo Privacy Policy</a></li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">6. Data Retention</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Website (Waitlist)</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">We retain your waitlist information until:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>You request removal from the waitlist</li>
              <li>The waitlist is no longer needed (after public launch)</li>
              <li>You request deletion of your data</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Mobile App</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">Your mobile app data is retained on your device until:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>You manually delete individual items within the app</li>
              <li>You use the "Delete All Data" feature in settings</li>
              <li>You uninstall the application</li>
              <li>You clear the app's data through your device settings</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300">
              Since we don't have access to your app data, we cannot delete it remotely. You have full control over your data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">7. Your Rights and Choices</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Your Rights</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li><strong>Access</strong> — Know what information we have about you</li>
              <li><strong>Correction</strong> — Request correction of inaccurate information</li>
              <li><strong>Deletion</strong> — Request deletion of your information</li>
              <li><strong>Portability</strong> — Request a copy of your data in a portable format</li>
              <li><strong>Opt-out</strong> — Unsubscribe from marketing communications</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">How to Exercise Your Rights</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2"><strong>For Website (Waitlist) Data:</strong></p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>To be removed from the waitlist or have your data deleted, contact us using the information in Section 10</li>
              <li>To unsubscribe from emails, use the unsubscribe link in any email we send</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300 mb-2"><strong>For Mobile App Data:</strong></p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-6">
              <li>Use the <strong>"Delete All Data"</strong> option in the app's Settings screen to remove all your data</li>
              <li>Delete individual items directly within the app</li>
              <li>Uninstall the app to remove all locally stored data</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3">Our Privacy Commitments</h3>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">We believe in privacy-first design. Our commitments to you:</p>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>No ads</strong> — We do not display advertisements in our app</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>No selling of personal data</strong> — We never sell your information to third parties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Transparent memory controls</strong> — You decide what information the app stores</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>You decide what's remembered</strong> — Full control over your data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✅</span>
                <span><strong>Local-first architecture</strong> — Your app data stays on your device</span>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">8. Children's Privacy</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              AI Companion is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately using the information in Section 10.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              If we discover that we have collected personal information from a child under 13, we will take steps to delete that information as quickly as possible.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300">
              For users between 13 and 18 years of age, we recommend parental guidance when using our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">9. Changes to This Policy</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes:
            </p>
            <ul className="list-disc pl-6 text-zinc-600 dark:text-zinc-300 space-y-2 mb-4">
              <li>We will update the "Effective Date" at the top of this policy</li>
              <li>For significant changes, we will provide notice through our website or app</li>
              <li>We encourage you to review this policy periodically</li>
            </ul>
            <p className="text-zinc-600 dark:text-zinc-300">
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-4">10. Contact Information</h2>
            <p className="text-zinc-600 dark:text-zinc-300 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 border border-gray-200 dark:border-zinc-700">
              <p className="text-zinc-700 dark:text-zinc-200 mb-2">
                <strong>Email:</strong> privacy@aicompanion.app
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
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
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Data storage location</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Google Sheets (cloud)</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Your device only (local)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">We have access to your data</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes (waitlist info only)</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">No</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Third-party data sharing</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Limited to service providers</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">None</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">You can delete your data</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes (contact us)</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Yes (in-app controls)</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Cookies</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">None</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Not applicable</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-zinc-800/50">
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">Advertising</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">None</td>
                    <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="border-t border-gray-200 dark:border-zinc-700 pt-6 mt-10">
            <p className="text-sm text-muted dark:text-muted-foreground italic">
              This Privacy Policy was last updated in December 2025.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};