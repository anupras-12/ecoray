import { useState } from 'react'
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'The whole process felt clear from the first conversation. We finally understand how solar can work for our home.',
    name: 'Maya R.',
    detail: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=85',
    imageAlt: 'Portrait of Maya',
  },
  {
    quote: 'The team took the time to explain our options without making it complicated. We felt looked after throughout.',
    name: 'Daniel K.',
    detail: 'EcoRay customer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=85',
    imageAlt: 'Portrait of Daniel',
  },
  {
    quote: 'It is good to know we are making a more thoughtful energy choice, and the installation was straightforward.',
    name: 'Priya S.',
    detail: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=160&q=85',
    imageAlt: 'Portrait of Priya',
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeTestimonial = testimonials[activeIndex]

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length)
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % testimonials.length)
  }

  return (
    <section className="relative overflow-hidden bg-[#20382d] px-5 py-16 text-[#fffef8] sm:px-8 md:py-24" aria-labelledby="testimonials-title">
      <div className="pointer-events-none absolute -right-28 -top-32 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end md:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#dce94d]">Good energy, shared</p>
          <h2 id="testimonials-title" className="font-[Georgia,serif] text-4xl font-normal leading-tight sm:text-5xl">
            What our customers say.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
            A solar decision is personal. Here are a few words from people who have taken the next step.
          </p>
        </div>

        <div className="border-t border-white/20 pt-7" aria-live="polite" aria-atomic="true">
          <Quote className="mb-5 text-[#dce94d]" size={30} strokeWidth={1.5} aria-hidden="true" />
          <blockquote key={activeIndex}>
            <div className="mb-5 flex gap-1 text-[#dce94d]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
              ))}
            </div>
            <p className="max-w-2xl font-[Georgia,serif] text-2xl leading-snug sm:text-3xl">
              “{activeTestimonial.quote}”
            </p>
            <footer className="mt-7 flex items-center gap-4">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={activeTestimonial.image}
                alt={activeTestimonial.imageAlt}
                loading="lazy"
              />
              <div>
                <cite className="block not-italic text-sm font-semibold">{activeTestimonial.name}</cite>
                <span className="mt-1 block text-xs text-white/60">{activeTestimonial.detail}</span>
              </div>
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center gap-3">
            <button
              className="grid h-10 w-10 place-items-center border border-white/35 text-white transition-colors hover:border-[#dce94d] hover:text-[#dce94d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dce94d]"
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              className="grid h-10 w-10 place-items-center border border-white/35 text-white transition-colors hover:border-[#dce94d] hover:text-[#dce94d] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dce94d]"
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
            <span className="ml-2 text-xs tabular-nums text-white/60" aria-live="off">
              {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection