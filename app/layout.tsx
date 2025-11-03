import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Header from "@/components/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfitSans = Outfit({
    variable: "--font-outfit-sans",
})

const bebasNeueSans = Bebas_Neue({
    variable: "--font-bebas-neue-sans",
    weight: "400"
})

export const metadata: Metadata = {
  title: 'MacLab',
  description: 'Every Mood, Your Taste.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfitSans.variable} ${bebasNeueSans.variable} antialiased overflow-x-hidden w-[100vw] flex flex-col justify-center items-center`}
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          <main className="min-h-screen w-[360px]">{children}</main>
          <footer className="text-center py-4 text-sm bg-[#A82731] w-[375px]">
            <div className="flex gap-6 px-8 items-center justify-around">
              <div>
                <Image src={'/logo.svg'} width={60} height={60} alt="logo"/>
              </div>
              <div className="flex gap-6 items-end text-white">
                <div>
                  <div className="flex gap-2">
                    <Image src={'/icons/wa.svg'} width={15} height={15} alt="wa"/>
                    <a href="https://wa.me/6281252074898">+62 812 5207 4898</a>
                  </div>
                  <div className="flex gap-2">
                    <Image src={'/icons/ig.svg'} width={15} height={15} alt="ig"/>
                    <a href="https://www.instagram.com/maclabss_/">@maclabss_</a>
                  </div>
                  <div className="flex gap-2">
                    <Image src={'/icons/tt.svg'} width={15} height={15} alt="tt"/>
                    <a href="https://www.tiktok.com/@maclab.id">@maclab.id</a>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <a href="">Privacy Policy</a>
                  <a href="">Menu</a>
                  <a href="">About Us</a>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
