import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google"
import { Oswald } from "next/font/google"
import { Kanit } from "next/font/google"
import { Anton } from "next/font/google"
import { Bebas_Neue } from "next/font/google";
import { Teko } from "next/font/google";
import 'aos/dist/aos.css';  // Importando o CSS do AOS


const roboto = Roboto({
  variable: "--font-roboto",
  weight: "400",
  subsets: ["latin"]
})

const kanit = Kanit({
  variable: "--font-kanit",
  weight: "500",
  subsets: ["latin"]
})

const oswald = Oswald({
  variable: "--font-oswald",
  weight: "700",
  subsets: ["latin"]
})
const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"]
})
const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"]
})
const teko = Teko({
  variable: "--font-teko",
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Portfólio",
  description: "POrtfólio José Gabriel",
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${oswald.variable} ${kanit.variable} ${anton.variable} ${bebas.variable} ${teko.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
