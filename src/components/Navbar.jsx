import { useState } from 'react'
import menuIcon from '../assets/Component 126.png'

const links = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkStyle = {
    fontFamily: "'Satoshi', sans-serif",
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#000000',
    textDecoration: 'none',
  }

  const logoStyle = {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: '28px',
    fontWeight: '400',
    lineHeight: '46px',
    color: '#000000',
    width: '201px',
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between px-10 md:px-16 py-3">

        {/* Logo */}
        <div style={logoStyle}>
          Elementum
        </div>

        {/* Desktop links - visible only on md and above */}
        <ul
          className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
          style={{ listStyle: 'none', margin: 0, padding: 0 }}
        >
          {links.map(link => (
            <li key={link}>
              
              <a  href="#"
                style={linkStyle}
                onMouseEnter={e => e.target.style.opacity = '0.6'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger - visible only on mobile/tablet (hidden on md and above) */}
        <div className="md:hidden flex items-center justify-end w-44">
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
          >
            <img
              src={menuIcon}
              alt="menu"
              style={{ width: '45px', height: '11px', objectFit: 'contain' }}
            />
          </button>
        </div>

        {/* Empty div to balance layout on desktop */}
        <div className="hidden md:block w-44" />

      </div>

      {/* Mobile dropdown - only shows on mobile/tablet when open */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-6">
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {links.map(link => (
              <li key={link}>
                
                <a  href="#"
                  style={linkStyle}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  )
}