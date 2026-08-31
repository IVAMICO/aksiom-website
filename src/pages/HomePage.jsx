import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import ProblemSection from '../components/ProblemSection'
import DataQualitySection from '../components/DataQualitySection'
import SolutionSection from '../components/SolutionSection'
import HowItWorksDetailed from '../components/HowItWorksDetailed'
import FinalCTA from '../components/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustedBy />

      <div id="problem" className="relative">
        <ProblemSection />
      </div>

      <DataQualitySection />

      <SolutionSection />

      <HowItWorksDetailed />

      <FinalCTA />
    </>
  )
}
