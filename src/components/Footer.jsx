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
  fontSize: 'clamp(11px, 1.5vw, 12px)',
  color: '#6b7280',
  textDecoration: 'none',
  display: 'block',
  lineHeight: '1.6',
  transition: 'color 0.3s ease',
}

const headingStyle = {
  fontSize: 'clamp(10px, 1.2vw, 11px)',
  fontWeight: '600',
  fontFamily: "Gerbil",
  textTransform: 'uppercase',
  letterSpacing: '2px',
  color: '#1a1a1a',
  marginBottom: 'clamp(12px, 2vw, 16px)',
}

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#D7EEDD',
      borderTop: '1px solid #f3f4f6',
      padding: 'clamp(40px, 6vw, 60px) clamp(20px, 5vw, 60px) clamp(24px, 4vw, 32px) clamp(20px, 5vw, 60px)',
    }}>

      {/* Top grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        gap: 'clamp(30px, 5vw, 40px)',
        marginBottom: 'clamp(30px, 5vw, 40px)',
      }}>

        {/* Link columns */}
        {cols.map(col => (
          <div key={col.title} style={{ minWidth: '100px' }}>
            <h4 style={headingStyle}>{col.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.2vw, 12px)' }}>
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
        <div style={{ minWidth: '100px' }}>
          <h4 style={headingStyle}>Contact</h4>
          <address style={{
            fontStyle: 'normal',
            fontSize: 'clamp(11px, 1.5vw, 12px)',
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
        paddingTop: 'clamp(16px, 3vw, 24px)',
        textAlign: 'center',
      }}>
        <p style={{ 
          fontSize: 'clamp(10px, 1.2vw, 11px)', 
          color: '#9ca3af',
          margin: 0,
        }}>
          ©2019 Elementum. All rights reserved.
        </p>
      </div>

    </footer>
  )
}