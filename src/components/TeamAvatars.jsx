const team = [
  {
    src: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Alex',
    role: 'Strategist'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Sara',
    role: 'Designer'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: 'John',
    role: 'Developer'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Mia',
    role: 'Researcher'
  },
  {
    src: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: 'Tom',
    role: 'Communicator'
  },
  {
    src: 'https://randomuser.me/api/portraits/women/90.jpg',
    name: 'Lisa',
    role: 'Director'
  },
]

export default function TeamAvatars() {
  return (
    <section className="px-8 md:px-16 py-16 text-center">

      {/* Section label */}
      <p className="text-xs uppercase tracking-widest text-gray-400 mb-10">
        Meet the team
      </p>

      {/* Avatars row */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {team.map((member, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            {/* Avatar image */}
            <div className="relative">
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-full bg-pink-200 opacity-0 group-hover:opacity-60 blur-md transition-all duration-300 scale-110" />

              <img
                src={member.src}
                alt={member.name}
                className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300 z-10"
              />
            </div>

            {/* Name & role - shows on hover */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-semibold text-gray-800">{member.name}</p>
              <p className="text-xs text-gray-400">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}