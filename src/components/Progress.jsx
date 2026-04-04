import vector2517 from '../assets/Vector 2517.png'
import polygon2 from '../assets/Polygon 2.png'

export default function Progress() {
  return (
    <section style={{
      position: 'relative',
      backgroundColor: '#ffffff',
      padding: '0px 0px 80px 0px',
    }}>

      {/* Vector 2517 - full width curved red line */}
      <img
        src={vector2517}
        alt=""
        style={{
          position: 'absolute',
          top: '-300px',
          left: '100px',
          width: '100%',
          height: 'auto',
          zIndex: 0,
          pointerEvents: 'none',
          objectFit: 'cover',
        }}
      />

      {/* Content row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        position: 'relative',
        zIndex: 1,
        paddingTop: '100px',
        paddingLeft: '60px',
        paddingRight: '60px',
      }}>

        {/* Left - Image */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          minHeight: '400px',
        }}>

          {/* Polygon 2 - triangle top left */}
          <img
            src={polygon2}
            alt=""
            style={{
              position: 'absolute',
              top: '-20px',
              left: '10px',
              width: '80px',
              height: '80px',
              zIndex: 2,
              objectFit: 'contain',
            }}
          />

          {/* Circular image */}
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=500&fit=crop"
            alt="working team"
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

        {/* Right - Text */}
        <div style={{
          flex: 1,
          maxWidth: '500px',
          paddingLeft: '40px',
          position: 'relative',
          zIndex: 1,
        }}>
          <h2 style={{
            fontFamily: "Gerbil",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
            fontWeight: '400',
            lineHeight: '1.2',
            color: '#000000',
            marginBottom: '24px',
          }}>
            See how we can
            <br />
            help you progress
          </h2>

          <p style={{
            fontFamily: "'Satoshi', sans-serif",
            fontSize: '15px',
            color: '#555555',
            lineHeight: '1.8',
            marginBottom: '24px',
          }}>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>

          
          <a  href="#"
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: '14px',
              fontWeight: '500',
              color: '#000000',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            Read more <span>————</span>
          </a>
        </div>

      </div>
    </section>
  )
}