'use client';
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  {
    src: "/banner.svg", // e.g. "New Arrival / Garlic Bomba Lime"
    alt: "New Arrival Garlic Bomba Lime poster",
  },
  {
    src: "banner2.svg", // e.g. "Your Mac. Your Mood. Your Taste."
    alt: "Your Mac. Your Mood. Your Taste poster",
  },
];

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 400, height: 400, src: '/webdes4.png' })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = { height: 'full', backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }

   const [currentSlide, setCurrentSlide] = useState(0);

  // auto-rotate hero
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goPrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div className="flex min-h-screen items-center bg-white justify-center font-sans">
      <main className="flex min-h-screen w-full md:w-[360px] flex-col items-center justify-between bg-white sm:items-start">
        <section className="text-center">
          <div className="relative w-full h-[420px] overflow-hidden">
          {/* Track */}
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={i}
                className="relative h-full w-full flex-shrink-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white px-4 py-2 text-sm cursor-pointer"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white px-4 py-2 text-sm cursor-pointer"
          >
            ›
          </button>

        </div>

          <div className="w-full md:w-[360px] mt-12">
            <div className="flex px-10">
              <div className=" flex-1 gap-3 flex flex-col items-start justify-center">
                <h3 className="text-2xl text-left font-bold">Meet MacLab</h3>
                <p className="mx-auto text-left text-[13px]">
                  Setiap orang punya mood, dan setiap mood punya rasa. Kami hadir untuk menemani harimu dengan cita rasa yang pas di lidah dan mood kamu.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <Image src={'/logo.svg'} width={150} height={150} alt="logo"/>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-6">
              <Link href={'https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit'} className="bg-[#A82731] hover:bg-red-900 text-white cursor-pointer shadow-md rounded-lg px-8 py-2">Order Now</Link>
            </div>
          </div>

          <div style={style} className="w-full md:w-[360px] mt-6 py-12 px-4">
            <h3 className="text-2xl mb-12 text-left pl-2 font-bold">MacLab Menu</h3>
            <div className="flex gap-4 justify-center">
              <div className="flex flex-col items-center w-[30%] rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src="/menus/14.svg"
                    alt="Garlic Bomba Lime"
                    className="w-[120px] absolute h-[150px] object-cover -translate-y-10"
                  />
                <div className="bg-[#F6B70D] w-full h-28 flex justify-center">
                </div>
                <div className="w-full h-30 flex flex-col justify-between bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                  <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                    Garlic Bomba Lime
                  </p>
                  <p className="text-[12px] leading-3 text-gray-800">Garlic Butter <br/> Sauce x Lime</p>
                  <Link href={"https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
                    15.000
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center w-[30%] rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src="/menus/15.svg"
                    alt="Garlic Bomba Lime"
                    className="w-[120px] absolute h-[150px] object-cover -translate-y-10"
                  />
                <div className="bg-[#F6B70D] w-full h-28 flex justify-center">
                </div>
                <div className="w-full h-30 flex flex-col justify-between bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                  <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                    la felicita carbonara
                  </p>
                  <p className="text-[12px] leading-3 text-gray-800">Carbonara Souce</p>
                  <Link href={"https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
                    20.000
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center w-[30%] rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src="/menus/16.svg"
                    alt="Garlic Bomba Lime"
                    className="w-[120px] absolute h-[150px] object-cover -translate-y-10"
                  />
                <div className="bg-[#F6B70D] w-full h-28 flex justify-center">
                </div>
                <div className="w-full h-30 flex flex-col justify-between bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                  <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                    Spicy Boom
                  </p>
                  <p className="text-[12px] leading-3 text-gray-800">Spicy Savory<br/>Flavour</p>
                  <Link href={"https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
                    15.000
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center mt-6">
              <Link href={'/menu'} className="bg-[#A82731] text-white shadow-md cursor-pointer hover:bg-red-900 rounded-lg px-8 py-2">See All</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
