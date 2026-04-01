export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-12 px-8 md:px-16 py-20">
      
      {/* Left - Text */}
      <div className="flex-1">
        <h2 className="font-serif text-3xl md:text-5xl leading-snug mb-6">
          <span className="italic text-green-700">Tomorrow</span> should
          <br />
          be better than today
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          We are a team of strategists, designers communications, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </p>
        <a href="#" className="text-sm font-medium text-gray-800 hover:underline">
          Read more →
        </a>
      </div>

      {/* Right - Image */}
      <div className="flex-1 flex justify-center relative">
        {/* Red triangle top right */}
        <div className="absolute -top-4 right-8 w-0 h-0 
          border-l-[30px] border-r-[30px] border-b-[52px] 
          border-l-transparent border-r-transparent border-b-red-500" 
        />

        {/* Pink glow blob behind image */}
        <div className="absolute w-64 h-64 bg-pink-100 rounded-full blur-2xl opacity-60" />

        {/* Circular image */}
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop"
          alt="team meeting"
          className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover shadow-lg z-10"
        />
      </div>

    </section>
  )
}