import { ArrowUpRight, Leaf, Sun } from 'lucide-react'

export default function AboutUsSection({
  eyebrow = 'About EcoRay',
  title = 'A brighter way to power what matters.',
  description = 'We help people make a confident move toward solar. From understanding your energy needs to planning the right system, EcoRay makes the process clearer at every step.',
  imageSrc = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85',
  imageAlt = 'Rows of solar panels collecting sunlight across an open landscape.',
}) {
  return (
    <section id="about" className="bg-[#fffef8] px-5 py-16 text-[#20382d] sm:px-8 md:py-24" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl items-center gap-9 md:grid-cols-[1fr_0.9fr] md:gap-16">
        <div className="relative min-h-75 overflow-hidden sm:min-h-100 md:min-h-125">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#10251a]/40 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-[#fffef8] px-4 py-3 text-xs font-semibold text-[#315440]">
            <Sun size={16} aria-hidden="true" /> Energy for a more considered future
          </div>
        </div>

        <div className="py-2 md:py-8">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">
            <Leaf size={15} aria-hidden="true" /> {eyebrow}
          </p>
          <h2 id="about-title" className="max-w-xl font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#5b6e61] sm:text-base">
            {description}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#5b6e61] sm:text-base">
            Every home and business is different. We take the time to understand your goals, explain your options, and help you find a solar solution that feels right for you.
          </p>
          <a
            className="mt-8 inline-flex min-h-11 items-center gap-3 bg-[#1b513a] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#276b4d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
            href="#services"
          >
            Explore our services <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}