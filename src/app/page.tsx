"use client";
import Image from "next/image";
import Header from "./components/header";
import Link from "next/link";
import SkillCard from "./components/skill.card";
import AOS from "aos";
import { useEffect} from "react";
import Footer from "./components/footer";
import CardProject from "./components/cardProject";

export default function Home() {

  useEffect(() => {
    AOS.init(); 
  }, []);

  


  return (
    <div className="w-full min-h-screen font-Kanit">
      <Header />
      <section className="w-full">
        <div  id="homee" className="w-full flex flex-col justify-around items-center pt-40 pb-32 gap-10 sm:pt-52">
          <div className="text-center gap-5 flex flex-col">
            <span className="rounded-lg bg-transparent text-stone-900 text-5xl px-6 py-1 hover:bg-indigo-700 hover:text-white hover:border-indigo-700">
              JOSÉ <span className=" p-1 rounded-3xl">GA<span className="text-fuchsia-500">BR</span>IEL</span>
            </span>
            <div className="">
              <h1 className="text-4xl sm:text-6xl text-indigo-700">FULL STACK</h1>
              <h2 className="text-3xl sm:text-5xl">DEVE<span className="text-fuchsia-700">LO</span>PER</h2>
            </div>

            <div className="w-full px-1 flex items-center justify-center">
              <span className="border-2 border-indigo-700 px-2 py-5 rounded-2xl">
                      <Image
                      src="/icons/circulo-preto.png"
                      alt="Descrição da imagem"
                      width={10}
                      height={10} 
                      className="animate-bounce"
                      /></span>
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

        <div className="flex flex-col lg:flex-row w-full">
        {/*sobre mim */}
        <div id="sobre" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2 px-3">
          <span className="text-4xl">SO<span className="text-indigo-700">BRE</span> MIM</span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

            <p className="text-center px-1 font-Kanit text-1xl text-stone-700 sm:px-2 lg:px-16 lg:text-1xl lg:text-justify">
            Olá, me chamo <span className="text-indigo-900">Gabriel</span>, sou estudante de <span className="text-indigo-900">Engenharia de Software</span>, cursando o <span className="text-indigo-900">3º período</span> no <span className="text-indigo-900">Instituto de Tecnologia FUCAPI</span>. Sou apaixonado por <span className="text-indigo-900">tecnologia</span> e estou focado no <span className="text-indigo-900">desenvolvimento web</span> e <span className="text-indigo-900">back-end</span>, com ênfase em <span className="text-indigo-900">Node.js</span> e <span className="text-indigo-900">TypeScript</span>. Meu objetivo é me especializar no <span className="text-indigo-900">desenvolvimento de aplicativos Android</span>, criando soluções que impactem positivamente o dia a dia das pessoas. Estou sempre em busca de novos aprendizados, me esforçando para crescer profissionalmente e me tornar um desenvolvedor altamente qualificado.
          </p>
        </div>

      
        {/*Skills */}
        <div id="skills" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2">
          <span className="text-4xl font-oswald">SKIL<span className="text-indigo-700">LS</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <SkillCard />
        </div>
        </div>

        {/*Projetos */}
        <div id="sobre" className="pt-16 pb-16 w-ful flex justify-center items-center flex-col gap-2 px-3">
          <span className="text-4xl">PROJET<span className="text-indigo-700">OS</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="text-center px-1 font-Kanit text-1xl text-stone-700 sm:px-2 lg:px-16 lg:text-1xl xl:w-1/2">
          Aqui você encontrará alguns dos projetos pessoais que criei, cada projeto contendo seu próprio estudo de caso.
        </p>

        <div className="flex flex-col gap-y-32 lg:flex-row lg:flex-wrap">
          <CardProject title='PROJETO 1' description="O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."/>

          <CardProject title='PROJETO 2' description="O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."/>

          <CardProject title='PROJETO 3' description="O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."/>

          <CardProject title='PROJETO 4' description="O TaskMaster é uma aplicação web criada para simplificar a organização de tarefas e aumentar a produtividade de equipes e indivíduos. Com uma interface intuitiva e responsiva, o sistema permite que usuários criem, editem e organizem tarefas de forma eficiente, priorizando as mais importantes e garantindo que nenhum prazo seja perdido."/>
        </div>
        </div>


        {/*contato */}
        <div id="contato" className="pt-16 pb-16 w-full flex justify-center items-center flex-col gap-2 lg:px-40">
          <span className="text-4xl">CONT<span className="text-indigo-700">ATO</span></span>
          <span className="border-t-4 border-indigo-700 animate-move-left-right">{"\u00A0".repeat(15)}</span>

          <p className="px-48 pb-3 text-stone-700 text-center">
          Estou aberto a oportunidades de <span className="text-indigo-900">emprego</span> nas quais posso contribuir, aprender e crescer. Se você tiver uma boa oportunidade que corresponda às minhas <span className="text-indigo-900">habilidades</span> e <span className="text-indigo-900">experiência</span>, não hesite em entrar em contato comigo.
          </p>

          <div className="flex flex-col xl:flex-row w-full gap-x-8">
  <div className="xl:w-1/2 flex items-center flex-col">
    <form action="" method="POST" className="flex flex-col gap-8 bg-gray-200 px-16 py-16">
      <div className="flex flex-col">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Your Name" className="bg-white p-3" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Enter Your Email" className="bg-white p-3" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Mensagem</label>
        <input type="text" placeholder="Enter Your Message" className="bg-white p-3 pb-32" />
      </div>
      <Link href={"/contato"} className="border-2 text-white bg-indigo-700 px-8 py-2 rounded-lg lg:px-10 text-center">
        <span className="animate-pulse lg:text-2xl xl:text-xs">ENVIAR</span>
      </Link>
    </form>
  </div>

  <div className="xl:w-1/2 justify-center items-center hidden xl:flex">
    <Image src="/icons/contact.svg" alt="LinkedIn" width={400} height={20} />
  </div>
</div>
             
          

        </div>
      </section>
      
      <Footer/>

    </div>
  );
}