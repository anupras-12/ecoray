import { useState } from 'react'
import { Leaf, Sun } from 'lucide-react'
import './navbar-02.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Solutions', href: '#services' },
  { label: 'Why EcoRay', href: '#why-ecoray' },
  { label: 'Plans', href: '#plans' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="ecoray-header">
      <nav className="ecoray-nav" aria-label="Main navigation">
        <a className="ecoray-brand" href="#top" onClick={closeMenu} aria-label="EcoRay home">
          <span className="ecoray-brand-mark" aria-hidden="true">
            <Sun className="ecoray-brand-sun" size={29} strokeWidth={1.6} />
            <Leaf className="ecoray-brand-leaf" size={17} strokeWidth={1.8} />
          </span>
          <span>eco<span className="ecoray-brand-accent">ray</span></span>
        </a>

        <button
          className={`ecoray-menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="ecoray-navigation-links"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`ecoray-nav-panel${menuOpen ? ' is-open' : ''}`}
          id="ecoray-navigation-links"
        >
          <div className="ecoray-nav-links">
            {links.map(({ label, href }) => (
              <a href={href} key={label} onClick={closeMenu}>{label}</a>
            ))}
          </div>
          <a className="ecoray-nav-cta" href="#contact" onClick={closeMenu}>
            Get a quote <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}