import { useState } from 'react'
import { ArrowLeft, ArrowRight, BatteryCharging, Building2, House, ScanSearch, Sun, Wrench } from 'lucide-react'

const services = [
  {
    id: 'residential',
    title: 'Home solar',
    description: 'Solar panels planned for your roof, household energy use, and long-term goals.',
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Solar panels installed across a residential rooftop.',
    Icon: House,
  },
  {
    id: 'commercial',
    title: 'Commercial solar',
    description: 'Renewable energy systems designed around your business site and operating needs.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Modern commercial workspace with large windows.',
    Icon: Building2,
  },
  {
    id: 'battery',
    title: 'Battery storage',
    description: 'Store surplus solar power and make more of the energy you generate.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Renewable energy infrastructure in a green landscape.',
    Icon: BatteryCharging,
  },
  {
    id: 'maintenance',
    title: 'Care & monitoring',
    description: 'Keep an eye on system performance and get support to keep your setup working well.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Rows of solar panels beneath the sun.',
    Icon: Wrench,
  },
  {
    id: 'consultation',
    title: 'Solar planning',
    description: 'Get guidance on system sizing, site suitability, and the right next steps for solar.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=85',
    imageAlt: 'Solar panels producing clean energy in an open landscape.',
    Icon: ScanSearch,
  },
]

export function ImageCardFan({ cards = services, className = '' }) {
  const [activeIndex, setActiveIndex] = useState(2)

  function selectPrevious() {
    setActiveIndex((current) => (current - 1 + cards.length) % cards.length)
  }

  function selectNext() {
    setActiveIndex((current) => (current + 1) % cards.length)
  }

  return (
    <section id="services" className={`bg-[#f5f7ef] px-5 py-16 text-[#20382d] sm:px-8 md:py-24 ${className}`} aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">
              <Sun size={15} aria-hidden="true" /> What we do
            </p>
            <h2 id="services-title" className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
              Solar services, made clear.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#5b6e61] sm:text-base">
              From first plans to ongoing care, explore the ways EcoRay can help you make the switch.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
            <button
              className="grid h-10 w-10 place-items-center border border-[#cbd4c5] bg-[#fffef8] text-[#20382d] transition-colors hover:bg-[#e6edce] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
              type="button"
              aria-label="Previous service"
              onClick={selectPrevious}
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              className="grid h-10 w-10 place-items-center border border-[#cbd4c5] bg-[#fffef8] text-[#20382d] transition-colors hover:bg-[#e6edce] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
              type="button"
              aria-label="Next service"
              onClick={selectNext}
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="relative hidden h-105 items-center justify-center overflow-hidden md:flex" role="group" aria-label="EcoRay services">
          {cards.map((card, index) => {
            let offset = index - activeIndex
            if (offset > cards.length / 2) offset -= cards.length
            if (offset < -cards.length / 2) offset += cards.length
            const isActive = offset === 0
            const Icon = card.Icon ?? Sun
            const clampedOffset = Math.max(-2, Math.min(2, offset))
            const image = card.image ?? card.src

            return (
              <button
                className="absolute top-1/2 h-85 w-62.5 overflow-hidden border-2 border-[#fffef8] bg-[#20382d] text-left text-white shadow-[0_16px_38px_rgba(18,37,28,0.2)] transition-[transform,filter] duration-500 ease-out focus-visible:z-20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#315440]"
                key={card.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`${card.title}: ${card.description}`}
                onClick={() => setActiveIndex(index)}
                style={{
                  left: `calc(50% + ${clampedOffset * 150}px)`,
                  zIndex: isActive ? 10 : 5 - Math.abs(clampedOffset),
                  transform: `translate(-50%, -50%) translateY(${isActive ? -16 : Math.abs(clampedOffset) * 12}px) rotate(${clampedOffset * 7}deg)`,
                  filter: isActive ? 'none' : 'saturate(0.78)',
                }}
              >
                <img className="absolute inset-0 h-full w-full object-cover" src={image} alt={card.imageAlt ?? card.title} loading="lazy" />
                <span className="absolute inset-0 bg-linear-to-t from-[#10251a]/95 via-[#10251a]/35 to-[#10251a]/10" />
                <span className="absolute inset-x-0 bottom-0 p-5">
                  <span className="mb-3 grid h-10 w-10 place-items-center border border-white/45 bg-[#20382d]/40 text-[#e3ed81]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="block font-[Georgia,serif] text-2xl leading-tight">{card.title}</span>
                  <span className={`mt-2 block text-sm leading-5 text-white/80 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                    {card.description}
                  </span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 md:hidden" role="group" aria-label="EcoRay services">
          {cards.map((card, index) => {
            const Icon = card.Icon ?? Sun
            const isActive = index === activeIndex
            const image = card.image ?? card.src

            return (
              <button
                className={`relative h-82.5 min-w-[78vw] snap-center overflow-hidden border-2 bg-[#20382d] text-left text-white transition-colors sm:min-w-75 ${isActive ? 'border-[#dce94d]' : 'border-white'}`}
                key={card.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`${card.title}: ${card.description}`}
                onClick={() => setActiveIndex(index)}
              >
                <img className="absolute inset-0 h-full w-full object-cover" src={image} alt={card.imageAlt ?? card.title} loading="lazy" />
                <span className="absolute inset-0 bg-linear-to-t from-[#10251a]/95 via-[#10251a]/30 to-transparent" />
                <span className="absolute bottom-0 left-0 p-5">
                  <span className="mb-3 grid h-10 w-10 place-items-center border border-white/45 bg-[#20382d]/40 text-[#e3ed81]">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="block font-[Georgia,serif] text-2xl leading-tight">{card.title}</span>
                  <span className="mt-2 block text-sm leading-5 text-white/85">{card.description}</span>
                </span>
              </button>
            )
          })}
        </div>

        <p className="mt-2 text-center text-xs text-[#718074] md:mt-0">
          Select a card to explore a service
        </p>
      </div>
    </section>
  )
}

export default ImageCardFan