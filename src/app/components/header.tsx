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

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  };

    function handleScroll(arg0: string): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className="flex flex-col w-full border-2 fixed bg-white" data-aos="fade-left">
      <div className="w-full flex justify-between items-center lg:justify-center p-5">
        <div className="flex gap-2 items-center lg:text-1xl lg:hidden">

        <Image
        src="/icons/user.svg"
        alt="Descrição da imagem"
        width={40}
        height={40} 
        />
        </div>
        <button onClick={toggleMenu} className="text-2xl lg:hidden">
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden lg:flex">
        <nav>
            <ul className="flex gap-6 text-xs font-oswald">
            <li className="">
              <Link href={"#sobre"}>SOBRE MIM</Link>
            </li>

            <li>
              <Link href={"/#skills"}>SKILLS</Link>
            </li>
            <li>
              <Link href={"/#projetos"}>PROJETOS</Link>
            </li>
            <li>
              <Link href={"/#contato"}>CONTATO</Link>
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
