import Image from "next/image"
import Link from "next/link"

import { Instagram, Facebook, Mail } from "lucide-react"
import whatsapp from "../assets/whatsapp.png"
import logo from "../assets/logo-1.png"


export function Navbar() {
  return(
    <section>
      {/* Hero */}
      <div className="bg-indigo-700">
        <div className="px-16 py-2 flex justify-between">
          <div>
            <a href="" className="px-4 py-1 border-2 rounded-full border-indigo-300 text-indigo-300 font-semibold flex justify-center items-center">
            (xx) xxxxx-xxxx <Image src={whatsapp} alt="whats" className="w-4 ml-2"/>
            </a>
          </div>
          <div className="flex gap-2">
            <a href="" className="w-9 h-9 rounded-lg bg-indigo-600 text-indigo-300 flex justify-center items-center">
              <Instagram />
            </a>
            <a href="" className="w-9 h-9 rounded-lg bg-indigo-600 text-indigo-300 flex justify-center items-center">
              <Facebook />
            </a>
            <a href="" className="w-9 h-9 rounded-lg bg-indigo-600 text-indigo-300 flex justify-center items-center">
              <Mail />
            </a>
            {/* <p className="text-2xl text-center text-zinc-100"> | </p>
            <a href="" className="w-16 h-10 border-2 rounded-lg border-zinc-200 text-zinc-100 flex justify-center items-center font-bold">X</a> */}
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav className="bg-zinc-300 text-zinc-600">
        <div className="px-16 py-5 flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="" className="w-48" />
          </Link>
          <div className="flex gap-4">
            <Link href={"/"}>
              <p className="hover:text-indigo-700">Inicio</p>
            </Link>
            <Link href={"../buscar-imoveis"}>
              <p className="hover:text-indigo-700">Buscar Imoveis</p>
            </Link>
            <Link href={"../quem-somos"}>
              <p className="hover:text-indigo-700">Quem somos</p>
            </Link>
            <Link href={"../contato"}>
              <p className="hover:text-indigo-700">Contato</p>
            </Link>
            <Link href={"../blog"}>
              <p className="hover:text-indigo-700">Blog</p>
            </Link>

          </div>
        </div>
      </nav>
    </section>
  )
}