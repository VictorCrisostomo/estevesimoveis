import Image from "next/image"

import whatsapp from "../../../assets/whatsapp.png"
import { Bed, Car, Ruler, Phone, Home, BoxSelect, HardHat } from "lucide-react"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Ajuda } from '@/components/Ajuda';

export default function Casa() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      {/* header */}
      <div className="px-4 md:px-16 py-3 grid grid-cols-1 justify-items-center md:flex md:justify-between md:items-center">
        <div className="text-center md:text-left pb-2">
          <p className="text-xs">
            <b className="font-bold text-xl">Casa</b> (REF: EI001)
          </p>
          <p>Bairro, Rua Lorem Ipsun, 00</p>
        </div>
        <div className="flex gap-3">
          <a href="#description">
            <button className=" bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg flex items-center">
              <Home className="w-4 mr-2"/> Saber mais sobre o imóvel
            </button>
          </a>
          <button className="border border-lime-600 hover:border-lime-700 py-2 px-4 rounded-lg flex items-center">
            <Image src={whatsapp} alt="" className="w-5"/>
          </button>
        </div>
      </div>
      {/* slides */}
      <div className="">
        <div className="flex justify-between">
          <div className="hidden md:block bg-blue-400 w-[33%] h-96"></div>
          <div className="bg-red-400 w-[100%] h-96"></div>
          <div className="hidden md:block bg-yellow-200 w-[33%] h-96"></div>
        </div>
      </div>
      {/* infos */}
      <div className="px-10 md:px-16 py-4 grid grid-cols-1 gap-5 md:gap-0 md:flex justify-between">
        <div>
          <p className="font-medium text-sm">Valor</p>
          <p className="font-extrabold text-2xl text-emerald-600">R$ 000.000,00</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Bed className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Dormitórios</p>
            <p className="text-zinc-700 font-bold">2 Dormitórios</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Car className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Vagas</p>
            <p className="text-zinc-700 font-bold">1 Vaga(s)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Ruler className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Área</p>
            <p className="text-zinc-700 font-bold">00m²</p>
          </div>
        </div>
      </div>
      <hr className="border-zinc-600 mx-7 md:mx-16 mt-2" />
      {/* video */}
      <p className="py-5 text-center text-xl font-semibold" id="description">Por dentro do imóvel</p>
      <div className="pb-10 flex justify-center">
        <iframe className="w-[360px] h-[206px] md:w-[720px] md:h-[420px] rounded-xl" src="https://www.youtube.com/embed/3VZFpwlXKpg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </div>
      {/* descrição */}
      <div className="px-5 md:px-16 pb-10 grid grid-cols-1 md:flex justify-between items-center" >
        <div className="md:ml-1 md:max-w-3xl">
          <p className="text-center md:text-left font-semibold text-xl">Descrição do imóvel</p>
          <br />
          <p className="text-center md:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis nemo incidunt asperiores, ratione quisquam molestiae ut, quod minima soluta eaque atque repellendus cumque architecto quam totam consequuntur distinctio hic?</p>
          <div className="py-7 md:py-0 md:pt-5 grid grid-cols-1 px-10 md:px-0 md:flex gap-5 md:gap-20">
            <div className=" flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-3 py-3">
                <BoxSelect className="text-zinc-500" />
              </div>
              <div className="">
                <p className="font-medium text-sm">Área do terreno</p>
                <p className="text-zinc-700 font-bold">00m x 00m x 00m x 00m</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-3 py-3">
                <HardHat className="text-zinc-500" />
              </div>
              <div className="">
                <p className="font-medium text-sm">Área construída</p>
                <p className="text-zinc-700 font-bold">00m x 00m x 00m x 00m</p>
              </div>
            </div>
          </div>
        </div>
        {/* Valor e contato */}
        <div className="bg-zinc-50 rounded-xl shadow-xl px-6 py-7">
          <p className="font-medium text-sm">Valor</p>
          <p className="font-extrabold text-xl text-emerald-600">R$ 000.000,00</p>

          <hr className="border-zinc-600 mx-1 my-3" />

          <p className="text-base">Gostaria de obter mais informações <br />sobre este imóvel?</p>
          <br />
          
          <div className="flex flex-col">
          <button className="mb-3 border border-neutral-950 text-neutral-950 text-base py-2 px-4 rounded-lg flex justify-center items-center">
              <Phone className="w-4 mr-2" /> Ligar
            </button>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg flex justify-center items-center">
              <Image src={whatsapp} alt="whats" className="w-4 mr-2"/> Conversar por Whatsapp
            </button>
          </div>

        </div>
      </div>
      {/* Falar com o corretor */}
      <Ajuda />
      {/* footer */}
      <Footer />
    </main>
  )
}