import rectangle657 from '../assets/Rectangle 657.png'
import vector5 from '../assets/Vector 5.png'
import vector2517 from '../assets/Vector 2517.png'
import rectangle661 from '../assets/Rectangle 661.png'

const services = [
  {
    tag: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
    hasImage: false,
  },
  {
    tag: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
    hasImage: false,
  },
  {
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
    hasImage: true,
    imageWord: 'confidence',
  },
]

export default function Services() {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 md:py-20 relative overflow-hidden bg-white">
      {/* ── Heading block ── */}
      <div className="relative mb-12 md:mb-16 lg:mb-20">
        <img
          src={vector2517}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: "clamp(50vw, 74vw, 100%)",
            height: "auto",
            top: "clamp(-300px, -25vw, -280px)",
            right: "-39%",
            transform: "rotate(-1deg)",
            transformOrigin: "right center",
            zIndex: 10,
            opacity: 1,
            objectFit: "contain",
          }}
        />

        <h2
          className="relative z-10"
          style={{
            fontFamily: "'Gerbil', 'Times New Roman', serif",
            fontSize: 'clamp(1.5rem, 3.5vw, 4.5rem)',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            color: '#111111',
            fontWeight: '400',
          }}
        >
          <span style={{ display: 'block' }}>
            What we{" "}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <img
                src={rectangle657}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '110%',
                  height: '95%',
                  objectFit: 'fill',
                  borderRadius: '100%',
                  zIndex: 0,
                }}
              />
              <span style={{ position: 'relative', zIndex: 10, padding: '0 clamp(4px, 1vw, 8px)' }}>can</span>
            </span>
          </span>

          <span style={{ display: 'block' }}>
            <span style={{ position: 'relative', display: 'inline-block' }}>
              offer
              <img
                src={vector5}
                alt=""
                style={{
                  position: 'absolute',
                  left: 0,
                  bottom: 'clamp(-4px, -0.5vw, -8px)',
                  width: '100%',
                  height: 'clamp(10px, 1.5vw, 16px)',
                  objectFit: 'fill',
                  pointerEvents: 'none',
                  zIndex: 0,
                }}
              />
            </span>{" "}
            you!
          </span>
        </h2>
      </div>

      {/* ── Services list ── */}
      <div className="relative z-10">
        {services.map((service, i) => (
          <div
            key={i}
            className="group"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(12px, 2vw, 32px)',
              padding: 'clamp(18px, 2.5vw, 32px) 0',
              borderTop: '1px solid #d1d5db',
              borderBottom: i === services.length - 1 ? '1px solid #d1d5db' : 'none',
              cursor: 'pointer',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {/* Left tag — fixed width, no border, no box */}
            <div
              style={{
                width: 'clamp(100px, 18vw, 200px)',
                flexShrink: 0,
                fontSize: 'clamp(18px, 1.2vw, 13px)',
                fontFamily: "'Satoshi', sans-serif",
                color: '#000000',
                lineHeight: '1.4',
              }}
            >
              {service.tag}
            </div>

            {/* Service title — centered in remaining space */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Gerbil', 'Times New Roman', serif",
                  fontSize: 'clamp(1.2rem, 3vw, 2.4rem)',
                  color: '#111111',
                  lineHeight: '1.2',
                  letterSpacing: '-0.01em',
                  textAlign: 'center',
                  fontWeight: '400',
                  margin: 0,
                }}
              >
                {service.hasImage ? (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      gap: '0.3em',
                    }}
                  >
                    <span>Piloting digital </span>
                    <span style={{ position: 'relative', display: 'inline-block' }}>
                      <span style={{ position: 'relative', zIndex: 20 }}>confidence</span>
                      <img
                        src={rectangle661}
                        alt=""
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -60%)',
                          width: 'clamp(40px, 6vw, 70px)',
                          height: 'clamp(40px, 6vw, 70px)',
                          objectFit: 'cover',
                          borderRadius: '50%',
                          pointerEvents: 'none',
                          zIndex: 10,
                        }}
                      />
                    </span>
                  </span>
                ) : (
                  service.title
                )}
              </h3>
            </div>

            {/* Arrow */}
            <div
              className="group-hover:translate-x-1"
              style={{
                flexShrink: 0,
                color: '#111111',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                viewBox="0 0 36 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: 'clamp(24px, 3.5vw, 40px)', height: 'auto' }}
              >
                <path
                  d="M0 6H34M34 6L29 1M34 6L29 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}