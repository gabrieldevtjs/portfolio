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
    <div className="w-full min-h-screen font-Kanit">
      <Header />
      <section className="w-full pt-16 ">
        <div className="w-full 2xl:flex  2xl:pb-20 border-2 ">
        <div id="homee" className="w-full flex flex-col justify-around items-center pt-40 pb-32 gap-10 sm:pt-52 2xl:w-1/2 border-r-2" data-aos='fade-down'>
          <div className="text-center gap-5 flex flex-col">
         {/*    <span className="rounded-lg bg-transparent text-stone-900 text-5xl px-6 py-1 hover:bg-indigo-700 hover:text-white hover:border-indigo-700">
              JOSÉ <span className=" p-1 rounded-3xl">GA<span className="text-fuchsia-500">BR</span>IEL</span>
            </span> */}
            <div className="">
              <h1 className="text-4xl sm:text-6xl text-indigo-700 font-ka">FULL STACK</h1>
              <h2 className="text-3xl sm:text-5xl">DEVELOPER</h2>
            </div>

            <div className="w-full px-1 flex items-center justify-center">
              <span className="border-2 border-indigo-700 px-2 py-5 rounded-2xl">
                      <Image
                      src="/icons/circulo-preto.png"
                      alt="Descrição da imagem"
                      width={10}
                      height={10} 
                      className="animate-bounce"
                      />
              </span>
            </div>
          </div>

          <p className="text-center px-1 font-Kanit text-1xl text-stone-700 sm:px-2 lg:px-16 lg:text-1xl">
            Olá, me chamo <span className="text-indigo-900">Gabriel</span>, sou desenvolvedor <span className="text-indigo-900">Full Stack</span>. Trabalho com soluções <span className="text-indigo-900">web</span> que realmente
            funcionam e melhoram a experiência dos usuários. Estou sempre aprendendo novas <span className="text-indigo-900">tecnologias</span> para
            entregar projetos legais e eficientes.
          </p>

        <div className="flex flex-col justify-center items-center gap-6">
          <Image
                      src="/icons/seta-para-baixo.png"
                      alt="Descrição da imagem"
                      width={30}
                      height={40} 
                      className="animate-bounce"
              />

          <button className="border-2 text-white bg-indigo-700 px-8 py-2 rounded-lg font-oswald">
            <a href="/curriculo/cv.pdf" download className="text-white animate-pulse font-Kanit">
              DOWNLOAD CV
            </a>
          </button>

          <div className="flex gap-2 e">
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
        </div>

        <div className="hidden 2xl:flex 2xl:w-1/2 rounded-2xl items-center justify-center flex-col" data-aos='fade-left'>
        <Image
            src="/icons/mesa.svg"
            alt="Descrição da imagem"
            width={350}
            height={40} 
        />
        <span className="text-gray-500 text-sm py-5">"Programar é 100%, 90% de erro e 10% de sorte no meio!"</span>
        </div>
        </div>
 
        <div className="flex flex-col lg:flex-row w-full 2xl:px-16 2xl:pt-32 2xl:pb-40" data-aos='fade-down'>
        {/*sobre mim */}
        <div id="sobre" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2 px-3  rounded-2xl">
          <span className="text-4xl">SO<span className="text-indigo-700">BRE</span> MIM</span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="text-center px-1 font-Kanit text-1xl sm:px-2 lg:px-16 lg:text-1xl lg:text-justify">
          Olá, me chamo Gabriel, sou estudante de Engenharia de Software, cursando o 3º período no Instituto de Tecnologia FUCAPI. Sou apaixonado por tecnologia e estou focado no desenvolvimento web e back-end, com ênfase em Node.js e TypeScript. Meu objetivo é me especializar no desenvolvimento de aplicativos Android, criando soluções que impactem positivamente o dia a dia das pessoas. Estou sempre em busca de novos aprendizados, me esforçando para crescer profissionalmente e me tornar um desenvolvedor altamente qualificado.
        </p>
        </div>

      
        {/*Skills */}
        <div id="skills" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2" data-aos='fade-down'>
          <span className="text-4xl font-oswald">SKIL<span className="text-indigo-700">LS</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <SkillCard />
        </div>
        </div>

        {/*Projetos */}
        <div id="projetos" className="pt-16 pb-16 w-ful flex justify-center items-center flex-col gap-2 px-3 2xl:px-32" data-aos='fade-down'>
          <span className="text-4xl">PROJET<span className="text-indigo-700">OS</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="text-center px-1 font-Kanit text-1xl sm:px-2 lg:px-48 lg:text-1xl lg:pb-20 border-2 xl:px-52">
          Aqui você encontrará alguns dos projetos pessoais que criei, cada projeto contendo seu próprio estudo de caso.
        </p>

      
        <div className="flex flex-col gap-y-32 lg:px-24 xl:px-40">
  {/* Primeiro Card Inferior */}
  <div className="flex flex-col items-center w-full p-4 lg:flex-row gap-8 md:px-24 lg:px-0" data-aos='fade-down'>
    <div className="lg:w-1/2">
      <Image 
        src={`/icons/computador.png`} 
        alt="DEV HOUSE" 
        width={200} 
        height={200} 
        className="md:h-[140px] md:w-[140px] lg:w-[190px] lg:h-[190px] xl:h-[500px] lg:ml-20" 
      />
    </div>
    <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center" data-aos='fade-down'>
      <div className="flex flex-col items-center gap-2 px-2">
        <span className="text-2xl xl:text-3xl">DEV H<span className="text-blue-500">OU</span>SE</span>
        <p className="text-justify xl:text-sm text-stone-700">
          "O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."
        </p>
        <StackCard stacks={['Nextjs', 'React', 'Tailwind']} />
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Saiba Mais
        </button>
      </div>
    </div>
  </div>

  {/* Segundo Card Inferior */}
  <div className="flex flex-col items-center w-full p-4 lg:flex-row gap-8 md:px-24 lg:px-0" data-aos='fade-down'>
    <div className="lg:w-1/2">
      <Image 
        src={`/icons/computador.png`} 
        alt="TELA LOGIN" 
        width={200} 
        height={200} 
        className="md:h-[140px] md:w-[140px] lg:w-[190px] lg:h-[190px] xl:h-[500px] lg:ml-20" 
      />
    </div>
    <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center" data-aos='fade-down'>
      <div className="flex flex-col items-center gap-2 px-2">
        <span className="text-2xl xl:text-3xl">TELA LOGIN</span>
        <p className="text-justify xl:text-sm text-stone-700">
          "O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."
        </p>
        <StackCard stacks={['Nextjs', 'React', 'Tailwind']} />
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Saiba Mais
        </button>
      </div>
    </div>
  </div>

  {/* Terceiro Card Inferior */}
  <div className="flex flex-col items-center w-full p-4 lg:flex-row gap-8 md:px-24 lg:px-0" data-aos='fade-down'>
    <div className="lg:w-1/2">
      <Image 
        src={`/icons/api.png`} 
        alt="ECCOMERCE API" 
        width={140} 
        height={140} 
        className="md:h-[140px] md:w-[140px] lg:w-[190px] lg:h-[190px] xl:w-[220px] xl:h-[220px] xl:ml-28" 
      />
    </div>
    <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center">
      <div className="flex flex-col items-center gap-2 px-2">
        <span className="text-2xl xl:text-3xl">ECCOMERCE API</span>
        <p className="text-justify xl:text-sm text-stone-700">
          "Estou me desafiando a construir uma API do zero usando apenas Express, TypeScript e Node.js. O objetivo é explorar boas práticas de desenvolvimento, como estruturação de rotas e tratamento de erros, enquanto aprofundo meu conhecimento em back-end com essas tecnologias."
        </p>
        <StackCard stacks={['Nodejs', 'Typescript', 'Express']} />
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Saiba Mais
        </button>
      </div>
    </div>
  </div>

  {/* Quarto Card Inferior */}
  <div className="flex flex-col items-center w-full p-4 lg:flex-row gap-8 md:px-24 lg:px-0" data-aos='fade-down'>
    <div className="lg:w-1/2">
      <Image 
        src={`/icons/api.png`} 
        alt="TASK LIST" 
        width={140} 
        height={140} 
        className="md:h-[140px] md:w-[140px] lg:w-[190px] lg:h-[190px] xl:w-[220px] xl:h-[220px] xl:ml-28" 
      />
    </div>
    <div className="lg:w-1/2 flex-col lg:items-center lg:justify-center">
      <div className="flex flex-col items-center gap-2 px-2">
        <span className="text-2xl xl:text-3xl">TASK LIST</span>
        <p className="text-justify xl:text-sm text-stone-700">
          "O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."
        </p>
        <StackCard stacks={['Nestjs', 'Typescript', 'Express', 'SqLite', 'PrismaORM', 'Jwt']} />
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Saiba Mais
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
    


        {/*contato */}
       
        <div className="flex flex-col lg:flex-row w-full 2xl:px-16 2xl:pt-32 2xl:pb-40" data-aos='fade-down'>
        {/*sobre mim */}
        <div id="contato" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2 px-3  rounded-2xl">
          <span className="text-4xl">CONT<span className="text-indigo-700">ATO</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="text-center px-1 font-Kanit text-1xl sm:px-2 lg:px-16 lg:text-1xl lg:text-justify">
          Estou aberto a oportunidades de emprego nas quais posso contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas habilidades e experiência, não hesite em entrar em contato comigo.
        </p>
        <Image
                      src="/icons/seta-para-baixo.png"
                      alt="Descrição da imagem"
                      width={30}
                      height={40} 
                      className="animate-bounce"
              />
              <Link href={'https://api.whatsapp.com/send?phone=5592994916643&text=Ol%C3%A1,%20vim%20pelo%20portf%C3%B3lio!'} target="_Blank"> <Image src="/icons/zap.png" alt="LinkedIn" width={30} height={20} /></Link>
        </div>

      
        {/*Skills */}
        <div id="skills" className="hidden lg:flex pt-16 pb-16 w-full justify-center items-center flex-col gap-2" data-aos='fade-down'>
        <Image
                      src="/icons/hacker.svg"
                      alt="Descrição da imagem"
                      width={400}
                      height={40} 

              />
        </div>
        </div>
      </section>
      
    <Footer/>

    </div>
  );
}