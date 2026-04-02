import ellipse from '../assets/Ellipse 739.png'
import vector from '../assets/Vector 2519.png'

export default function Newsletter() {
  return (
    <section
      className="relative text-center overflow-hidden"
      style={{ padding: '80px 60px', backgroundColor: '#D7EEDD' }}
    >

      {/* Red lines (Vector 2519) — top, slightly left of center */}
      <img
        src={vector}
        alt=""
        style={{
          position: 'absolute',
          top: '0px',
          left: '50%',
          transform: 'translateX(-120px)', // shifted left of center like Figma (671px vs center ~900px)
          width: 'clamp(100px, 12vw, 100px)',
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
          transform: 'translateX(-120px)', // shifted left of center like Figma (671px vs center ~900px)
          width: 'clamp(100px, 12vw, 100px)',
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
          right: '80px',
          // transform: 'translateY(-50%) rotate(-120deg)', // angle: -120deg from Figma
          width: 'clamp(120px, 16vw, 144px)',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />

      {/* Heading */}
      <h2
        className="relative z-10 font-serif leading-tight mb-4"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
      >
        Subscribe to
        <br />
        our newsletter
      </h2>

      {/* Subtext */}
      <p
        className="relative z-10 text-gray-500 mb-10"
        style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)' }}
      >
        To make your stay special and even more memorable
      </p>

      {/* Button */}
      <button
        className="relative z-10 bg-gray-900 text-white rounded-full hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-200"
        style={{
          fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
          padding: 'clamp(10px, 1.5vw, 14px) clamp(28px, 4vw, 40px)',
        }}
      >
        Subscribe Now
      </button>

    </section>
  )
}