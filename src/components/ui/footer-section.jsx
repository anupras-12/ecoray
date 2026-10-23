import { ArrowUpRight, Leaf, Sun } from 'lucide-react'

const footerLinks = [
  { label: 'About EcoRay', href: '#about' },
  { label: 'Solar services', href: '#services' },
  { label: 'Why solar', href: '#why-ecoray' },
  { label: 'Plans & pricing', href: '#plans' },
]

export function Footerdemo() {
  return (
    <footer className="bg-[#18392d] px-5 py-12 text-[#fffef8] sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/20 pb-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:gap-12">
          <div>
            <a className="inline-flex items-center gap-3 text-xl font-semibold text-white" href="#top" aria-label="EcoRay home">
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-[#dce94d] text-[#18392d]" aria-hidden="true">
                <Sun className="absolute" size={30} strokeWidth={1.6} />
                <Leaf className="absolute bottom-1 right-0.5 fill-[#dce94d]" size={16} strokeWidth={1.8} />
              </span>
              <span>eco<span className="text-[#dce94d]">ray</span></span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              Thoughtful solar solutions for brighter days and a more sustainable energy future.
            </p>
            <a
              className="mt-6 inline-flex min-h-11 items-center gap-3 bg-[#dce94d] px-5 text-sm font-semibold text-[#18392d] transition-colors hover:bg-[#e8f27c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="#contact"
            >
              Talk to our team <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dce94d]">Explore</h2>
            <nav className="mt-5 flex flex-col items-start gap-3" aria-label="Footer navigation">
              {footerLinks.map(({ label, href }) => (
                <a className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dce94d]" href={href} key={label}>
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#dce94d]">Start here</h2>
            <p className="mt-5 text-sm leading-6 text-white/70">
              Have questions about solar for your property? We can help you explore your options.
            </p>
            <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#dce94d]" href="#contact">
              Get in touch <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} EcoRay. All rights reserved.</span>
          <a className="w-fit hover:text-white" href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default Footerdemo