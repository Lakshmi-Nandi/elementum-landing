export default function Newsletter() {
  return (
    <section className="relative bg-green-100 px-8 md:px-16 py-24 text-center overflow-hidden">

      {/* Purple blob bottom right */}
      <div className="absolute bottom-6 right-10 w-14 h-24 bg-purple-300 rounded-full opacity-70" />

      {/* Purple blob bottom left (smaller) */}
      <div className="absolute top-8 left-12 w-8 h-14 bg-purple-200 rounded-full opacity-50" />

      {/* Heading */}
      <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
        Subscribe to
        <br />
        our newsletter
      </h2>

      {/* Subtext */}
      <p className="text-gray-500 text-sm mb-10">
        To make your stay special and even more memorable
      </p>

      {/* Button */}
      <button className="bg-gray-900 text-white text-sm px-10 py-3.5 rounded-full hover:bg-gray-700 hover:-translate-y-0.5 transition-all duration-200">
        Subscribe Now
      </button>

    </section>
  )
}