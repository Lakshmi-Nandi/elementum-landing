const leftAvatars = [
  'https://randomuser.me/api/portraits/women/12.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/women/33.jpg',
]

const rightAvatars = [
  'https://randomuser.me/api/portraits/men/55.jpg',
  'https://randomuser.me/api/portraits/women/66.jpg',
]

export default function Testimonial() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 px-8 md:px-16 py-20 bg-gray-100">

      {/* Left avatars */}
      <div className="flex md:flex-col flex-row gap-4 shrink-0">
        {leftAvatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="customer"
            className="w-14 h-14 rounded-full object-cover shadow-sm hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>

      {/* Center content */}
      <div className="flex-1 text-center">

        {/* Heading */}
        <h2 className="font-serif text-2xl md:text-4xl leading-snug mb-8">
          What our customer
          <br />
          says <span className="underline decoration-gray-800">About Us</span>
        </h2>

        {/* Quote card */}
        <div className="bg-white rounded-2xl px-10 py-8 shadow-sm relative">

          {/* Opening quote mark */}
          <span className="absolute top-4 left-6 text-6xl text-gray-200 font-serif leading-none">
            "
          </span>

          {/* Quote text */}
          <p className="text-gray-500 text-sm leading-relaxed mt-4">
            Elementum delivered the site within the timeline as they requested.
            In the end, the client found a 50% increase in traffic within 6 days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable.
          </p>

          {/* Closing quote mark */}
          <span className="block text-right text-6xl text-gray-200 font-serif leading-none mt-2">
            "
          </span>

        </div>
      </div>

      {/* Right avatars */}
      <div className="flex md:flex-col flex-row gap-4 shrink-0">
        {rightAvatars.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="customer"
            className="w-14 h-14 rounded-full object-cover shadow-sm hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>

    </section>
  )
}