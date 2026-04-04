import ellipse from '../assets/Ellipse 739.png'
import vector from '../assets/Vector 2519.png'

export default function Newsletter() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{ 
        padding: 'clamp(50px, 8vw, 80px) clamp(20px, 5vw, 60px)',
        backgroundColor: '#D7EEDD' 
      }}
    >

      {/* Red lines (Vector 2519) — top, slightly left of center */}
      <img
        src={vector}
        alt=""
        style={{
          position: 'absolute',
          top: '0px',
          left: '50%',
          transform: 'translateX(-120px)',
          width: 'clamp(80px, 12vw, 120px)',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      <img
        src={vector}
        alt=""
        style={{
          position: 'absolute',
          top: '0px',
          left: '55%',
          transform: 'translateX(-120px)',
          width: 'clamp(80px, 12vw, 120px)',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Purple semicircle (Ellipse 739) — right side, vertically centered */}
      <img
        src={ellipse}
        alt=""
        style={{
          position: 'absolute',
          top: '40%',
          right: 'clamp(30px, 5vw, 80px)',
          width: 'clamp(100px, 16vw, 144px)',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Heading */}
      <h2
        className="relative z-10 font-Gerbil leading-tight mb-4"
        style={{ 
          fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
          fontFamily: "'Gerbil', serif",
          fontWeight: '400',
          marginBottom: 'clamp(12px, 2vw, 16px)',
          margin: '0 0 clamp(12px, 2vw, 16px) 0',
        }}
      >
        Subscribe to
        <br />
        our newsletter
      </h2>

      {/* Subtext */}
      <p
        className="relative z-10 text-gray-500 mb-10"
        style={{ 
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          marginBottom: 'clamp(20px, 3vw, 32px)',
          margin: '0 0 clamp(20px, 3vw, 32px) 0',
          color: '#6b7280',
        }}
      >
        To make your stay special and even more memorable
      </p>

      {/* Button */}
      <button
        className="relative z-10 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-200"
        style={{
          fontSize: 'clamp(12px, 1.8vw, 14px)',
          padding: 'clamp(10px, 1.5vw, 14px) clamp(28px, 4vw, 40px)',
          border: 'none',
          cursor: 'pointer',
          fontWeight: '500',
        }}
      >
        Subscribe Now
      </button>

    </section>
  )
}