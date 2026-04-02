import vector5 from '../assets/Vector 5.png'
import rectangle657 from '../assets/Rectangle 657.png'
import polygon3 from '../assets/Polygon 3.png'

export default function About() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      padding: '80px 60px',
      position: 'relative',
      backgroundColor: '#ffffff',
      gap: '40px',
    }}>

      {/* Left - Text */}
      <div style={{ flex: 1, maxWidth: '500px', position: 'relative' }}>

        {/* Heading */}
        <h2 style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: '700',
          lineHeight: '1.2',
          color: '#000000',
          margin: '0 0 24px 0',
          position: 'relative',
        }}>
          {/* Tomorrow with yellow underline */}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            <span style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: '400',
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
                width: '100%',
                height: '12px',
                objectFit: 'fill',
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
          fontSize: '15px',
          color: '#555555',
          lineHeight: '1.8',
          margin: '32px 0 20px 0',
        }}>
          We are a team of strategists, designers communications, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>

        {/* Read more */}
        <a href="#" style={{
          fontFamily: "'Satoshi', sans-serif",
          fontSize: '14px',
          fontWeight: '500',
          color: '#000000',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          Read more <span>————</span>
        </a>
      </div>

      {/* Right - Image */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        minHeight: '400px',
      }}>

        {/* Polygon 3 - rotated diamond top right */}
        <img
          src={polygon3}
          alt=""
          style={{
            position: 'absolute',
            top: '-30px',
            right: '-10px',
            width: '130px',
            height: '130px',
            transform: 'rotate(32deg)',
            zIndex: 2,
            objectFit: 'contain',
          }}
        />

        {/* Pink glow blob */}
        <div style={{
          position: 'absolute',
          top: '-60px',
          right: '80px',
          width: '280px',
          height: '280px',
          backgroundColor: '#fecdd3',
          borderRadius: '50%',
          filter: 'blur(20px)',
          opacity: 0.35,
          zIndex: 0,
        }} />

        {/* Circular image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop"
          alt="team meeting"
          style={{
            width: 'clamp(260px, 32vw, 400px)',
            height: 'clamp(260px, 32vw, 400px)',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>

    </section>
  )
}