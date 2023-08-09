import Image from "next/image"
import Link from "next/link"

import { Instagram, Facebook, Mail, Bed, Car, Ruler } from "lucide-react"

import whatsapp from "../../../assets/whatsapp.png"

export default function Casa() {
  return (
    <main className="bg-zinc-100 text-zinc-600">
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
          <p className="font-bold text-2xl">Logo</p>
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
      {/* header */}
      <div className="px-16 py-4 flex justify-between items-center">
        <div className="">
          <p className="font-bold text-xl">Casa</p>
          <p>Bairro, Rua Lorem Ipsun, 00</p>
        </div>
        <div className="">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg flex items-center">
          <Image src={whatsapp} alt="whats" className="w-4 mr-2"/> compartilhar no Whatsapp
          </button>
        </div>
      </div>
      {/* slides */}
      <div className="">
        <div className="flex justify-between">
          <div className="bg-blue-400 w-[33%] h-96"></div>
          <div className="bg-red-400 w-[33%] h-96"></div>
          <div className="bg-yellow-200 w-[33%] h-96"></div>
        </div>
      </div>
      <div className="">
        <div className="px-16 py-4 flex justify-between">
          <div>
            <p className="font-medium text-sm">Valor</p>
            <p className="font-extrabold text-xl text-emerald-600">R$ 000.000,00</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-zinc-400 rounded-full px-3 py-3">
              <Bed className="text-zinc-600" />
            </div>
            <div className="">
              <p className="font-medium text-sm">Dormitórios</p>
              <p className="text-zinc-700 font-bold">2 Dormitórios</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-zinc-400 rounded-full px-3 py-3">
              <Car className="text-zinc-600" />
            </div>
            <div className="">
              <p className="font-medium text-sm">Vagas</p>
              <p className="text-zinc-700 font-bold">1 Vaga(s)</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-zinc-400 rounded-full px-3 py-3">
              <Ruler className="text-zinc-600" />
            </div>
            <div className="">
              <p className="font-medium text-sm">Área</p>
              <p className="text-zinc-700 font-bold">00m x 00m x 00m x 00m</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-zinc-600 mx-16 mt-2" />
      {/* video */}


    </main>
  )
}