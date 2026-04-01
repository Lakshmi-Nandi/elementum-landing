const avatars = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/45.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/76.jpg',
  'https://randomuser.me/api/portraits/women/90.jpg',
]

export default function Hero() {
  return (
    <section className="relative px-8 md:px-16 pt-16 pb-32 text-center overflow-hidden">

      {/* Purple blob top right */}
      <div className="absolute top-6 right-10 w-14 h-20 bg-purple-300 rounded-full opacity-70" />

      {/* Red squiggle left */}
      <svg
        className="absolute left-0 top-16 w-12 opacity-50"
        viewBox="0 0 60 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 10 C10 40, 60 80, 20 120 C-10 150, 50 180, 30 200"
          stroke="#ff6b6b"
          strokeWidth="2"
        />
      </svg>

      {/* Main heading */}
      <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
        The{' '}
        <span className="underline decoration-gray-800 decoration-2">
          thinkers
        </span>{' '}
        and
        <br />
        doers were{' '}
        <span className="bg-pink-200 px-1 rounded">changing</span>
        <br />
        the{' '}
        <span className="bg-green-200 px-1 rounded">status</span>{' '}
        Quo with
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-16">
        We are a team of strategists, designers communications, researchers.
        Together,
        <br className="hidden md:block" />
        we believe that progress only happens when you refuse to play things
        safe.
      </p>

      {/* Avatars row */}
      <div className="relative h-28 max-w-2xl mx-auto">
        {avatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="team member"
            className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md hover:scale-110 transition-transform duration-300"
            style={{
              left: `${i * 15}%`,
              top: i % 2 === 0 ? '0px' : '16px',
            }}
          />
        ))}
      </div>

    </section>
  )
}