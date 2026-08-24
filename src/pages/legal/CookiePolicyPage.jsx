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

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential</strong> — required for the site to function (e.g. session, security). Cannot be disabled.</li>
        <li><strong>Analytics</strong> — help us understand how visitors use the site, so we can improve it. [Placeholder — name the actual analytics tool once chosen, e.g. Plausible, PostHog.]</li>
        <li><strong>Preference</strong> — remember choices you've made, like cookie consent status.</li>
      </ul>
      <p>We do not currently use advertising or third-party marketing cookies. [Placeholder — update if that changes.]</p>

      <h2>3. Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings. Disabling essential cookies may
        affect site functionality. [Placeholder — add a cookie consent banner / preference center link once
        implemented.]
      </p>

      <h2>4. Changes to This Policy</h2>
      <p>We may update this policy from time to time; changes will be posted on this page.</p>

      <h2>5. Contact</h2>
      <p>
        <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>
      </p>
    </LegalPageLayout>
  )
}
