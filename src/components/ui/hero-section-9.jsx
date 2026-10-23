import { ArrowUpRight, Leaf, Sun, House, Settings2 } from 'lucide-react'

const defaultImages = [
  {
    src: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1100&q=85',
    alt: 'Solar panels collecting sunlight across an open landscape.',
  },
  {
    src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=85',
    alt: 'Contemporary home surrounded by a green landscape.',
  },
  {
    src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=85',
    alt: 'Rows of solar panels producing renewable energy.',
  },
]

const defaultStats = [
  { value: 'Home & business', label: 'Solar options', icon: <House size={18} aria-hidden="true" /> },
  { value: 'Made for you', label: 'Tailored systems', icon: <Settings2 size={18} aria-hidden="true" /> },
  { value: 'Clean energy', label: 'A brighter choice', icon: <Leaf size={18} aria-hidden="true" /> },
]

export default function HeroSection9({
  title = <>Make the switch<br />to <em>solar.</em></>,
  subtitle = 'Thoughtful solar solutions for homes and businesses. Understand your options, find a system that fits, and take your next step with EcoRay.',
  actions = [
    { text: 'Explore solar', href: '#services', variant: 'default' },
    { text: 'About EcoRay', href: '#about', variant: 'outline' },
  ],
  stats = defaultStats,
  images = defaultImages,
}) {
  const imageItems = images.map((image, index) => (
    typeof image === 'string'
      ? { src: image, alt: defaultImages[index]?.alt ?? 'Solar energy and sustainable living.' }
      : image
  ))

  return (
    <section id="top" className="overflow-hidden bg-[#f5f7ef] px-5 py-12 text-[#20382d] sm:px-8 sm:py-16 lg:py-20" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="relative z-10">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#54725d]">
            <Sun size={16} aria-hidden="true" /> A brighter way forward
          </p>
          <h1 id="hero-title" className="max-w-xl font-[Georgia,serif] text-5xl font-normal leading-[1.02] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-[#5b6e61]">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {actions.map((action) => {
              const className = `inline-flex min-h-12 items-center justify-center gap-3 px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440] ${
                action.variant === 'outline'
                  ? 'border border-[#9dad9e] text-[#20382d] hover:bg-[#e6edce]'
                  : 'bg-[#1b513a] text-white hover:bg-[#276b4d]'
              }`

              return action.href ? (
                <a className={className} href={action.href} key={action.text}>
                  {action.text} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : (
                <button className={className} type="button" onClick={action.onClick} key={action.text}>
                  {action.text} <ArrowUpRight size={16} aria-hidden="true" />
                </button>
              )
            })}
          </div>

          <div className="mt-11 grid max-w-xl grid-cols-1 border-t border-[#d8e0d3] pt-5 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat) => (
              <div className="flex items-center gap-3 py-3 sm:items-start sm:gap-2" key={`${stat.value}-${stat.label}`}>
                <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#e6edce] text-[#315440] sm:h-8 sm:w-8">
                  {stat.icon}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#20382d]">{stat.value}</span>
                  {stat.label && <span className="mt-1 block text-xs text-[#718074]">{stat.label}</span>}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-105 w-full max-w-140 sm:h-135 lg:h-150">
          {imageItems[0] && (
            <img
              className="absolute left-0 top-0 h-[82%] w-[70%] object-cover"
              src={imageItems[0].src}
              alt={imageItems[0].alt}
              fetchPriority="high"
            />
          )}
          {imageItems[1] && (
            <img
              className="absolute right-0 top-[6%] h-[40%] w-[38%] border-4 border-[#f5f7ef] object-cover sm:border-[6px]"
              src={imageItems[1].src}
              alt={imageItems[1].alt}
              loading="lazy"
            />
          )}
          {imageItems[2] && (
            <img
              className="absolute bottom-0 right-[3%] h-[42%] w-[48%] border-4 border-[#f5f7ef] object-cover sm:border-[6px]"
              src={imageItems[2].src}
              alt={imageItems[2].alt}
              loading="lazy"
            />
          )}
          <span className="absolute bottom-[8%] left-[4%] inline-flex items-center gap-2 bg-[#dce94d] px-4 py-3 text-xs font-semibold text-[#20382d]">
            <Leaf size={16} aria-hidden="true" /> Energy with intention
          </span>
        </div>
      </div>
    </section>
  )
}