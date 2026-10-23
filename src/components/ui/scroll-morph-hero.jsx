import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import './scroll-morph-hero.css'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2200&q=90',
    alt: 'Rows of solar panels drawing energy from the sun.',
    kicker: 'Solar for the way you live',
    firstLine: 'Make room',
    secondLine: 'for the sun.',
    description: 'Thoughtful solar for brighter days, lower bills, and a lighter footprint.',
  },
  {
    image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2200&q=90',
    alt: 'Solar panels installed across a rooftop.',
    kicker: 'Power that feels right',
    firstLine: 'A brighter',
    secondLine: 'kind of home.',
    description: 'Make clean energy part of everyday life with a system designed around you.',
  },
  {
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=90',
    alt: 'A field of solar panels beneath a clear sky.',
    kicker: 'A lighter footprint',
    firstLine: 'Good energy',
    secondLine: 'goes further.',
    description: 'Choose a more sustainable future, one sunlit day and one panel at a time.',
  },
  {
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=90',
    alt: 'Solar panels capturing sunlight across an open landscape.',
    kicker: 'Designed around you',
    firstLine: 'Your home,',
    secondLine: 'your energy.',
    description: 'Find a solar solution that fits your home, your needs, and your plans for tomorrow.',
  },
  {
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2200&q=90',
    alt: 'Renewable energy infrastructure beneath a bright open sky.',
    kicker: 'Tomorrow starts today',
    firstLine: 'Let the',
    secondLine: 'future shine.',
    description: 'Turn clean energy into a lasting part of the place you call home.',
  },
]

export default function IntroAnimation() {
  const heroRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const updateMorph = () => {
      const heroTop = window.scrollY + hero.getBoundingClientRect().top
      const pageScrollLimit = document.documentElement.scrollHeight - window.innerHeight
      const morphDistance = Math.min(420, Math.max(1, pageScrollLimit - heroTop))
      const progress = Math.min(1, Math.max(0, (window.scrollY - heroTop) / morphDistance))
      const insetX = 7 * (1 - progress)
      const insetY = 8 * (1 - progress)

      hero.style.setProperty('--morph-inset-x', `${insetX}%`)
      hero.style.setProperty('--morph-inset-y', `${insetY}%`)
      hero.style.setProperty('--morph-radius', `${10 * (1 - progress)}px`)
      hero.style.setProperty('--morph-copy-shift', `${-18 * progress}px`)
    }

    updateMorph()
    window.addEventListener('scroll', updateMorph, { passive: true })
    window.addEventListener('resize', updateMorph)

    return () => {
      window.removeEventListener('scroll', updateMorph)
      window.removeEventListener('resize', updateMorph)
    }
  }, [])

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const intervalId = window.setInterval(showNextSlide, 6000)
    return () => window.clearInterval(intervalId)
  }, [activeSlide, isPaused])

  const slide = slides[activeSlide]

  return (
    <section className="scroll-morph-hero" id="top" ref={heroRef}>
      <div className="scroll-morph-image" aria-live="polite" aria-atomic="true">
        {slides.map((item, index) => (
          <img
            className={`scroll-morph-slide-image${index === activeSlide ? ' is-active' : ''}`}
            src={item.image}
            alt={item.alt}
            key={item.image}
            aria-hidden={index !== activeSlide}
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>
      <div className="scroll-morph-shade" />
      <div className="scroll-morph-copy" key={activeSlide}>
        <p className="scroll-morph-kicker"><span /> {slide.kicker}</p>
        <h1>{slide.firstLine}<br /><em>{slide.secondLine}</em></h1>
        <p className="scroll-morph-description">
          {slide.description}
        </p>
        <a className="scroll-morph-link" href="#about">
          Discover EcoRay <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div
        className="scroll-morph-controls"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false)
        }}
        aria-label="Hero image slider"
      >
        <span className="scroll-morph-index" aria-live="polite">
          {String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <div className="scroll-morph-dots" aria-label="Choose a slide">
          {slides.map((item, index) => (
            <button
              className={`scroll-morph-dot${index === activeSlide ? ' is-active' : ''}`}
              type="button"
              key={item.image}
              aria-label={`Show slide ${index + 1}: ${item.kicker}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <button className="scroll-morph-arrow" type="button" onClick={showPreviousSlide} aria-label="Previous slide">
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        <button className="scroll-morph-arrow" type="button" onClick={showNextSlide} aria-label="Next slide">
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}