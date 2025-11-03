'use client';
import Image, { getImageProps } from "next/image";
import Link from "next/link";

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

  return (
    <div className="flex min-h-screen items-center bg-white justify-center font-sans">
      <main className="flex min-h-screen max-w-[375px] w-full flex-col items-center justify-between bg-white sm:items-start">
        <section className="text-center">
          <div className="w-full">
            <Image src={'/banner.svg'} alt="banner" width={500} height={500}/>
          </div>

          <div className="max-w-[375px] mt-12">
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

          <div style={style} className="max-w-[375px] mt-6 py-12 px-8">
            <h3 className="text-2xl mb-12 text-left pl-2 font-bold">MacLab Menu</h3>
            <div className="flex gap-4 justify-center">
              <div className="flex flex-col items-center w-[200px] rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src="/menus/14.svg"
                    alt="Garlic Bomba Lime"
                    className="w-[150px] absolute h-[150px] object-cover -translate-y-8"
                  />
                <div className="bg-[#F6B70D] w-full h-32 flex justify-center">
                </div>
                <div className="w-full bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                  <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                    Garlic Bomba Lime
                  </p>
                  <p className="text-[12px] leading-3 text-gray-800">Garlic Butter <br/> Sauce x Lime</p>
                  <Link href={"https://wa.me/6281252074898"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
                    15.000
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center w-[250px] rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src="/menus/15.svg"
                    alt="Garlic Bomba Lime"
                    className="w-[150px] absolute h-[150px] object-cover -translate-y-8"
                  />
                <div className="bg-[#F6B70D] w-full h-32 flex justify-center">
                </div>
                <div className="w-full bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                  <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                    la felicita carbonara
                  </p>
                  <p className="text-[12px] leading-3 text-gray-800">Carbonara Souce</p>
                  <Link href={"https://wa.me/6281252074898"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
                    20.000
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-center w-[200px] rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src="/menus/16.svg"
                    alt="Garlic Bomba Lime"
                    className="w-[150px] absolute h-[150px] object-cover -translate-y-8"
                  />
                <div className="bg-[#F6B70D] w-full h-32 flex justify-center">
                </div>
                <div className="w-full bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                  <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                    Spicy Boom
                  </p>
                  <p className="text-[12px] leading-3 text-gray-800">Spicy Savory<br/>Flavour</p>
                  <Link href={"https://wa.me/6281252074898"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
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
