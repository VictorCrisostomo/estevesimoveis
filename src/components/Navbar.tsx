import Image from "next/image"
import Link from "next/link"

import { Instagram, Facebook, Mail } from "lucide-react"
import whatsapp from "../assets/whatsapp.png"


export function Navbar() {
  return(
    <section>
      {/* Hero */}
      <div className="bg-red-600">
        <div className="px-16 py-2 flex justify-between">
          <div>
            <a href="" className="px-4 py-1 border rounded-full border-red-300 text-red-300 font-semibold flex justify-center items-center">
            (xx) xxxxx-xxxx <Image src={whatsapp} alt="whats" className="w-4 ml-2"/>
            </a>
          </div>
          <div className="flex gap-2">
            <a href="" className="w-9 h-9 rounded-lg bg-red-500 text-red-300 flex justify-center items-center">
              <Instagram />
            </a>
            <a href="" className="w-9 h-9 rounded-lg bg-red-500 text-red-300 flex justify-center items-center">
              <Facebook />
            </a>
            <a href="" className="w-9 h-9 rounded-lg bg-red-500 text-red-300 flex justify-center items-center">
              <Mail />
            </a>
            {/* <p className="text-2xl text-center text-zinc-100"> | </p>
            <a href="" className="w-16 h-10 border-2 rounded-lg border-zinc-200 text-zinc-100 flex justify-center items-center font-bold">X</a> */}
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav className="bg-zinc-300">
        <div className="px-16 py-5 flex justify-between items-center">
          <Link href="/">
            <p className="font-bold text-2xl">Logo</p>
          </Link>
          <div className="flex gap-4">
            <Link href={"/"}>
              <p>Inicio</p>
            </Link>
            <Link href={"../buscar-imoveis"}>
              <p>Buscar Imoveis</p>
            </Link>
            <Link href={"../quem-somos"}>
              <p>Quem somos</p>
            </Link>
            <Link href={"../contato"}>
              <p>Contato</p>
            </Link>
            <a href="">
              <p>Blog</p>
            </a>
          </div>
        </div>
      </nav>
    </section>
  )
}