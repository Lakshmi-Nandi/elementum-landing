const cols = [
  {
    title: 'Company',
    links: ['Home', 'Studio', 'Services', 'Jobs']
  },
  {
    title: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Cookies', 'Accessibility']
  },
  {
    title: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter']
  },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 px-8 md:px-16 pt-16 pb-8">

      {/* Top grid */}
      <div className="flex flex-wrap gap-10 mb-10">

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title} className="min-w-[130px] flex-1">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-800 mb-4">
              {col.title}
            </h4>
            <ul className="space-y-3">
              {col.links.map(link => (
                <li key={link}>
                  
                    href="#"
                    className="text-xs text-gray-500 hover:text-gray-900 transition-colors"
                  <a>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Address column */}
        <div className="min-w-[160px] flex-1">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-800 mb-4">
            Contact
          </h4>
          <address className="not-italic text-xs text-gray-500 leading-7">
            1498e7 Lincoln, STE<br />
            300Diego, IL 43682<br />
            328-466789033<br />
            
              href="mailto:info@elementum.com"
              className="hover:text-gray-900 transition-colors"
            <a>
              info@elementum.com
            </a>
          </address>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 pt-6 text-center">
        <p className="text-xs text-gray-400">
          ©2019 Elementum. All rights reserved.
        </p>
      </div>

    </footer>
  )
}