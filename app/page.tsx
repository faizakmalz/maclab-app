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

const MENU_ITEMS = [
  {
    id: 14,
    name: "Garlic Bomba Lime",
    description: "Garlic Butter \n Sauce x Lime",
    price: "15.000",
    image: "/menus/15.svg",
    orderUrl:
      "https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit",
  },
  {
    id: 15,
    name: "la felicita carbonara",
    description: "Carbonara Sauce",
    price: "20.000",
    image: "/menus/16.svg",
    orderUrl:
      "https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit",
  },
  {
    id: 16,
    name: "Spicy Boom",
    description: "Spicy Savory \n Flavour",
    price: "15.000",
    image: "/menus/14.svg",
    orderUrl:
      "https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit",
  },
  {
    id: 17,
    name: "Bolognese Luv",
    description: "Bolognese Sauce",
    price: "18.000",
    image: "/menus/21.svg",
    orderUrl:
      "https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit",
  },
  {
    id: 18,
    name: "Tricky Cheese Bomb",
    description: "Cheese Sauce",
    price: "17.000",
    image: "/menus/22.svg",
    orderUrl:
      "https://docs.google.com/forms/d/1M_71hWWL_pbyA5OoA5CS7-QUHN54raCPTC9o4jytlu4/edit",
  },
  // add as many as you want here...
];

function chunkMenus(items: any, perPage: number) {
  const pages = [];
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage));
  }
  return pages;
}

