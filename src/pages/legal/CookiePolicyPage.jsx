import LegalPageLayout from '../../components/LegalPageLayout'

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" lastUpdated="[Placeholder date]">
      <p>
        This Cookie Policy explains how <strong>[Placeholder — legal entity name]</strong> uses cookies and
        similar technologies on aksiom.ai.
      </p>

      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They help the site
        function, remember preferences, and understand how it's used.
      </p>

      <h2>2. Cookies We Currently Use</h2>
      <p>
        As of the date above, aksiom.ai does not set any analytics, advertising, or marketing cookies. The
        only cookies in use are strictly necessary ones needed for the site to function correctly:
      </p>
      <ul>
        <li><strong>Session / security cookies</strong> — e.g. to protect the demo request form from abuse. These do not identify you personally and cannot be disabled without breaking core functionality.</li>
      </ul>
      <p>
        This page will be updated, and a cookie consent banner added, before any analytics, preference, or
        marketing cookies are introduced. [Placeholder — name the actual tool once chosen, e.g. Plausible,
        PostHog, and list it here.]
      </p>

      <h2>3. Categories We May Use in the Future</h2>
      <p>If we add non-essential cookies, they will fall into one of these categories, each requiring your consent before being set on an EU visitor's device:</p>
      <ul>
        <li><strong>Analytics</strong> — help us understand how visitors use the site, so we can improve it.</li>
        <li><strong>Preference</strong> — remember choices you've made, like your cookie consent status.</li>
      </ul>
      <p>We do not use advertising or third-party marketing cookies, and have no plans to.</p>

      <h2>4. Do Not Track</h2>
      <p>
        Some browsers offer a "Do Not Track" signal. Because there is no common industry standard for
        interpreting it, aksiom.ai does not currently respond to Do Not Track signals differently — since we
        set no tracking cookies today, this has no practical effect either way.
      </p>

      <h2>5. Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. Disabling essential cookies may
        affect site functionality.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>We may update this policy from time to time; changes will be posted on this page.</p>

      <h2>7. Contact</h2>
      <p>
        <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>
      </p>
    </LegalPageLayout>
  )
}
