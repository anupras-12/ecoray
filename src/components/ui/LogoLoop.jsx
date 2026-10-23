import { useEffect, useRef, useState } from 'react'
import './LogoLoop.css'

export default function LogoLoop({
  logos,
  speed = 60,
  direction = 'left',
  width = '100%',
  logoHeight = 32,
  gap = 52,
  hoverSpeed,
  pauseOnHover = true,
  fadeOut = true,
  fadeOutWidth = 0.1,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className = '',
  style = {},
}) {
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const [cycleWidth, setCycleWidth] = useState(0)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    const measure = () => setCycleWidth(list.getBoundingClientRect().width)
    measure()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(list)
    return () => observer.disconnect()
  }, [logos, gap, logoHeight])

  const duration = cycleWidth && speed ? cycleWidth / Math.abs(speed) : 0
  const hoverDuration = cycleWidth && hoverSpeed ? cycleWidth / Math.abs(hoverSpeed) : 0
  const isVertical = direction === 'up' || direction === 'down'
  const reverse = (speed < 0) !== (direction === 'right' || direction === 'down')
  const loopStyle = {
    width: isVertical ? width : width,
    '--logo-loop-gap': `${gap}px`,
    '--logo-loop-height': `${logoHeight}px`,
    '--logo-loop-duration': `${duration}s`,
    '--logo-loop-hover-duration': `${hoverDuration}s`,
    '--logo-loop-fade': `${Math.min(0.5, Math.max(0, fadeOutWidth)) * 100}%`,
    ...style,
  }

  return (
    <div
      ref={rootRef}
      className={`logoloop ${isVertical ? 'logoloop--vertical' : 'logoloop--horizontal'} ${fadeOut ? 'logoloop--fade' : ''} ${scaleOnHover ? 'logoloop--scale-hover' : ''} ${className}`}
      style={loopStyle}
      role="region"
      aria-label={ariaLabel}
      data-pause-hover={hoverSpeed === undefined && pauseOnHover ? '' : undefined}
      data-hover-speed={hoverSpeed !== undefined ? '' : undefined}
      data-static={!speed ? '' : undefined}
    >
      <div
        className="logoloop__track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {[0, 1].map((copy) => (
          <ul
            className="logoloop__list"
            key={copy}
            ref={copy === 0 ? listRef : undefined}
            aria-hidden={copy === 1 ? 'true' : undefined}
          >
            {logos.map((logo, index) => (
              <li className="logoloop__item" key={`${copy}-${logo.title ?? logo.alt ?? index}`}>
                {logo.href && copy === 0 ? (
                  <a className="logoloop__content" href={logo.href} aria-label={logo.title ?? logo.alt}>
                    {logo.node ? logo.node : <img src={logo.src} alt={logo.alt ?? ''} loading="lazy" />}
                    {logo.title && <span className="logoloop__label">{logo.title}</span>}
                  </a>
                ) : (
                  <span className="logoloop__content" aria-hidden={copy === 1 ? 'true' : undefined}>
                    {logo.node ? logo.node : <img src={logo.src} alt={copy === 1 ? '' : logo.alt ?? ''} loading="lazy" />}
                    {logo.title && <span className="logoloop__label">{logo.title}</span>}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}