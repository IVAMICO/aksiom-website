import LegalPageLayout from '../../components/LegalPageLayout'

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout title="Terms of Service" lastUpdated="[Placeholder date]">
      <p>
        These Terms of Service ("Terms") govern access to and use of aksiom.ai and the Aksiom platform (the
        "Service"), provided by <strong>[Placeholder — legal entity name]</strong> ("Aksiom," "we," "us").
        By using the Service, you agree to these Terms.
      </p>

      <h2>1. The Service</h2>
      <p>
        Aksiom provides software that classifies intercompany transactions for transfer pricing purposes.
        The Service is provided on a subscription basis under a separate order form or agreement with your
        organization ("Customer").
      </p>

      <h2>2. Accounts</h2>
      <p>
        You must provide accurate registration information and keep your credentials secure. You are
        responsible for activity under your account. Notify us immediately of any unauthorized use.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Reverse engineer, decompile, or attempt to extract the Service's source code or models</li>
        <li>Use the Service to build a competing product</li>
        <li>Upload data you do not have the right to upload</li>
        <li>Attempt to breach or circumvent security measures</li>
        <li>Use the Service in violation of applicable law</li>
      </ul>

      <h2>4. Subscription &amp; Payment</h2>
      <p>
        Fees, billing cycle, and payment terms are set out in your order form. Fees are non-refundable except
        as required by law or expressly stated otherwise. [Placeholder — late payment / suspension terms.]
      </p>

      <h2>5. Customer Data</h2>
      <p>
        Customer retains all rights to data it uploads to the Service ("Customer Data"). Customer grants
        Aksiom a limited license to process Customer Data solely to provide the Service. See our{' '}
        <a href="/privacy">Privacy Policy</a> for details.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        Aksiom retains all rights to the Service, including its software, models, and documentation. These
        Terms do not grant Customer any rights to Aksiom's intellectual property beyond the right to use the
        Service as described here.
      </p>

      <h2>7. Confidentiality</h2>
      <p>
        Each party will protect the other's confidential information with the same care it uses for its own,
        and at least reasonable care, and will not disclose it except as permitted under these Terms.
      </p>

      <h2>8. Warranties &amp; Disclaimers</h2>
      <p>
        The Service is provided "as is" except as expressly warranted in an applicable order form. AI-assisted
        classifications are provided to assist, not replace, professional judgment — Customer remains
        responsible for reviewing and approving classifications before relying on them.
        [Placeholder — align with actual product liability position.]
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        [Placeholder — standard liability cap language, typically tied to fees paid in the prior 12 months;
        requires legal drafting specific to your risk tolerance.]
      </p>

      <h2>10. Term &amp; Termination</h2>
      <p>
        These Terms remain in effect while you use the Service. Either party may terminate for material
        breach not cured within [Placeholder] days of notice. On termination, access ends and Customer Data
        is returned or deleted per Section 5 of the Privacy Policy.
      </p>

      <h2>11. Governing Law</h2>
      <p>[Placeholder — governing law and jurisdiction, typically tied to your legal entity's home jurisdiction.]</p>

      <h2>12. Changes to These Terms</h2>
      <p>We may update these Terms from time to time. Material changes will be notified via the Service or by email.</p>

      <h2>13. Contact</h2>
      <p>
        <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>
        <br />
        Krondalvej 9A, 2610 Rødovre, Denmark
      </p>
    </LegalPageLayout>
  )
}
