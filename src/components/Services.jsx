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
    <section className="px-8 md:px-16 py-20 relative overflow-hidden bg-white">
      {/* ── Heading block ── */}
      <div className="relative mb-16 md:mb-20">
        <img
          src={vector2517}
          alt=""
          className="absolute pointer-events-none"
          style={{
            width: "74vw",
            height: "auto",
            top: "-290px",
            right: "-39%",
            transform: "rotate(-1deg)",
            transformOrigin: "right center",
            zIndex: 10,
            opacity: 1,
            objectFit: "contain",
          }}
        />

        <h2
          className="font-serif text-[1.8rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] tracking-[-0.02em] text-gray-900 relative z-10"
          style={{ fontFamily: "'Gerbil', 'Times New Roman', serif" }}
        >
          <span className="block">
            What we{" "}
            <span className="relative inline-block">
              <img
                src={rectangle657}
                alt=""
                className="absolute inset-0 w-full h-full object-fill rounded-full z-0 scale-x-110 scale-y-95"
              />
              <span className="relative z-10 px-2">can</span>
            </span>
          </span>

          <span className="block">
            <span className="relative inline-block">
              offer
              <img
                src={vector5}
                alt=""
                className="absolute left-0 -bottom-1 md:-bottom-2 w-full h-3 md:h-4 object-fill pointer-events-none"
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
            className="flex items-center gap-4 py-7 md:py-9 border-t border-gray-200 group cursor-pointer last:border-b"
          >
            {/* Left tag */}
            <div className="w-44 md:w-52 flex-shrink-0 text-xs md:text-sm text-gray-400 leading-snug hidden md:block">
              {service.tag}
            </div>

            {/* Service title — centered in remaining space */}
            <div className="flex-1 flex items-center justify-center">
              <h3
                className="font-serif text-2xl md:text-[2rem] lg:text-[2.4rem] text-gray-900 leading-tight tracking-tight text-center"
                style={{ fontFamily: "'Gerbil', 'Times New Roman', serif" }}
              >
                {service.hasImage ? (
                  <span className="relative inline-flex items-center flex-wrap gap-x-2">
                    <span>Piloting digital </span>
                    <span className="relative inline-block">
                      <span className="relative z-20">confidence</span>
                      <img
                        src={rectangle661}
                        alt=""
                        className="absolute -top-2 left-[45%] -translate-x-1/2 w-14 h-14 md:w-20 md:h-20 object-cover rounded-full pointer-events-none z-10"
                      />
                    </span>
                  </span>
                ) : (
                  service.title
                )}
              </h3>
            </div>

            {/* Arrow */}
            <div className="flex-shrink-0 text-gray-800 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300">
              <svg
                width="36"
                height="12"
                viewBox="0 0 36 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
  );
}