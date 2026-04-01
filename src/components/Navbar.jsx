import { useState } from 'react'

const links = ['Home', 'Studio', 'Services', 'Connect', 'FAQs']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">

      {/* Main navbar row */}
      <div className="flex items-center justify-between px-8 md:px-16 py-5">

        {/* Logo */}
        <div className="font-serif text-xl font-bold tracking-wide">
          Elementum
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              
                href="#"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              <a>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-0.5 bg-gray-800 block transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 block transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gray-800 block transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-6">
          <ul className="flex flex-col gap-5">
            {links.map(link => (
              <li key={link}>
                
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setOpen(false)}
                <a>
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