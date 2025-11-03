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

export default function Menu() {
    const { props: { srcSet } } = getImageProps({ alt: '', width: 500, height: 500, src: '/webdes4.png' })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = { height: 'full', backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
    
  return (
    <section className="flex flex-col gap-4 max-[360px] mx-auto text-center">
      <Image src={'/about1.svg'} width={550} height={300} alt=""/>
      <div className="px-18">
        <h2 className="text-3xl font-bold mb-6">Welcome To Our Menu</h2>
        <p>setiap rasa dirancang buat nyambung sama mood kamu, dari creamy yang comforting sampai pedas yang bikin semangat. Pilih menu favoritmu dan rasakan pengalaman ngemil yang beda dari yang lain</p>
        <div className="w-full flex items-center justify-center mt-6">
              <Link href={"/menu"} className="cursor-pointer bg-[#A82731] hover:bg-red-900 text-white shadow-md rounded-lg px-8 py-2">Learn More</Link>
        </div>
      </div>

      <div className="mt-12 px-[7%]">
            <h3 className="text-2xl text-left font-bold mb-10">MacLab Series</h3>
            <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                { name: "Garlic Bomba Lime", link: "https://wa.me/6281252074898", price: "15.000", img: "/menus/14.svg" },
                { name: "Spicy Boom", price: "15.000", link: "https://wa.me/6281252074898", img: "/menus/15.svg" },
                { name: "Tobiko Cheese Bomb", price: "17.000", link: "https://wa.me/6281252074898", img: "/menus/16.svg" }
                ].map((item, i) => (
                <div key={i} className="flex flex-col items-center rounded-xl shadow-lg overflow-hidden bg-white">
                    <img
                        src={item.img}
                        alt="Garlic Bomba Lime"
                        className="w-[150px] absolute h-[150px] object-cover -translate-y-8"
                    />
                    <div className="bg-[#F6B70D] w-full h-32 flex justify-center">
                    </div>
                    <div className="w-full bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                        <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                            {item.name}
                        </p>
                        <p className="text-[12px] leading-3 text-gray-800">Garlic Butter <br/> Sauce x Lime</p>
                        <Link href={"https://wa.me/6281252074898"} className="bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">
                            {item.price}
                        </Link>
                    </div>
                </div>
                ))}
            </div>
      </div>

      <div style={style} className="mb-6 py-6 shadow-lg">
        <h3 className="text-3xl mb-20 text-left pl-8 font-bold">MacLab Bundle</h3>
        <div className="grid grid-cols-3 gap-6 mb-4 px-[10%]">
            {[
            { name: "Mac Lab basic", price: "22.000", description: "1 Porsi MacLab (All Variants) + 1 Topping Pilihan + Es Teh.", img: "/menus/17.svg" },
            { name: "Mac Lab couple", price: "30.000", description: "2 Porsi MacLab (All Variants) + 1 Topping Pilihan + Es Teh", img: "/menus/18.svg" },
            { name: "Mac Lab fusion", price: "24.000", description: "1 Porsi MacLab (All Variants) + 2 Topping Pilihan + Es Teh", img: "/menus/19.svg" }
            ].map((item, i) => (
            <div key={i} className="flex flex-col items-center rounded-xl shadow-lg overflow-hidden bg-white">
                <img
                    src={item.img}
                    alt="Garlic Bomba Lime"
                    className="w-[200px] absolute h-[300px] object-cover -translate-y-14"
                />
                <div className="bg-[#F6B70D] w-full h-32 flex justify-center">
                </div>
                <div className="w-full z-10 bg-white text-center py-2 px-2 rounded-t-2xl -mt-6">
                    <p className="text-[18px] text-black uppercase font-bebas-sans leading-4 mt-2">
                        {item.name}
                    </p>
                    <p className="text-[12px] leading-3 text-gray-800">{item.description}</p>
                    <Link href={"https://wa.me/6281252074898"} className="cursor-pointer bg-[#A82731] hover:bg-red-900 text-white font-semibold text-[13px] rounded-md inline-block mt-3 px-4 py-1 shadow">{item.price}</Link>
                </div>
            </div>
            ))}
        </div>
    </div>
    
    <div className="bg-[#FFD972] flex flex-col gap-4 px-7 py-6 w-full shadow-md">
        <h2 className="font-bold text-3xl text-left">Add On</h2>
        <div className="flex gap-5">
            <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-bold text-left">Topping</h3>
                <ul className="text-[12px]">
                    {
                        [
                        { topping: "  Smoked Beef", price: "3k", },
                        { topping: "  Sausage", price: "2k", },
                        { topping: "  Extra Cheese", price: "3k", },
                        { topping: "  Remahan Nori", price: "2k", }
                        ].map((item, i) => (
                            <div key={i} className="flex w-32 justify-between leading-1">
                                <li>󠁯•󠁏󠁏   {item.topping}</li>
                                <Link href={'https://wa.me/6281252074898'} className="bg-red-700 hover:bg-red-900 rounded-md text-white p-2 -translate-y-2 ">{item.price}</Link>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-bold text-left">Sauce</h3>
                <ul className="text-[12px]">
                    {
                        [
                        { topping: "Bolognese Sauce", price: "3k", },
                        { topping: "Cheese Sauce", price: "2k", },
                        { topping: "Carbonara Sauce", price: "3k", },
                        { topping: "Garlic Butter Sauce", price: "2k", },
                        { topping: "Spicy + Savory Powder", price: "2k", }
                        ].map((item, i) => (
                            <div key={i} className="flex w-42 text-left justify-between leading-1">
                                <li>󠁯•󠁏󠁏 {item.topping}</li>
                                <Link href={"https://wa.me/6281252074898"} className="bg-red-700 hover:bg-red-900 rounded-md text-white p-2">{item.price}</Link>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
    
    </section>
  )
}

