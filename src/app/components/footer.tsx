import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row justify-between items-center bg-gray-950 px-12 py-8 text-gray-300">
      {/* Seção de Direitos Autorais */}
      <div className="mb-6 lg:mb-0">
        <p className="text-sm text-gray-500">
          &copy; 2025 Gabriel. Todos os direitos reservados.
        </p>
      </div>

      {/* Seção de Redes Sociais */}
      <div>
        <div className="flex gap-4 items-center justify-center">
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
      </div>
    </footer>
  );
}


{/* <div className="">
<p className="text-sm text-gray-500">
  &copy; 2025 Gabriel. Todos os direitos reservados.
</p>
</div> */}