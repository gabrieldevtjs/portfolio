import Image from "next/image"

export default function Footer(){
    return (
        <>
        <div className="w-full flex-col  p-6 pb-36 gap-20">
            <div>
          <div className="flex flex-col gap-2 z-10 relative">
            <h1>SOCI<span className="text-fuchsia-700">AL</span></h1>
            <div className="flex gap-2">
              <a href="https://github.com/gabrieldevtjs" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/github.png" alt="GitHub" width={30} height={20} />
              </a>
              <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-8901a7344/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={30} height={20} />
              </a>
              <a href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/instagram.png" alt="Instagram" width={30} height={20} />
              </a>
            </div>
            <div className="flex flex-col gap-3 pt-7 pb-12 border-b border-gray-400">
            <h1>JOSÉ GAB<span className="text-fuchsia-700">RIEL</span></h1>
            <p className="text-xs">
            Um desenvolvedor web focado em frontend que constrói o frontend de sites e aplicativos da web que leva ao sucesso do produto geral
            </p>
          </div>
          </div>
          </div>
        </div>
      </>
    )
}