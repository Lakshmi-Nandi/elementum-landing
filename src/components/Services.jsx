const services = [
  {
    tag: 'Office of multiple interest content',
    title: 'Colaborative & partnership'
  },
  {
    tag: 'The hanger US Air force digital experiments',
    title: 'We talk about our weight'
  },
  {
    tag: 'Delta faucer content, social, digital',
    title: 'Piloting digital confidence'
  },
]

export default function Services() {
  return (
    <section className="px-8 md:px-16 py-20">

      {/* Heading */}
      <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-12">
        What we{' '}
        <span className="bg-green-200 px-1 rounded">can</span>
        <br />
        offer you!
      </h2>

      {/* Services list */}
      <div className="border-t border-gray-200">
        {services.map((service, i) => (
          <div
            key={i}
            className="flex items-center gap-6 py-7 border-b border-gray-200 group cursor-pointer hover:bg-gray-50 transition-colors duration-200 px-2"
          >
            {/* Tag - hidden on mobile */}
            <span className="hidden md:block w-48 text-xs text-gray-400 shrink-0 leading-relaxed">
              {service.tag}
            </span>

            {/* Title */}
            <span className="flex-1 font-serif text-xl md:text-2xl text-gray-800">
              {service.title}
            </span>

            {/* Arrow */}
            <span className="text-xl text-gray-800 group-hover:translate-x-2 transition-transform duration-200">
              →
            </span>
          </div>
        ))}
      </div>

    </section>
  )
}