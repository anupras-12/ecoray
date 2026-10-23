import { useState } from 'react'
import { ArrowUpRight, BatteryCharging, Check, Leaf, Sprout, Sun } from 'lucide-react'

const options = [
  {
    id: 'environment',
    label: 'Environment',
    description: 'Choose energy with a lighter footprint.',
    heading: 'Good for a brighter planet.',
    body: 'Solar power produces electricity without burning fuel at your home, helping reduce the carbon intensity of the energy you use.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Sunlight filtering through a thriving green forest.',
    points: ['Generate renewable electricity', 'Reduce reliance on fossil-fuel energy', 'Make a practical climate-conscious choice'],
    Icon: Leaf,
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    description: 'Build cleaner energy into everyday life.',
    heading: 'A lasting change starts here.',
    body: 'Pair renewable power with thoughtful energy use to support a more resilient, sustainable future for your home and community.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Solar panels generating renewable energy in an open landscape.',
    points: ['Use a renewable source close to home', 'Support a more resilient energy mix', 'Plan for long-term energy needs'],
    Icon: Sprout,
  },
  {
    id: 'storage',
    label: 'Battery storage',
    description: 'Keep more of your solar power.',
    heading: 'Save energy for later.',
    body: 'Pair solar with battery storage to keep electricity available for the times your panels are not producing.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Power transmission lines crossing a green landscape at sunset.',
    points: ['Store surplus solar generation', 'Use stored energy after sunset', 'Choose storage to suit your needs'],
    Icon: BatteryCharging,
  },
]

export default function InteractiveSelector() {
  const [selectedId, setSelectedId] = useState(options[0].id)
  const selected = options.find((option) => option.id === selectedId) ?? options[0]
  const SelectedIcon = selected.Icon

  return (
    <section className="w-full bg-[#f5f7ef] px-5 py-16 text-[#20382d] sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">
            <Sun size={15} aria-hidden="true" /> Solar, shaped around you
          </p>
          <h2 className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            Find your way to solar.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#5b6e61] sm:text-base">
            Choose what matters most. We will help you explore a solar setup that fits.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3" role="group" aria-label="Choose a solar solution">
          {options.map(({ id, label, description, Icon }) => {
            const isSelected = id === selectedId
            return (
              <button
                className={`flex min-h-20 items-center gap-4 border p-4 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440] ${
                  isSelected
                    ? 'border-[#20382d] bg-[#20382d] text-white'
                    : 'border-[#d7dfd3] bg-[#fffef8] text-[#20382d] hover:border-[#78917d]'
                }`}
                type="button"
                key={id}
                aria-pressed={isSelected}
                onClick={() => setSelectedId(id)}
              >
                <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{label}</span>
                  <span className={`mt-1 block text-xs ${isSelected ? 'text-white/75' : 'text-[#718074]'}`}>
                    {description}
                  </span>
                </span>
                {isSelected && <Check size={17} aria-hidden="true" />}
              </button>
            )
          })}
        </div>

        <div className="mt-5 grid overflow-hidden border border-[#d7dfd3] bg-[#fffef8] md:min-h-[360px] md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-56 md:min-h-full">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={selected.image}
              alt={selected.imageAlt}
              key={selected.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12251c]/45 to-transparent" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 bg-[#fffef8] px-3 py-2 text-xs font-semibold text-[#20382d]">
              <SelectedIcon size={16} aria-hidden="true" /> {selected.label}
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-9 md:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#718074]">Explore your option</p>
            <h3 className="mt-3 font-[Georgia,serif] text-3xl font-normal leading-tight sm:text-4xl">
              {selected.heading}
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#5b6e61]">{selected.body}</p>
            <ul className="mt-6 space-y-3">
              {selected.points.map((point) => (
                <li className="flex items-start gap-3 text-sm text-[#354c3d]" key={point}>
                  <Check className="mt-0.5 shrink-0 text-[#5c7b54]" size={16} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <a className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#1d563d] hover:text-[#34734e]" href="#plans">
              Explore EcoRay <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}