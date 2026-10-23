import './minimalist-hero.css'

export function MinimalistHero({
  logoText,
  navLinks = [],
  mainText,
  readMoreLink = '#',
  imageSrc,
  imageAlt = '',
  overlayText,
  socialLinks = [],
  locationText,
  showNavigation = true,
}) {
  return (
    <section className="minimalist-hero" id="top">
      {showNavigation && (
        <div className="minimalist-hero-nav">
          <a className="minimalist-hero-logo" href="#top">{logoText}</a>
          <nav aria-label="Hero navigation">
            {navLinks.map(({ label, href }) => (
              <a href={href} key={label}>{label}</a>
            ))}
          </nav>
        </div>
      )}

      <div className="minimalist-hero-content">
        <div className="minimalist-hero-copy">
          <p className="minimalist-hero-kicker">
            <span aria-hidden="true" /> A brighter way to power home
          </p>
          <h1>
            {overlayText?.part1}<br />
            <span>{overlayText?.part2}</span>
          </h1>
          <p className="minimalist-hero-description">{mainText}</p>
          <a className="minimalist-hero-link" href={readMoreLink}>
            Explore solar <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="minimalist-hero-visual">
          <img src={imageSrc} alt={imageAlt} fetchPriority="high" />
          <div className="minimalist-hero-image-note" aria-hidden="true">
            <span>01</span>
            <span>Made for the long view</span>
          </div>
          <span className="minimalist-hero-stamp" aria-hidden="true">SUN<br />POWER</span>
        </div>
      </div>

      <div className="minimalist-hero-footer">
        <p className="minimalist-hero-location">
          <span aria-hidden="true" /> {locationText}
        </p>
        <div className="minimalist-hero-socials" aria-label="Social media">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a href={href} key={label} aria-label={label}>
              <Icon size={17} strokeWidth={1.7} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}