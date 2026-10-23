import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Services from './Components/Services'
import WhySolar from './Components/WhySolar'
import WhyEcoRay from './Components/WhyEcoRay'
import Trust from './Components/Trust'
import Blogs from './Components/Blogs'
import PlansPricing from './Components/PlansPricing'
import CTA from './Components/CTA'

const Homepage = () => {
  return (
   <div className="home-page">
   <HeroSection/>
   <About/>
   <Services/>
   <WhySolar/>
   <WhyEcoRay/>
   <Trust/>
   <Blogs/>
   <PlansPricing/>
   <CTA/>
   </div>
  )
}

export default Homepage