"use client";
import Image from "next/image"

import AOS from 'aos'
import { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {

    useEffect(() => {
        AOS.init();
      }, []);
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="flex flex-col w-full  fixed bg-white z-10 border-2" data-aos="fade-left">
      <div className="w-full flex justify-between items-center p-5">
        <div className="flex gap-2 items-center lg:text-1xl">

        <Image
        src="/icons/set.png"
        alt="Descrição da imagem"
        width={30}
        height={35} 
        />

        <span className="rounded-lg bg-transparent text-stone-900 text-1xl">
              JOSÉ <span className=" p-1 rounded-3xl">GA<span className="text-indigo-700">BR</span>IEL</span>
            </span> 
        </div>
        <button onClick={toggleMenu} className="text-2xl lg:hidden">
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden lg:flex">
        <nav>
            <ul className="flex gap-6 text-gray-500 text-xs font-oswald 2xl:text-sm 2xl:gap-10">
            <li className="">
            <a href="#homee" className="hover:text-indigo-700">HOME</a>
            </li>

            <li>
            <a href="#sobre" className="hover:text-indigo-700">SOBRE</a>
            </li>
            <li>
            <a href="#skills" className="hover:text-indigo-700">SKILLS</a>
            </li>
            <li>
            <a href="#projetos" className="hover:text-indigo-700">PROJETOS</a>
            </li>
            <li>
            <a href="#contato" className="hover:text-indigo-700">CONTATO</a>
            </li>
            </ul>
        </nav>
      </div>
      </div>

      <div className={`${isMenuOpen ? "flex" : "hidden"} p-4 w-full border bg-gray-100`}
      >
        <nav className="w-full flex flex-col items-center">
          <ul className="flex flex-col items-center">
            <li className="border-b-4 border-indigo-500 w-max p-3">
            <a href="#homee" className="hover:text-indigo-700">HOME</a>
            </li>
            <li className="border-b-4 border-indigo-500 w-max p-3">
            <a href="#sobre" className="hover:text-indigo-700">SOBRE MIM</a>
            </li>
            <li className="border-b-4 border-indigo-500 w-max p-3">
            <a href="#skills" className="hover:text-indigo-700">SKILLS</a>
            </li>
            <li className="border-b-4 border-indigo-500 w-max p-3">
            <a href="#projetos" className="hover:text-indigo-700">PROJETOS</a>
            </li>
            <li className="border-b-4 border-indigo-500 w-max p-3">
            <a href="#contato" className="hover:text-indigo-700">CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
