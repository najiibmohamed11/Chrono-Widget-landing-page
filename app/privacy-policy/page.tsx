import Head from 'next/head';
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Privacy Policy - Chrono Widget</title>
        <meta name="description" content="Privacy Policy for Chrono Widget" />
      </Head>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy for Chrono Widget</h1>
        <p className="text-sm text-gray-600 mb-6"><strong>Last updated:</strong> [Date]</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Data Collection</h2>
        <p className="text-gray-700 mb-6">
          Chrono Widget does not collect, store, or transmit any personal or sensitive user data. All data (e.g., tracked websites, time spent) is stored locally on the user's device and is never shared with third parties.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Permissions</h2>
        <p className="text-gray-700 mb-4">
          Chrono Widget uses the following permissions:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li><strong>Storage</strong>: To store user preferences (e.g., tracked sites, theme settings) locally.</li>
          <li><strong>Scripting</strong>: To inject the widget UI into specific pages.</li>
          <li><strong>ActiveTab</strong>: To access the current tab's URL for tracking purposes.</li>
          <li><strong>Host Permissions</strong>: To fetch favicons via Google’s public API (<a href="https://www.google.com/s2/favicons" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.google.com/s2/favicons</a>). No user data is transmitted to Google.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Changes to This Policy</h2>
        <p className="text-gray-700 mb-6">
          We may update this privacy policy from time to time. Any changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions about this privacy policy, please contact us at <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>.
        </p>
      </div>
    </div>
  );
}