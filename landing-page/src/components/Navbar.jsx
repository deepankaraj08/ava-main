import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Avalogo from '../assets-opt/ava_logo.webp'
import '../navbar.css'

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/team', label: 'Team' }
]

// <header>, not <div>: the old structural rules in index.css/responsive.css
// target "> div:first-child", so this element stays out of their reach.
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`nav-bar ${open ? 'is-open' : ''}`}>

      <div className="nav-inner">

        <Link to="/" className="nav-brand" onClick={close}>
          <img src={Avalogo} className="nav-logo" alt="" width="64" height="64" />
          <span className="nav-brand-text">
            <strong>Avalanche</strong>
            <em>feel Accelerated..</em>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className="nav-pill">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-sheet"
          onClick={() => setOpen(o => !o)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      <nav id="nav-sheet" className="nav-sheet" aria-label="Mobile">
        {LINKS.map(l => (
          <NavLink key={l.to} to={l.to} className="nav-sheet-link" onClick={close}>
            {l.label}
          </NavLink>
        ))}
      </nav>

    </header>
  )
}

export default Navbar
