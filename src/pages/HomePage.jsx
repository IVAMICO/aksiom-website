import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import OperationalTPSection from '../components/OperationalTPSection'
import ProblemSection from '../components/ProblemSection'
import FoundationSection from '../components/FoundationSection'
import OperatingPrinciplesStrip from '../components/OperatingPrinciplesStrip'
import FinalCTA from '../components/FinalCTA'

// HowItWorksDetailed (the "independent AI auditor" section) is intentionally not
// rendered — it asserts claims (auditor checks every classification, approved
// decisions become precedent) that aren't yet confirmed live. Re-add once confirmed.

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustedBy />

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
