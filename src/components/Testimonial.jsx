import vector5 from '../assets/Vector 5.png'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.svg'
import profile3 from '../assets/profile3.svg'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.svg'
import profile6 from '../assets/profile6.svg'
import profile7 from '../assets/profile7.svg'
import profile8 from '../assets/profile8.png'

export default function About() {
  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(30px, 6vw, 80px) clamp(20px, 5vw, 60px)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 'clamp(40px, 6vw, 60px)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Heading with first left & right profiles */}
        <div
          style={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 3,
            paddingBottom: 'clamp(8px, 1vw, 10px)',
          }}
        >
          <h2
            style={{
              fontFamily: "'Gerbil', sans-serif",
              fontSize: 'clamp(1.5rem, 4vw, 3.4rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              color: '#111111',
              margin: 0,
              letterSpacing: '-0.5px',
              position: 'relative',
              zIndex: 4,
            }}
          >
            <span style={{background: "#D7EEDD", borderRadius: "40px", padding: "0 clamp(4px, 1vw, 8px)"}}>What</span> our customer
            <br />
            says About Us
          </h2>
          
          <img
            src={vector5}
            alt="yellow underline"
            style={{
              display: 'block',
              margin: 'clamp(4px, 1vw, 6px) auto 0',
              width: 'clamp(140px, 25vw, 200px)',
              maxWidth: '90%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 4,
            }}
          />

          {/* First LEFT profile - overlaps heading */}
          <img
            src={profile1}
            alt="customer"
            style={{
              position: 'absolute',
              top: 'clamp(10px, 2vw, 15px)',
              left: 'clamp(10px, 5vw, 8%)',
              width: 'clamp(60px, 12vw, 97px)',
              height: 'clamp(60px, 12vw, 97px)',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              zIndex: 2,
            }}
          />

          {/* First RIGHT profile - overlaps heading */}
          <img
            src={profile6}
            alt="customer"
            style={{
              position: 'absolute',
              top: 'clamp(8px, 2vw, 10px)',
              right: 'clamp(10px, 5vw, 8%)',
              width: 'clamp(60px, 12vw, 95px)',
              height: 'clamp(60px, 12vw, 95px)',
              borderRadius: '50%',
              objectFit: 'cover',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              zIndex: 2,
            }}
          />
        </div>

        {/* Testimonial area - profiles moved UPWARD to reduce gap */}
        <div
          style={{
            position: 'relative',
            minHeight: 'clamp(300px, 60vw, 380px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: 'clamp(-40px, -8vw, -60px)',
          }}
        >
          {/* Left side profiles (excluding first one) */}
          <img
            src={profile2}
            alt="customer"
            style={avatarStyle({
              top: 'clamp(40px, 8vw, 60px)',
              left: 'clamp(30px, 5vw, 50px)',
              width: 'clamp(50px, 10vw, 70px)',
              height: 'clamp(50px, 10vw, 70px)',
            })}
          />

          <img
            src={profile3}
            alt="customer"
            style={avatarStyle({
              top: 'clamp(70px, 12vw, 105px)',
              left: 'clamp(100px, 15vw, 150px)',
              width: 'clamp(100px, 20vw, 150px)',
              height: 'clamp(100px, 20vw, 150px)',
            })}
          />

          <img
            src={profile4}
            alt="customer"
            style={avatarStyle({
              top: 'clamp(150px, 30vw, 225px)',
              left: 'clamp(30px, 5vw, 50px)',
              width: 'clamp(70px, 15vw, 100px)',
              height: 'clamp(70px, 15vw, 100px)',
            })}
          />

          {/* Right side profiles (excluding first one) */}
          <img
            src={profile5}
            alt="customer"
            style={avatarStyle({
              top: 'clamp(0px, 2vw, 5px)',
              right: 'clamp(200px, 20vw, 250px)',
              width: 'clamp(50px, 10vw, 65px)',
              height: 'clamp(50px, 10vw, 65px)',
            })}
          />

          <img
            src={profile7}
            alt="customer"
            style={avatarStyle({
              top: 'clamp(70px, 12vw, 95px)',
              right: 'clamp(150px, 18vw, 200px)',
              width: 'clamp(60px, 12vw, 80px)',
              height: 'clamp(60px, 12vw, 80px)',
            })}
          />

          <img
            src={profile8}
            alt="customer"
            style={avatarStyle({
              top: 'clamp(120px, 20vw, 155px)',
              right: 'clamp(10px, 2vw, 20px)',
              width: 'clamp(120px, 25vw, 170px)',
              height: 'clamp(120px, 25vw, 170px)',
            })}
          />

          {/* Center card */}
          <div
            className="testimonial-card"
            style={{
              width: '100%',
              maxWidth: '560px',
              background: '#F5FAF7',
              borderRadius: 'clamp(20px, 4vw, 28px)',
              padding: 'clamp(18px, 3vw, 28px) clamp(20px, 4vw, 34px)',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 'clamp(12px, 2vw, 18px)',
                left: 'clamp(16px, 3vw, 22px)',
                fontSize: 'clamp(40px, 8vw, 62px)',
                lineHeight: 1,
                color: '#D7DDDA',
                fontFamily: 'serif',
                fontWeight: 700,
              }}
            >
              "
            </span>

            <p
              style={{
                margin: 0,
                fontFamily: "'Satoshi', sans-serif",
                fontSize: 'clamp(14px, 2.5vw, 20px)',
                fontWeight: 300,
                lineHeight: 1.3,
                color: '#1E1E1E',
                maxWidth: '430px',
                marginInline: 'auto',
                letterSpacing: '-0.02em',
              }}
            >
              Elementum delivered the site within the timeline
              as they requested. In the end, the client found a 50%
              increase in traffic within days since its launch. They
              also had an impressive ability to use technologies that
              the company hasn't used, which have also proved to
              be easy to use and reliable
            </p>

            <span
              style={{
                position: 'absolute',
                right: 'clamp(16px, 3vw, 22px)',
                bottom: 'clamp(8px, 1vw, 12px)',
                fontSize: 'clamp(40px, 8vw, 62px)',
                lineHeight: 1,
                color: '#D7DDDA',
                fontFamily: 'serif',
                fontWeight: 700,
              }}
            >
              "
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .testimonial-card {
            max-width: 520px !important;
          }
        }

        @media (max-width: 900px) {
          .testimonial-card {
            max-width: 92% !important;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            max-width: 100% !important;
          }

          section img[alt="customer"] {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .testimonial-card {
            padding: 16px 12px !important;
          }
        }
      `}</style>
    </section>
  )
}

function avatarStyle({ top, left, right, width, height }) {
  return {
    position: 'absolute',
    top,
    left,
    right,
    width,
    height,
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
    zIndex: 1,
  }
}