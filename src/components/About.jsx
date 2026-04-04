import vector5 from '../assets/Vector 5.png'
import rectangle657 from '../assets/Rectangle 657.png'
import polygon3 from '../assets/Polygon 3.png'

export default function About() {
  return (
    <section style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'clamp(40px, 8vw, 80px) clamp(20px, 6vw, 60px)',
      position: 'relative',
      backgroundColor: '#ffffff',
      gap: 'clamp(30px, 5vw, 60px)',
      minHeight: 'auto',
      '@media (min-width: 1200px)': {
        minHeight: '100vh',
      }
    }}>

      {/* Left - Text */}
      <div style={{ 
        flex: '1 1 300px', 
        maxWidth: '500px', 
        position: 'relative',
        minWidth: '280px',
      }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: "Gerbil",
          fontSize: 'clamp(1.5rem, 5vw, 2.8rem)',
          fontWeight: '400',
          lineHeight: '1.2',
          color: '#000000',
          margin: '0 0 clamp(16px, 3vw, 24px) 0',
          position: 'relative',
        }}>
          {/* Tomorrow with yellow underline */}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{
              fontFamily: 'Gerbil',
              fontWeight: '400',
              position: 'relative',
              zIndex: 2,
            }}>
              Tomorrow
            </span>
            <img
              src={vector5}
              alt=""
              style={{
                position: 'absolute',
                bottom: '-6px',
                left: '0',
                width: '90%',
                height: 'clamp(12px, 2vw, 20px)',
                objectFit: 'fill',
                zIndex: 1,
              }}
            />
          </span>
          {' '}should
          <br />
          be better than{' '}
          {/* today with green rectangle */}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src={rectangle657}
              alt=""
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                borderRadius: '100px',
                zIndex: 0,
                objectFit: 'fill',
                opacity: 0.35,
              }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>today</span>
          </span>
        </h2>

        {/* Description */}
        <p style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 'clamp(14px, 2vw, 15px)',
          color: '#555555',
          lineHeight: '1.8',
          margin: 'clamp(20px, 3vw, 32px) 0 clamp(16px, 2vw, 20px) 0',
        }}>
          We are a team of strategists, designers communications, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>

        {/* Read more */}
        <a href="#" style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 'clamp(13px, 1.8vw, 14px)',
          fontWeight: '500',
          color: '#000000',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'opacity 0.3s ease',
        }}
        onMouseEnter={e => e.target.style.opacity = '0.6'}
        onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Read more <span>————</span>
        </a>
      </div>

      {/* Right - Image */}
      <div style={{
        flex: '1 1 300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: 'clamp(300px, 50vw, 500px)',
        minWidth: '280px',
      }}>

        {/* Polygon 3 - rotated diamond top right */}
        <img
          src={polygon3}
          alt=""
          style={{
            position: 'absolute',
            top: 'clamp(80px, -3vw, -30px)',
            right: 'clamp(105px, -1vw, -10px)',
            width: 'clamp(80px, 15vw, 130px)',
            height: 'clamp(80px, 15vw, 130px)',
            transform: 'rotate(3deg)',
            zIndex: 1,
            objectFit: 'contain',
            
          }}
        />

        {/* Pink glow blob */}
        <div style={{
          position: 'absolute',
          top: 'clamp(-40px, -8vw, -60px)',
          left: 'clamp(20px, 6vw, 80px)',
          width: 'clamp(100px, 30vw, 280px)',
          height: 'clamp(180px, 30vw, 280px)',
          backgroundColor: '#fda4af',
          borderRadius: '50%',
          filter: 'blur(20px)',
          opacity: 0.45,
          zIndex: 0,
          boxShadow: '0px 0px 272px 85px rgba(194, 80, 146, 0.9)',
        }} />

        {/* Circular image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop"
          alt="team meeting"
          style={{
            width: 'clamp(260px, 35vw, 400px)',
            height: 'clamp(260px, 35vw, 400px)',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            position: 'relative',
            zIndex: 2,
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          section {
            flex-direction: column;
            min-height: auto;
            padding: 40px 20px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          section {
            min-height: auto;
            justify-content: center;
          }
        }

        @media (min-width: 1025px) {
          section {
            min-height: 100vh;
          }
        }
      `}</style>
    </section>
  )
}