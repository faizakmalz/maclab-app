"use client";

import Image, { getImageProps } from "next/image";

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

export default function About() {
    const { props: { srcSet } } = getImageProps({ alt: '', width: 500, height: 500, src: '/webdes4.png' })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = { height: 'full', backgroundImage, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
    
  return (
    <section className="w-full md:w-[360px] mx-auto text-center">
      <Image src={'/about1.svg'} width={500} height={300} alt=""/>
      <div className=" mt-8 flex flex-col gap-8">
        <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="px-[12%] mb-6">
                Terinspirasi dari tren camilan modern dan selera anak muda yang suka makanan gurih, creamy, dan praktis, MacLab lahir sebagai inovasi snack berbahan dasar makaroni kenyal berkualitas. Kami percaya bahwa makanan bukan cuma soal rasa tapi juga soal mood dan pengalaman.
            </p>
        </div>

        <div className="absolute translate-y-70">
          <Image src={"/about2.svg"} width={200} height={150} alt="about2"/>  
        </div>

        <div className="pl-40 text-right">
            <h3 className="text-3xl font-bold mb-4 pr-10">Why MacLab</h3>
            <p className="px-8">
                Kami ingin menghadirkan camilan yang bisa disesuaikan dengan suasana hati kamu. Mau cheesy, pedas, atau gurih? MacLab punya semuanya. Dengan saus khas dan topping kekinian, setiap gigitan adalah mood booster. 
            </p>
        </div>

        <div className="text-left my-16 w-full md:w-[360px] -translate-y-5 flex justify-between">
            <div className="pl-6 relative z-10">
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="w-36 mb-6">
                    Menjadi brand camilan lokal yang dikenal karena rasa premium, harga terjangkau, dan konsep yang relevan dengan gaya hidup anak muda Indonesia.
                </p>
            </div>
            <Image className="absolute translate-x-10 -translate-y-10" src={"/about3.svg"} width={350} height={150} alt="about3"/>  

        </div>
      </div>

      <div style={style} className="py-12 px-6 w-full md:w-[360px]">
        <h3 className="text-2xl mb-4 text-center font-bold">Where To Find Us</h3>
        <div className="flex flex-col gap-8 px-10 justify-center">
            <div>
              <p>MacLab hadir di booth festival kuliner, mall, dan layanan pesan-antar online seperti GoFood. Kami juga aktif di Instagram dan TikTok untuk berbagi konten seru dan promo menarik.</p>
            </div>
            <div className="flex gap-12 justify-center">
              <div>
              <Image width={80} height={80} src={'/icons/about-gojek.svg'} alt=""/>
              </div>
              <div>
                <Image width={80} height={80} src={'/icons/about-ig.svg'} alt=""/>
              </div>
              <div>
                <Image width={80} height={80} src={'/icons/about-tiktok.svg'} alt=""/>
              </div>
            </div>
        </div>
    </div>
    
    </section>
  )
}
