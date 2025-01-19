"use client";
import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import SkillCard from "./components/skill.card";
import AOS from "aos";
import { useEffect} from "react";
import Footer from "./components/footer";
import CardProject from "./components/cardProject";
import StackCard from "./components/stack.card";


export default function Home() {

  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className="w-full min-h-screen">
      <Header />
      <section className="w-full pt-10 2xl:px-8 font-Kanit">
        <div className="w-full 2xl:flex 2xl:pb-20 rounded-3xl">
        <div id="homee" className="w-full flex flex-col justify-around items-center pt-40 pb-32 gap-10 sm:pt-52 2xl:w-1/2" data-aos='fade-down'>
          <div className="text-center gap-5 flex flex-col ">
            <div className="">
              <h1 className="text-5xl sm:text-6xl">FULL <span className="text-indigo-700">STA</span>CK</h1>
              <h2 className="text-4xl sm:text-5xl"><span className="text-indigo-700">D</span>EVELOPE<span className="text-indigo-700">R</span></h2>
            </div>

            <div className="flex gap-2 items-center justify-center">
            <a href="https://github.com/gabrieldevtjs" target="_blank">
              <Image src="/icons/github.png" alt="GitHub" width={30} height={20} />
            </a>

            <a href="https://www.linkedin.com/in/jos%C3%A9-gabriel-8901a7344/" target="_blank">
              <Image src="/icons/linkedin.png" alt="LinkedIn" width={30} height={20} />
            </a>

            <a href="https://www.instagram.com/gabrieltj.dev?igsh=NndhZHJjMDF0MHNr&utm_source=qr" target="_blank">
              <Image src="/icons/instagram.png" alt="Instagram" width={30} height={20} />
            </a>
            
          </div>
          </div>

          <p className="text-center px-1  text-1xl text-stone-800 sm:px-2 lg:px-16">
            Olá, me chamo Gabriel, sou desenvolvedor Full Stack e apresento meu portfólio com alguns projetos que criei, mostrando as soluções que desenvolvi e as tecnologias que utilizei. Cada projeto é uma oportunidade de aprender e crescer, e aqui você pode ver um pouco do que andei criando.
          </p>

        <div className="flex flex-col justify-center items-center gap-6">
          <Image
                      src="/icons/seta-para-baixo.png"
                      alt="Descrição da imagem"
                      width={30}
                      height={40} 
                      className="animate-bounce"
              />

          <button className="border-2 text-white bg-indigo-700 px-8 py-2 rounded-lg">
            <a href="/curriculo/cv.pdf" download className="text-white animate-pulse ">
              DOWNLOAD CV
            </a>
          </button>

          
          </div>
        </div>

        <div className="hidden 2xl:flex 2xl:w-1/2 rounded-2xl items-center justify-center flex-col" data-aos='fade-left'>
        <div className="p-20 bg-indigo-700 rounded-3xl">
        <Image
            src="/icons/mesa.svg"
            alt="Descrição da imagem"
            width={350}
            height={40} 
        />
        
        </div>
        </div>
        </div>
 
        <div className="flex flex-col px-4 lg:flex-row w-full 2xl:px-16 2xl:pt-32 2xl:pb-40 bg-cover bg-center" data-aos='fade-down'>
        {/*sobre mim */}
        <div id="sobre" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2 px-3 ">
          <span className="text-4xl">SO<span className="text-indigo-700">BRE</span> MIM</span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="text-justify  text-stone-900 px-1 text-1xl sm:px-2 lg:px-16 lg:text-1xl ">
          Olá, me chamo Gabriel, sou estudante de Engenharia de Software, cursando o 3º período no Instituto de Tecnologia FUCAPI. Sou apaixonado por tecnologia e estou focado no desenvolvimento web e back-end, com ênfase em Node.js e TypeScript. Meu objetivo é me especializar no desenvolvimento de aplicativos mobile, criando soluções que impactem positivamente o dia a dia das pessoas. Estou sempre em busca de novos aprendizados, me esforçando para crescer profissionalmente e me tornar um desenvolvedor altamente qualificado.
        </p>
        </div>

      
        {/*Skills */}
        <div id="skills" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2 " data-aos='fade-down'>
          <span className="text-4xl">SKIL<span className="text-indigo-700">LS</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <SkillCard />
        </div>
        </div>

        {/*Projetos */} 
        <div id="projetos" className="pt-16 pb-60 w-ful flex flex-col justify-center items-center gap-2 px-3 2xl:px-32" data-aos='fade-down'>
          <span className="text-4xl">PROJET<span className="text-indigo-700">OS</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="text-center w-auto px-1  text-1xl pb-8 sm:px-32 lg:text-1xl lg:px-60 xl:px-96">
          Aqui você encontrará alguns dos projetos pessoais que criei, cada projeto contendo seu próprio estudo de caso.
        </p>

        <Image
                      src="/icons/seta-para-baixo.png"
                      alt="Descrição da imagem"
                      width={30}
                      height={40} 
                      className="animate-bounce"
              />


      
        <div className="flex flex-col pt-12 gap-y-32 xl:px-16 ">

  {/* Primeiro Card Inferior */}
  <div className="flex flex-col items-center justify-center w-full p-2 lg:flex-row lg:gap-7 xl:gap-14 md:px-24 rounded-3xl" data-aos='fade-down'>
  <div className="lg:w-1/2">
    <div className="relative">
      <Image 
        src={`/icons/dev-house.jpg`} 
        alt="DEV HOUSE" 
        width={540} 
        height={320} 
        className="w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] xl:max-w-[480px] object-cover"
      />
    </div>
  </div>
  <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center" data-aos='fade-down'>
    <div className="flex flex-col items-center gap-2 px-2">
      <span className="text-2xl xl:text-3xl">VITTA<span className="text-blue-500">LAR</span></span>
      <p className="text-justify xl:text-sm text-stone-700">
      Tela de exibição para compra e aluguel de apartamentos, criada com React e Tailwind CSS. A página exibe informações básicas dos imóveis, como preço, descrição e imagens, sem funcionalidades interativas. O layout é responsivo e simples, focado apenas na exibição dos dados.
      </p>
      <StackCard stacks={['Nextjs', 'React', 'Tailwind']} />
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <a href="https://vittalar.vercel.app/" target="_blank">DEMO</a>
      </button>
    </div>
  </div>
</div>

{/* Segundo Card Inferior */}
<div className="flex flex-col items-center justify-center w-full p-2 lg:flex-row lg:gap-7 xl:gap-14 md:px-24 rounded-3xl" data-aos='fade-down'>
  <div className="lg:w-1/2">
    <div className="relative">
      <Image 
        src={`/icons/login.jpg`} 
        alt="DEV HOUSE" 
        width={540} 
        height={320} 
        className="w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] xl:max-w-[480px] object-cover"
      />
    </div>
  </div>
  <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center" data-aos='fade-down'>
    <div className="flex flex-col items-center gap-2 px-2">
      <span className="text-2xl xl:text-3xl">TELA DE LO<span className="text-blue-500">GIN</span></span>
      <p className="text-justify xl:text-sm text-stone-700">
      Tela de login feita com React e Tailwind CSS, sem funcionalidades, apenas para exibição. Contém campos de usuário e senha, além de um botão de login, com foco na responsividade e layout simples.
      </p>
      <StackCard stacks={['Nextjs', 'React', 'Tailwind']} />
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <a href="https://tela-login-six-alpha.vercel.app/" target="_blank">DEMO</a>
      </button>
    </div>
  </div>
</div>


{/* Terceiro Card Inferior */}
<div className="flex flex-col items-center justify-center w-full p-2 lg:flex-row lg:gap-7 xl:gap-14 md:px-24 rounded-3xl" data-aos='fade-down'>
  <div className="lg:w-1/2">
    <div className="relative">
      <Image 
        src={`/icons/apiazul.jpg`} 
        alt="DEV HOUSE" 
        width={540} 
        height={320} 
        className="w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] xl:max-w-[480px] object-cover"
      />
    </div>
  </div>
  <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center" data-aos='fade-down'>
    <div className="flex flex-col items-center gap-2 px-2">
      <span className="text-2xl xl:text-3xl">E-COMMERCE <span className="text-blue-500">API</span></span>
      <p className="text-justify xl:text-sm text-stone-700">
      Atualmente estou me desafiando a criar uma API de E-Commerce do zero usando Express, Node.js e TypeScript. Esse projeto é uma chance de aprender mais sobre conceitos avançados, aplicar boas práticas e melhorar minhas habilidades em arquitetura, segurança e desempenho. O objetivo é construir uma solução robusta, escalável e eficiente, consolidando meu aprendizado e me tornando um desenvolvedor mais completo.
      </p>
      <span className="text-sm text-stone-900 ">(Em Desenvolvimento)</span>
      <StackCard stacks={['Nodejs', 'Express', 'Typescript', 'Firebase']} />
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <a href="https://github.com/gabrieldevtjs/eccommerce-api" target="_blank">VIEW GITHUB</a>
      </button>
    </div>
  </div>
</div>


{/* Quarto Card Inferior */}
<div className="flex flex-col items-center justify-center w-full p-2 lg:flex-row lg:gap-7 xl:gap-14 md:px-24 rounded-3xl" data-aos='fade-down'>
  <div className="lg:w-1/2">
    <div className="relative">
      <Image 
        src={`/icons/apiazul.jpg`} 
        alt="DEV HOUSE" 
        width={540} 
        height={320} 
        className="w-full h-auto max-w-[500px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[450px] xl:max-w-[480px] object-cover"
      />
    </div>
  </div>
  <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center" data-aos='fade-down'>
    <div className="flex flex-col items-center gap-2 px-2">
      <span className="text-2xl xl:text-3xl">TASK LIST <span className="text-blue-500">API</span></span>
      <p className="text-justify xl:text-sm text-stone-700">
     
Estou desenvolvendo uma API de lista de tarefas com NestJS, PostgreSQL e TypeScript, pensando em consumir futuramente com o front-end. O NestJS mantém o código organizado, o PostgreSQL gerencia o banco de dados e o TypeScript traz mais segurança ao projeto. A ideia é criar uma solução escalável e pronta para crescer, com o objetivo de integrar com o front-end no futuro.
      </p>
      <span className="text-sm text-stone-900 ">(Em Desenvolvimento)</span>
      <StackCard stacks={['Nestjs', 'Typescript', 'PostgreSQL', 'PrismaORM', 'E2E']} />
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        <a href="https://github.com/gabrieldevtjs/task-list" target="_blank">VIEW GITHUB</a>
      </button>
    </div>
  </div>
</div>

</div>
</div>

      </section>
    <Footer/>

    </div>
  );
}