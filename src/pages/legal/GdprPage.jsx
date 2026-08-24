import LegalPageLayout from '../../components/LegalPageLayout'

export default function GdprPage() {
  return (
    <LegalPageLayout title="GDPR" lastUpdated="[Placeholder date]">
      <p>
        <strong>[Placeholder — legal entity name]</strong> is committed to compliance with the EU General
        Data Protection Regulation (GDPR) for personal data processed through aksiom.ai and the Aksiom
        platform.
      </p>

      <h2>1. Our Role</h2>
      <p>
        For account and website data, Aksiom acts as a <strong>data controller</strong>. For Customer Data
        processed on behalf of a customer organization through the Service, Aksiom acts as a{' '}
        <strong>data processor</strong>, and processing is governed by a Data Processing Agreement (DPA).
        [Placeholder — link to DPA once drafted.]
      </p>

      <h2>2. Legal Basis for Processing</h2>
      <ul>
        <li><strong>Contract</strong> — to provide the Service under an agreement with your organization</li>
        <li><strong>Legitimate interest</strong> — to maintain security, respond to inquiries, and improve the Service</li>
        <li><strong>Consent</strong> — where required, e.g. certain cookies or marketing communications</li>
        <li><strong>Legal obligation</strong> — where processing is required by law</li>
      </ul>

      <h2>3. Your Rights</h2>
      <p>Under the GDPR, individuals have the right to:</p>
      <ul>
        <li>Access the personal data we hold about them</li>
        <li>Correct inaccurate data</li>
        <li>Request deletion ("right to be forgotten")</li>
        <li>Restrict or object to certain processing</li>
        <li>Request data portability</li>
        <li>Withdraw consent at any time, where processing is based on consent</li>
        <li>Lodge a complaint with a supervisory authority</li>
      </ul>
      <p>
        To exercise any of these rights, contact <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>. We
        will respond within the timeframe required by law.
      </p>

      <h2>4. International Transfers</h2>
      <p>
        [Placeholder — describe where data is hosted/processed and, if outside the EEA, the transfer
        mechanism used (e.g. Standard Contractual Clauses).]
      </p>

      <h2>5. Sub-processors</h2>
      <p>[Placeholder — link to an up-to-date list of sub-processors that handle personal data on our behalf.]</p>

      <h2>6. Data Breach Notification</h2>
      <p>
        In the event of a personal data breach, we will notify affected customers and, where required,
        supervisory authorities without undue delay, consistent with GDPR Article 33–34 obligations.
      </p>

      <h2>7. Data Protection Contact</h2>
      <p>
        <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>
        <br />
        Krondalvej 9A, 2610 Rødovre, Denmark
        <br />
        [Placeholder — designate a Data Protection Officer if required under Article 37.]
      </p>
    </LegalPageLayout>
  )
}
