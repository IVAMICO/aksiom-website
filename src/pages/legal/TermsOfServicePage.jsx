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
        Aksiom provides software that classifies intercompany transactions for transfer pricing purposes,
        using a combination of fixed rules, customer-defined rules, historical precedent, and AI. The
        Service is provided on a subscription basis under a separate order form or agreement with your
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
        as required by law or expressly stated otherwise. [Placeholder — late payment / suspension terms,
        e.g. grace period before suspension, interest on overdue amounts.]
      </p>

      <h2>5. Customer Data</h2>
      <p>
        Customer retains all rights to data it uploads to the Service ("Customer Data"). Customer grants
        Aksiom a limited license to process Customer Data solely to provide the Service, including sending
        it to a third-party AI model provider for classification as described in our{' '}
        <a href="/privacy">Privacy Policy</a>. Customer represents that it has the right to upload Customer
        Data and that doing so does not violate any third party's rights.
      </p>

      <h2>6. Intellectual Property</h2>
      <p>
        Aksiom retains all rights to the Service, including its software, models, and documentation. These
        Terms do not grant Customer any rights to Aksiom's intellectual property beyond the right to use the
        Service as described here.
      </p>

      <h2>7. Feedback</h2>
      <p>
        If Customer provides suggestions, ideas, or feedback about the Service, Aksiom may use them to
        improve the Service without any obligation or payment to Customer.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        Each party will protect the other's confidential information with the same care it uses for its own,
        and at least reasonable care, and will not disclose it except as permitted under these Terms.
      </p>

      <h2>9. Warranties &amp; Disclaimers</h2>
      <p>
        The Service is provided "as is" except as expressly warranted in an applicable order form. AI-assisted
        classifications are provided to assist, not replace, professional judgment — Customer remains
        responsible for reviewing and approving classifications before relying on them.
        [Placeholder — align with actual product liability position.]
      </p>

      <h2>10. Indemnification</h2>
      <p>
        [Placeholder — standard mutual indemnification language: Aksiom typically indemnifies Customer
        against third-party IP infringement claims arising from the Service; Customer typically indemnifies
        Aksiom against claims arising from Customer Data or Customer's misuse of the Service. Requires legal
        drafting specific to your risk tolerance.]
      </p>

      <h2>11. Limitation of Liability</h2>
      <p>
        [Placeholder — standard liability cap language, typically tied to fees paid in the prior 12 months,
        with carve-outs for confidentiality breaches, indemnification obligations, and gross negligence or
        willful misconduct; requires legal drafting specific to your risk tolerance.]
      </p>

      <h2>12. Term &amp; Termination</h2>
      <p>
        These Terms remain in effect while you use the Service. Either party may terminate for material
        breach not cured within [Placeholder] days of notice. On termination, access ends and Customer Data
        is returned or deleted per Section 6 of the Privacy Policy.
      </p>

      <h2>13. Publicity</h2>
      <p>
        Aksiom may identify Customer by name and logo as a customer in marketing materials, including on
        aksiom.ai, unless Customer opts out in writing. [Placeholder — confirm whether this should be
        opt-in instead, and reflect the same position in any customer reference/logo-use agreements.]
      </p>

      <h2>14. Export Compliance &amp; Sanctions</h2>
      <p>
        Each party will comply with applicable trade control and economic sanctions laws, and neither party
        will use the Service to provide services to, or otherwise deal with, any individual or entity subject
        to applicable sanctions.
      </p>

      <h2>15. Force Majeure</h2>
      <p>
        Neither party is liable for delay or failure to perform caused by events beyond its reasonable
        control, including natural disasters, war, labor disputes, internet or utility failures, or acts of
        government.
      </p>

      <h2>16. Assignment</h2>
      <p>
        Neither party may assign these Terms without the other's consent, except that either party may
        assign them without consent in connection with a merger, acquisition, or sale of substantially all
        of its assets.
      </p>

      <h2>17. Governing Law</h2>
      <p>[Placeholder — governing law and jurisdiction, typically tied to your legal entity's home jurisdiction.]</p>

      <h2>18. Miscellaneous</h2>
      <p>
        These Terms, together with any order form and the Data Processing Agreement, are the entire
        agreement between the parties on this subject and supersede prior discussions. If any provision is
        found unenforceable, the rest remains in effect. A party's failure to enforce a provision is not a
        waiver of it. Notices under these Terms should be sent to the contact details in Section 19.
      </p>

      <h2>19. Changes to These Terms</h2>
      <p>We may update these Terms from time to time. Material changes will be notified via the Service or by email.</p>

      <h2>20. Contact</h2>
      <p>
        <a href="mailto:info@aksiom.ai">info@aksiom.ai</a>
        <br />
        Krondalvej 9A, 2610 Rødovre, Denmark
      </p>
    </LegalPageLayout>
  )
}
