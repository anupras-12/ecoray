import Testimonial1 from '@/components/ui/testimonial-1'
import LogoLoop from '@/components/ui/LogoLoop'
import { BatteryCharging, Building2, Leaf, Sun, Wind } from 'lucide-react'

const demoPartnerLogos = [
  { title: 'Solterra', node: <Sun color="#a4b42b" strokeWidth={1.8} /> },
  { title: 'BrightGrid', node: <BatteryCharging color="#4f795c" strokeWidth={1.8} /> },
  { title: 'Evergreen Works', node: <Leaf color="#66806d" strokeWidth={1.8} /> },
  { title: 'Northstar Build', node: <Building2 color="#315440" strokeWidth={1.8} /> },
  { title: 'OpenSky Energy', node: <Wind color="#718074" strokeWidth={1.8} /> },
]

const Trust = () => {
  return (
    <>
      <Testimonial1 />
      <section className="overflow-hidden bg-[#f5f7ef] px-5 py-14 text-[#20382d] sm:px-8 md:py-16" aria-labelledby="partner-logos-title">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 id="partner-logos-title" className="font-[Georgia,serif] text-2xl font-normal text-[#315440] sm:text-3xl">
              Trusted by companies and investors
            </h2>
          </div>
          <LogoLoop
            logos={demoPartnerLogos}
            speed={40}
            direction="left"
            logoHeight={44}
            gap={76}
            pauseOnHover
            scaleOnHover
            ariaLabel="Sample partner wordmarks for preview"
          />
        </div>
      </section>
    </>
  )
}

export default Trust