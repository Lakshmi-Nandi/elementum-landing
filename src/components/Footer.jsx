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

const linkStyle = {
  fontSize: '12px',
  color: '#6b7280',
  textDecoration: 'none',
  display: 'block',
  lineHeight: '1.6',
}

const headingStyle = {
  fontSize: '11px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#1a1a1a',
  marginBottom: '16px',
}

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#D7EEDD',
      borderTop: '1px solid #f3f4f6',
      padding: '60px 60px 32px 60px',
    }}>

      {/* Top grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        marginBottom: '40px',
      }}>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title} style={{ minWidth: '130px', flex: 1 }}>
            <h4 style={headingStyle}>{col.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {col.links.map(link => (
                <li key={link}>
                  
                  <a  href="#"
                    style={linkStyle}
                    onMouseEnter={e => e.target.style.color = '#111'}
                    onMouseLeave={e => e.target.style.color = '#6b7280'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Address column */}
        <div style={{ minWidth: '160px', flex: 1 }}>
          <h4 style={headingStyle}>Contact</h4>
          <address style={{
            fontStyle: 'normal',
            fontSize: '12px',
            color: '#6b7280',
            lineHeight: '2',
          }}>
            1498e7 Lincoln, STE<br />
            300Diego, IL 43682<br />
            328-466789033<br />
            
            <a  href="mailto:info@elementum.com"
              style={linkStyle}
              onMouseEnter={e => e.target.style.color = '#111'}
              onMouseLeave={e => e.target.style.color = '#6b7280'}
            >
              info@elementum.com
            </a>
          </address>
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid #f3f4f6',
        paddingTop: '24px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '11px', color: '#9ca3af' }}>
          ©2019 Elementum. All rights reserved.
        </p>
      </div>

    </footer>
  )
}