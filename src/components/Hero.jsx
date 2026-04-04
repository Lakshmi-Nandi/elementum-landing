import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.svg'
import profile3 from '../assets/profile3.svg'
import profile4 from '../assets/profile4.png'
import profile5 from '../assets/profile5.svg'
import profile6 from '../assets/profile6.svg'
import profile7 from '../assets/profile7.svg'
import profile8 from '../assets/profile8.png'
import ellipse739 from '../assets/Ellipse 739.png'
import vector5 from '../assets/Vector 5.png'

export default function Hero() {
  const profiles = [
    { src: profile1, alt: 'profile 1', className: 'left-[-13%] top-[205px] w-[100px] md:w-[155px] border-4 border-white' },
    { src: profile2, alt: 'profile 2', className: 'left-[-3%] top-[148px] w-[102px] md:w-[155px] border-4 border-white' },
    { src: profile3, alt: 'profile 3', className: 'left-[18%] top-[60px] w-[115px] md:w-[155px] border-4 border-white' },
    { src: profile4, alt: 'profile 4', className: 'left-[30%] top-[205px] w-[105px] md:w-[155px] border-4 border-white' },
    { src: profile5, alt: 'profile 5', className: 'left-[50%] top-[98px] w-[112px] md:w-[155px] border-4 border-white' },
    { src: profile6, alt: 'profile 6', className: 'left-[58%] top-[160px] w-[105px] md:w-[155px] border-4 border-white' },
    { src: profile7, alt: 'profile 7', className: 'left-[78%] top-[95px] w-[118px] md:w-[155px] border-4 border-white' },
    { src: profile8, alt: 'profile 8', className: 'left-[100%] top-[195px] w-[102px] md:w-[155px] -translate-x-1/2 border-4 border-white' },
  ]

  return (
    <section className="relative overflow-hidden bg-white px-4 pt-10 pb-20 text-center md:px-10 md:pt-12">
      <svg
        className="absolute left-0 top-36 h-[220px] w-[42px] md:top-40 md:h-[250px] md:w-[55px]"
        viewBox="0 0 60 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 8C52 20 48 52 22 70C-8 92 3 122 28 140C54 160 48 192 18 212"
          stroke="#ff6b6b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M38 4C68 18 64 50 38 70C10 92 20 122 44 140C69 159 63 191 34 214"
          stroke="black"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      <img
        src={ellipse739}
        alt=""
        className="absolute right-[8%] top-[105px] z-10 w-[68px] rotate-[30deg] md:right-[9%] md:top-[110px] md:w-[86px]"
      />

      <h1 className="relative z-20 mx-auto max-w-[860px] text-[44px] font-Gerbil leading-[0.95] tracking-[-0.03em] text-black md:text-[60px]">
        The{" "}
        <span className="relative inline-block">
          <span className="relative z-10">thinkers</span>

          <img
            src={vector5}
            alt=""
            className="absolute left-1/2 top-[88%] w-[250px] -translate-x-1/2 md:w-[320px] z-0"
          />
        </span>{" "}
        and
        <br />
        doers were{" "}
        <span className="inline-block rounded-full bg-pink-200 px-3 py-1 md:px-4">
          changing
        </span>
        <br />
        the{" "}
        <span className="inline-block rounded-full bg-green-200 px-3 py-1 md:px-4">
          status
        </span>{" "}
        Quo with
      </h1>

      <p className="mx-auto mt-6 max-w-[520px] text-[10px] leading-[1.5] text-black/70 md:mt-8 md:text-[13px]">
        We are a team of strategists, designers, communicators, researchers.
        Together, we believe that progress only happens when you refuse to play
        things safe.
      </p>

      <div className="relative mx-auto mt-0 h-[260px] w-full max-w-[980px] md:h-[280px]">
        {profiles.map((profile, index) => (
          <img
            key={index}
            src={profile.src}
            alt={profile.alt}
            className={`absolute aspect-square rounded-full object-cover shadow-sm ${profile.className}`}
          />
        ))}
      </div>
    </section>
  );
}