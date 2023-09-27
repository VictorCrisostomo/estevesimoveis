import Image from "next/image"
import { Instagram, Facebook, Mail } from "lucide-react"

import whatsapp from "@/assets/whatsapp.png"

import logo from "@/assets/logo-2.png"

export function MainNav() {
  return (
    <>
      <div className="w-[100%] absolute z-10 items-center grid grid-cols-3 justify-items-center">
        {/* Whatsapp */}
        <div>
          {/* Botao desktop */}
          <div className="hidden md:block">
            <a
              href="https://web.whatsapp.com/send?phone=5573999973057&text=Ol%C3%A1.%20Estou%20visitando%20o%20site."
              className="px-6 py-1 border-2 rounded-full border-zinc-200 text-zinc-100 font-semibold flex justify-center items-center">
              (73) 9 9997-3057 <Image src={whatsapp} alt="whats" className="w-4 ml-2"/>
            </a>
          </div>
          {/* Botao mobile */}
          <div className="px-2 py-2 rounded-full bg-zinc-100 md:hidden">
            <a
              href="https://web.whatsapp.com/send?phone=5573999973057&text=Ol%C3%A1.%20Estou%20visitando%20o%20site."
              className=" text-zinc-100 font-semibold">
              <Image src={whatsapp} alt="whats" className="w-6"/>
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="px-5 py-8 md:px-8 md:py-10 rounded-b-2xl bg-zinc-100">
          <Image src={logo} alt="" className="w-36"/>
        </div>

        {/* Social Medias */}
        <div className="flex gap-1 md:gap-2">
          <a 
            href="https://www.instagram.com/estevesimoveis/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-10 md:h-10 md:bg-zinc-100 md:text-gray-400 text-zinc-100 rounded-lg flex justify-center items-center">
            <Instagram className="md:w-6 md:h-6 w-7 h-7"/>
          </a>

          <a
            href="https://www.facebook.com/estevesimoveis"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-10 md:h-10 md:bg-zinc-100 md:text-gray-400 text-zinc-100 rounded-lg flex justify-center items-center">
            <Facebook className="md:w-6 md:h-6 w-7 h-7"/>
          </a>
          
          <a
            href="malito:imobiliariaestevesimoveis@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-10 md:h-10 md:bg-zinc-100 md:text-gray-400 text-zinc-100 rounded-lg flex justify-center items-center">
            <Mail className="md:w-6 md:h-6 w-7 h-7"/>
          </a>
          {/* <p className="text-2xl text-center text-zinc-100"> | </p>
          <a href="" className="w-16 h-10 border-2 rounded-lg border-zinc-200 text-zinc-100 flex justify-center items-center font-bold">X</a> */}
        </div>
      </div>
    </>
  )
}
