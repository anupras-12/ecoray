import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react'
import { useState } from 'react'

const reviews = [
  {
    quote: 'The EcoRay team helped us understand our options without making the process feel complicated. We knew what to expect at every step.',
    name: 'Maya R.',
    detail: 'Home solar customer',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=85',
    imageAlt: 'Portrait of Maya',
  },
  {
    quote: 'We appreciated having our questions answered clearly and getting a system recommendation based on how we actually use energy.',
    name: 'Daniel K.',
    detail: 'EcoRay customer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=85',
    imageAlt: 'Portrait of Daniel',
  },
  {
    quote: 'From the first conversation through installation planning, the experience felt thoughtful, practical, and personal.',
    name: 'Priya S.',
    detail: 'Home solar customer',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=180&q=85',
    imageAlt: 'Portrait of Priya',
  },
]

export default function Testimonial1() {
  const [activeIndex, setActiveIndex] = useState(0)
  const review = reviews[activeIndex]

  function showPrevious() {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length)
  }

  function showNext() {
    setActiveIndex((current) => (current + 1) % reviews.length)
  }

  return (
    <section className="bg-[#fffef8] px-5 py-16 text-[#20382d] sm:px-8 md:py-24" aria-labelledby="trust-testimonial-title">
      <div className="mx-auto grid max-w-6xl overflow-hidden border border-[#d7dfd3] md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative hidden min-h-107.5 bg-[#e6edce] md:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85"
            alt="A bright, contemporary home surrounded by greenery."
            loading="lazy"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#10251a]/55 via-transparent to-transparent" />
          <span className="absolute bottom-6 left-6 bg-[#dce94d] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#20382d]">
            Chosen with confidence
          </span>
        </div>

        <div className="flex min-h-97.5 flex-col justify-center p-6 sm:p-10 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#66806d]">The EcoRay experience</p>
          <h2 id="trust-testimonial-title" className="mt-3 font-[Georgia,serif] text-3xl font-normal leading-tight sm:text-4xl">
            Trust starts with listening.
          </h2>

          <div className="mt-8" aria-live="polite" aria-atomic="true">
            <Quote className="mb-4 text-[#66806d]" size={28} strokeWidth={1.5} aria-hidden="true" />
            <div className="mb-4 flex gap-1 text-[#b5c32e]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <Star key={index} size={15} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
              ))}
            </div>
            <blockquote key={activeIndex}>
              <p className="font-[Georgia,serif] text-xl leading-relaxed sm:text-2xl">“{review.quote}”</p>
              <footer className="mt-6 flex items-center gap-3">
                <img className="h-11 w-11 rounded-full object-cover" src={review.image} alt={review.imageAlt} loading="lazy" />
                <span>
                  <cite className="block not-italic text-sm font-semibold">{review.name}</cite>
                  <span className="mt-1 block text-xs text-[#718074]">{review.detail}</span>
                </span>
              </footer>
            </blockquote>
          </div>

          <div className="mt-7 flex items-center gap-2">
            <button
              className="grid h-10 w-10 place-items-center border border-[#cbd4c5] transition-colors hover:bg-[#e6edce] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={17} aria-hidden="true" />
            </button>
            <button
              className="grid h-10 w-10 place-items-center border border-[#cbd4c5] transition-colors hover:bg-[#e6edce] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315440]"
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
            >
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <span className="ml-2 text-xs tabular-nums text-[#718074]" aria-live="off">
              {String(activeIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}