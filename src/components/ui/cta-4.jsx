import { ArrowUpRight, Check, Sun } from 'lucide-react'

export function Cta4({
  title = 'Ready to explore solar?',
  description = 'Get clear guidance on a solar setup suited to your property, energy use, and goals.',
  buttonText = 'Explore plans',
  buttonUrl = '#plans',
  items = [
    'Personalized property assessment',
    'Solar and battery options explained',
    'A tailored quote with no generic estimates',
  ],
}) {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#dce94d] px-5 py-16 text-[#20382d] sm:px-8 md:py-20" aria-labelledby="cta-title">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#20382d]/10" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#20382d]/10" />

      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#47684c]">
            <Sun size={16} aria-hidden="true" /> Your next step
          </p>
          <h2 id="cta-title" className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#405747] sm:text-base">
            {description}
          </p>
          {items.length > 0 && (
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {items.map((item) => (
                <li className="flex items-start gap-3 text-sm font-medium text-[#354c3d]" key={item}>
                  <Check className="mt-0.5 shrink-0" size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <a
          className="inline-flex min-h-12 w-fit items-center justify-center gap-3 bg-[#18392d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#28553e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18392d]"
          href={buttonUrl}
        >
          {buttonText} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Cta4