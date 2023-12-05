'use client';

import Image from "next/image"

import { Instagram, Facebook, Mail } from "lucide-react"
import whatsapp from "@/assets/whatsapp.png"


export function Hero() {

  return(
    <section>
      {/* Hero */}
      <div className="bg-indigo-700">
        <div className="px-8 md:px-16 py-2 flex justify-between">
          <div>
          <div className="hidden md:block">
            <a
              href="https://wa.me/5573999973057?text=Ol%C3%A1,%20estou%20visitando%20seu%20site%20e%20preciso%20de%20uma%20ajuda." target="_blank" rel="noopener noreferrer"
              className="px-6 py-1 border-2 rounded-full border-indigo-600 text-indigo-300 font-semibold flex justify-center items-center">
              (73) 9 9997-3057 <Image src={whatsapp} alt="whats" className="w-4 ml-2"/>
            </a>
          </div>
          <div className="px-2 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 md:hidden">
            <a href="https://wa.me/5573999973057?text=Ol%C3%A1,%20estou%20visitando%20seu%20site%20e%20preciso%20de%20uma%20ajuda." target="_blank" rel="noopener noreferrer">
              <Image src={whatsapp} alt="whats" className="w-6"/>
            </a>
          </div>
          </div>
          <div className="flex gap-2">
            <a href="https://www.instagram.com/estevesimoveis/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-indigo-300 flex justify-center items-center">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/estevesimoveis" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-indigo-300 flex justify-center items-center">
              <Facebook />
            </a>
            <a href="malito:imobiliariaestevesimoveis@hotmail.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-indigo-300 flex justify-center items-center">
              <Mail />
            </a>
            {/* <p className="text-2xl text-center text-zinc-100"> | </p>
            <a href="" className="w-16 h-10 border-2 rounded-lg border-zinc-200 text-zinc-100 flex justify-center items-center font-bold">X</a> */}
          </div>
        </div>
      </div>
    </section>
  )
}