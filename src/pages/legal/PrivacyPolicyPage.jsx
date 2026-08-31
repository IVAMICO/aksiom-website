import LegalPageLayout from '../../components/LegalPageLayout'

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="[Placeholder date]">
      <p>
        This Privacy Policy explains how <strong>[Placeholder — legal entity name]</strong> ("Aksiom," "we,"
        "us") collects, uses, and protects information when you use aksiom.ai and the Aksiom platform (the
        "Service").
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information in the following categories:</p>
      <ul>
        <li><strong>Account information</strong> — name, work email, company, role, provided when you sign up or request a demo.</li>
        <li><strong>Customer data</strong> — the transaction, journal entry, and entity data your organization uploads or connects to the Service for classification, which may incidentally include personal data (e.g. counterparty or employee names appearing in accounting records). This data is owned by your organization; see Section 6.</li>
        <li><strong>Usage data</strong> — pages visited, features used, log data, collected automatically.</li>
        <li><strong>Cookies and similar technologies</strong> — see our <a href="/cookies">Cookie Policy</a>.</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To provide, maintain, and improve the Service</li>
        <li>To respond to support requests and demo inquiries</li>
        <li>To send product updates and communications you can opt out of at any time via an unsubscribe link or by contacting us directly</li>
        <li>To monitor for security, fraud, and abuse</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. AI-Assisted Processing</h2>
      <p>
        The Service uses AI models to classify intercompany transactions that aren't resolved by fixed
        rules, your organization's manual rules, or historical precedent. Where AI classification is used:
      </p>
      <ul>
        <li>Customer Data submitted for classification may be sent to a third-party AI model provider ([Placeholder — name the provider(s), e.g. Anthropic, OpenAI, Microsoft Azure OpenAI]) for processing.</li>
        <li>[Placeholder — confirm and state whether Customer Data is used to train or fine-tune any AI model, and if not, say so explicitly. Most enterprise AI provider agreements exclude customer data from training by default — verify and state your actual configuration.]</li>
        <li>Every AI classification is returned with a confidence score, and is intended to assist — not replace — your team's professional judgment. See Section 8 of our <a href="/terms">Terms of Service</a>.</li>
        <li>AI classification does not make legal, financial, or employment decisions about individuals, and is not used for automated decision-making that produces legal or similarly significant effects on individuals within the meaning of GDPR Article 22. See our <a href="/gdpr">GDPR</a> page.</li>
      </ul>

      <h2>4. How We Share Information</h2>
      <p>
        We do not sell personal information. We share information only with: sub-processors who help us
        operate the Service (hosting, infrastructure, the AI model provider(s) named in Section 3, and
        analytics — see [Placeholder — link to sub-processor list]), professional advisors, and where
        required by law or to protect our rights.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We use industry-standard technical and organizational measures to protect information, including
        encryption in transit and at rest, access controls, and regular review of our security practices.
        [Placeholder — add specifics: SOC 2, penetration testing cadence, etc., once available.]
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain account information for as long as your account is active and as needed to comply with
        legal obligations. Customer data is retained per your organization's agreement with us and deleted
        or returned on request following contract termination, subject to [Placeholder — retention period].
        Usage and log data is retained for [Placeholder — retention period, e.g. 12 months] for security and
        diagnostic purposes.
      </p>

      <h2>7. Customer Data Ownership</h2>
      <p>
        Data your organization uploads to the Service remains your organization's property. We process it
        solely to provide the Service, as further described in our Data Processing Agreement.
        [Placeholder — link to DPA once drafted.]
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or export your personal
        information, object to or restrict certain processing, and object to any processing based on
        legitimate interest. See our <a href="/gdpr">GDPR</a> page for details on exercising these rights and
        who to contact. To make a request, contact <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>.
      </p>

      <h2>9. International Transfers</h2>
      <p>
        [Placeholder — describe transfer mechanisms if data (including data sent to an AI model provider) is
        processed outside the EEA, e.g. Standard Contractual Clauses, and confirm the hosting region(s) used.]
      </p>

      <h2>10. Children's Privacy</h2>
      <p>
        The Service is intended for business use by adults and is not directed at children. We do not
        knowingly collect personal information from anyone under 16.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Material changes will be notified via the Service or by email.</p>

      <h2>12. Contact</h2>
      <p>
        Questions about this policy: <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>
        <br />
        Krondalvej 9A, 2610 Rødovre, Denmark
      </p>
    </LegalPageLayout>
  )
}