function MenuCard({ item }: any) {
  return (
    <div className="w-[30%] flex justify-center">
      {/* This is the card wrapper, no shadow here */}
      <div className="relative w-full flex flex-col items-center">

        {/* Floating image */}
        <img
          src={item.image}
          alt={item.name}
          className="absolute left-1/2 -translate-x-1/2 -top-10 w-[120px] h-[150px] object-cover z-20"
        />

        {/* Yellow block */}
        <div className="bg-[#F6B70D] w-full h-28 rounded-t-xl" />

        {/* This container only holds the white content and gets the shadow */}
        <div className="w-full bg-white h-30 justify-between rounded-xl shadow-lg flex flex-col text-center px-2 pt-3 pb-3 -mt-6">
          <p className="text-[18px] text-black uppercase font-bebas-sans leading-4">
            {item.name}
          </p>

          <p className="text-[12px] leading-3 text-gray-800 whitespace-pre-line mt-1">
            {item.description}
          </p>

          <Link
            href={item.orderUrl}
            className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-lg inline-block mt-3 px-4 py-1 shadow"
          >
            {item.price}
          </Link>
        </div>
      </div>
    </div>
  );
}


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
  } = getImageProps({ alt: '', width: 500, height: 500, src: '/webdes4.png' })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = { height: 'full', backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }

  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuPage, setMenuPage] = useState(0);
  const [isMenuDragging, setIsMenuDragging] = useState(false);
  const [menuStartX, setMenuStartX] = useState(0);
  const [menuDragX, setMenuDragX] = useState(0);
  const [isHeroDragging, setIsHeroDragging] = useState(false);
  const [heroStartX, setHeroStartX] = useState(0);
  const [heroDragX, setHeroDragX] = useState(0);

  const MENU_DRAG_THRESHOLD = 60; // px

  const handleMenuDragStart = (clientX: number) => {
    setIsMenuDragging(true);
    setMenuStartX(clientX);
    setMenuDragX(0);
  };

  const handleMenuDragMove = (clientX: number) => {
    if (!isMenuDragging) return;
    setMenuDragX(clientX - menuStartX);
  };

  const handleMenuDragEnd = () => {
    if (!isMenuDragging) return;

    if (menuDragX > MENU_DRAG_THRESHOLD) {
      // dragged right -> previous page
      prevMenu();
    } else if (menuDragX < -MENU_DRAG_THRESHOLD) {
      // dragged left -> next page
      nextMenu();
    }

    setIsMenuDragging(false);
    setMenuDragX(0);
  };

  const HERO_DRAG_THRESHOLD = 60;

  const handleHeroDragStart = (clientX: number) => {
    setIsHeroDragging(true);
    setHeroStartX(clientX);
    setHeroDragX(0);
  };

  const handleHeroDragMove = (clientX: number) => {
    if (!isHeroDragging) return;
    setHeroDragX(clientX - heroStartX);
  };

  const handleHeroDragEnd = () => {
    if (!isHeroDragging) return;

    if (heroDragX > HERO_DRAG_THRESHOLD) {
      goPrev();
    } else if (heroDragX < -HERO_DRAG_THRESHOLD) {
      goNext();
    }

    setIsHeroDragging(false);
    setHeroDragX(0);
  };

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


  const itemsPerPage = 3;
  const menuPages = chunkMenus(MENU_ITEMS, itemsPerPage);
  const totalPages = menuPages.length;

  const nextMenu = () => {
    setMenuPage((prev) => (prev + 1) % totalPages);
  };

  const prevMenu = () => {
    setMenuPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="flex min-h-screen items-center bg-white justify-center font-sans">
      <main className="flex min-h-screen w-full md:w-[360px] flex-col items-center justify-between bg-white sm:items-start">
        <section className="text-center">
          <div className="relative w-full md:w-[360px] h-[480px]"
          onMouseDown={(e) => handleHeroDragStart(e.clientX)}
          onMouseMove={(e) => handleHeroDragMove(e.clientX)}
          onMouseUp={handleHeroDragEnd}
          onMouseLeave={handleHeroDragEnd}
          onTouchStart={(e) => handleHeroDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleHeroDragMove(e.touches[0].clientX)}
          onTouchEnd={handleHeroDragEnd}
          >
          {/* Track */}
          <div
            className="flex h-full w-full md:w-[360px] transition-transform duration-500 ease-out"
            style={{
              transform: isHeroDragging
                ? `translateX(calc(-${currentSlide * 100}% + ${heroDragX}px))`
                : `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {HERO_SLIDES.map((slide, i) => (
              <div
                key={i}
                className="relative h-full w-full md:w-[360px] flex-shrink-0"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority
                  className="object-cover"
                  // width={300}
                  // height={400}
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
              <Link href={'/about'} className="bg-[#A82731] hover:bg-red-900 text-white cursor-pointer shadow-md rounded-lg px-8 py-2">Learn More</Link>
            </div>
          </div>

          <div style={style} className="w-full flex flex-col items-center md:w-[360px] mt-6 py-8">
            <h3 className="text-2xl mb-6 text-left -translate-x-24 font-bold">MacLab Menu</h3>

            {/* MENU SLIDER – 3 items per slide */}
            <div
              className="relative w-full max-w-[360px] md:w-[360px] overflow-x-hidden"
              onMouseDown={(e) => handleMenuDragStart(e.clientX)}
              onMouseMove={(e) => handleMenuDragMove(e.clientX)}
              onMouseUp={handleMenuDragEnd}
              onMouseLeave={handleMenuDragEnd}
              onTouchStart={(e) => handleMenuDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleMenuDragMove(e.touches[0].clientX)}
              onTouchEnd={handleMenuDragEnd}
            >
              <div
                className={`flex ${isMenuDragging ? "" : "transition-transform duration-500 ease-out"}`}
                style={{
                  transform: isMenuDragging
                    ? `translateX(calc(-${menuPage * 100}% + ${menuDragX}px))`
                    : `translateX(-${menuPage * 100}%)`,
                }}
              >
                {menuPages.map((page, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="w-full py-6 flex-shrink-0 flex gap-4 justify-center"
                  >
                    {page.map((item: any) => (
                      <MenuCard key={item.id} item={item} />
                    ))}
                  </div>
                ))}
              </div>

              {/* Prev / Next buttons */}
              <button
                type="button"
                onClick={prevMenu}
                className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white px-4 py-2 text-sm cursor-pointer"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextMenu}
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white px-4 py-2 text-sm cursor-pointer"
              >
                ›
              </button>
            </div>

            <div className="w-full flex items-center justify-center mt-2">
              <Link
                href={"/menu"}
                className="bg-[#A82731] text-white shadow-md cursor-pointer hover:bg-red-900 rounded-lg px-8 py-2"
              >
                See All
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
