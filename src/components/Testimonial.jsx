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
        padding: '30px 20px 80px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          // margin: '0 auto',
          position: 'relative',
          width: '100%',
        }}
      >
        {/* Heading with first left & right profiles - REDUCED GAP */}
        <div
          style={{
            textAlign: 'center',
            // marginBottom: '5px', // CHANGED: was 25px → now 5px
            position: 'relative',
            zIndex: 3,
            paddingBottom: '10px',
          }}
        >
          <h2
            style={{
              fontFamily: "'Satoshi', sans-serif",
              fontSize: 'clamp(2rem, 4vw, 3.4rem)',
              fontWeight: 500,
              lineHeight: 1.05,
              color: '#111111',
              margin: 0,
              letterSpacing: '-0.5px',
              position: 'relative',
              zIndex: 4,
            }}
          >
            What our customer
            <br />
            says About Us
          </h2>
          
          <img
            src={vector5}
            alt="yellow underline"
            style={{
              display: 'block',
              margin: '6px auto 0',
              width: '180px',
              maxWidth: '38%',
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
              top: '15px',
              left: '8%',
              width: '97px',
              height: '97px',
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
              top: '10px',
              right: '8%',
              width: '95px',
              height: '95px',
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
            minHeight: '380px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: '-60px', // CHANGED: Pulls up to overlap heading area
          }}
        >
          {/* Left side profiles (excluding first one) - adjusted upward */}
          <img
            src={profile2}
            alt="customer"
            style={avatarStyle({
              top: '60px',  // was 105px
              left: '50px',
              width: '70px',
              height: '70px',
            })}
          />

          <img
            src={profile3}
            alt="customer"
            style={avatarStyle({
              top: '105px', // was 125px
              left: '150px',
              width: '150px',
              height: '150px',
            })}
          />

          <img
            src={profile4}
            alt="customer"
            style={avatarStyle({
              top: '225px', // was 245px
              left: '50px',
              width: '100px',
              height: '100px',
            })}
          />

          {/* Right side profiles (excluding first one) - adjusted upward */}
          <img
            src={profile5}
            alt="customer"
            style={avatarStyle({
              top: '5px',   // was 25px
              right: '250px',
              width: '65px',
              height: '65px',
            })}
          />

          <img
            src={profile7}
            alt="customer"
            style={avatarStyle({
              top: '95px',  // was 115px
              right: '200px',
              width: '80px',
              height: '80px',
            })}
          />

          <img
            src={profile8}
            alt="customer"
            style={avatarStyle({
              top: '155px', // was 155px
              right: '20px',
              width: '170px',
              height: '170px',
            })}
          />

          {/* Center card */}
          <div
            className="testimonial-card"
            style={{
              width: '100%',
              maxWidth: '560px',
              background: '#F5FAF7',
              borderRadius: '28px',
              padding: '28px 34px',
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '18px',
                left: '22px',
                fontSize: '62px',
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
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: 1.65,
                color: '#1E1E1E',
                maxWidth: '430px',
                marginInline: 'auto',
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
                right: '22px',
                bottom: '12px',
                fontSize: '62px',
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
            padding: 24px 20px !important;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            max-width: 100% !important;
            border-radius: 22px !important;
            padding: 22px 16px !important;
          }

          section img[alt="customer"] {
            display: none !important;
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