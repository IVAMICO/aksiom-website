import Hero from '../components/Hero'
import OperationalTPSection from '../components/OperationalTPSection'
import ProblemSection from '../components/ProblemSection'
import FoundationSection from '../components/FoundationSection'
import OperatingPrinciplesStrip from '../components/OperatingPrinciplesStrip'
import FinalCTA from '../components/FinalCTA'
import { useSEO } from '../lib/useSEO'

// HowItWorksDetailed (the "independent AI auditor" section) is intentionally not
// rendered — it asserts claims (auditor checks every classification, approved
// decisions become precedent) that aren't yet confirmed live. Re-add once confirmed.
//
// TrustedBy (the "Built for finance and tax teams at" logo strip) is also not
// rendered — it only had placeholder company names. Re-add once real clients can be shown.

export default function HomePage() {
  useSEO({ path: '/' })

  return (
    <>
      <Hero />

      <OperationalTPSection />

      <div id="problem" className="relative">
        <ProblemSection />
      </div>

      <FoundationSection />

      <OperatingPrinciplesStrip />

      <FinalCTA />
    </>
  )
}
