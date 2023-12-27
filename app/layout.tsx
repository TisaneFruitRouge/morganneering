import type { Metadata } from 'next';
import { Averia_Serif_Libre, Ribeye } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import { SpeedInsights } from "@vercel/speed-insights/next"

const averia = Averia_Serif_Libre({ weight: "400", preload: false});
const ribeye = Ribeye({ weight: "400", preload: false});

const PRODUCTION_WEBSITE_URL = "https://www.morganneering.com"

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_WEBSITE_URL),
  title: 'Morgan Neering',
  description: 'Welcome to Morgan\'s official website!',
  authors: {
    name: "Morgan Neering",
    url: PRODUCTION_WEBSITE_URL
  },
  creator: "Chilling Con Carne - chillingconcarne.co",
  keywords: ["poetry", "self-discovery", "nostalgia"],
  openGraph: {
    type: "website",
    title: "Morgan NEERING",
    description: "Welcome to Morgan's official website!",
    emails: "morganneering@gmail.com",
    locale: "en-US",
    images: "/morgan.png",
    url: PRODUCTION_WEBSITE_URL,
    countryName: "United States of America"
  },
  twitter: {
    site: PRODUCTION_WEBSITE_URL,
    title: "Morgan Neering",
    description: "Welcome to Morgan's official website!",
    images: "/morgan.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={averia.className + ' text-primary'}>
        <main className="w-screen min-h-screen bg-background p-8 sm:p-16 md:p-24 lg:p-32">
          <section className="h-full">
            <a href="/"><h1 className={"max-w-[75vw] text-4xl md:text-5xl lg:text-7xl mb-24 " + ribeye.className}>Morgan Neering</h1></a>
            {children}
          </section>
          <Navbar />
        </main>
        <SpeedInsights />
      </body>
    </html>
  )
}
