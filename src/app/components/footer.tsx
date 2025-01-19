import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 px-6 text-white pt-12">
      <div className="flex flex-col gap-12 border-b-2 pb-6 border-gray-600">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">SOCIAL</h1>
          <div className="flex gap-2">
            <a href="https://api.whatsapp.com/send?phone=5592994916643&text=Ol%C3%A1,%20vim%20pelo%20portf%C3%B3lio!" target="_blank">
              <Image
                src="/iconswhite/zapbranco.svg"
                alt="GitHub"
                width={22}
                height={20}
              />
            </a>
            <a href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr" target="_blank">
              <Image
                src="/iconswhite/instabanco.svg"
                alt="GitHub"
                width={22}
                height={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-gabriel-8901a7344/"
              target="_blank"
            >
              <Image
                src="/iconswhite/linkbranco.svg"
                alt="LinkedIn"
                width={22}
                height={20}
              />
            </a>

            <a
              href="https://github.com/gabrieldevtjs"
              target="_blank"
            >
              <Image
                src="/iconswhite/gitbranco.svg"
                alt="Instagram"
                width={22}
                height={20}
              />
            </a>
          </div>
        </div>
  
      <div className="flex flex-col gap-6">
        <h1 className="font-bold">JOSÉ GABRIEL</h1>

        <p className="text-xs text-gray-400">Desenvolvedor Full Stack apaixonado por criar soluções completas para web, integrando front-end e back-end para construir aplicações robustas e funcionais.</p>
      </div>

      </div>
      <div className="w-full text-center py-10">
         <p className="text-xs">
            &copy; 2025 Gabriel. Todos os direitos reservados.
          </p>
          </div>
    </footer>
  );
}


