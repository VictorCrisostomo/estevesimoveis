import Image from "next/image"

import whatsapp from "../../../assets/whatsapp.png"
import { Bed, Car, Ruler, Phone, Share2 as Share, Home, BoxSelect, HardHat } from "lucide-react"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Ajuda } from '@/components/Ajuda';

export default function Casa() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      {/* header */}
      <div className="px-16 py-4 flex justify-between items-center">
        <div className="">
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
          <button className="border border-emerald-600 hover:border-emerald-700 text-emerald-700 py-2 px-4 rounded-lg flex items-center">
            <Share className="w-4 mr-2"/> Compartilhar
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
      </div>
      <hr className="border-zinc-600 mx-16 mt-2" />
      {/* video */}
      <div className="my-10 flex justify-center">
        <iframe className="w-[720px] h-[420px] rounded-xl" src="https://www.youtube.com/embed/3VZFpwlXKpg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      </div>
      {/* descrição */}
      <div className="px-16 pb-12 flex justify-between items-center" id="description">
        <div className="ml-1 max-w-3xl">
          <p className="font-semibold text-xl">Descrição do imóvel</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis nemo incidunt asperiores, ratione quisquam molestiae ut, quod minima soluta eaque atque repellendus cumque architecto quam totam consequuntur distinctio hic?</p>
          <div className="pt-5 flex gap-20">
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