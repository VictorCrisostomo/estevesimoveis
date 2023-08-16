import Image from "next/image"
import Link from "next/link"

import { Bed, Ruler } from "lucide-react"

import house from "../../assets/undraw_house_searching_re_stk8.svg"

import { Navbar } from "@/components/Navbar"
import { Footer } from '@/components/Footer';

export default function BuscarImoveis() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />
      {/* slide */}
      <div className=" min-w-screen h-44 md:h-80 bg-[url(../assets/banner.jpg)] bg-cover bg-center"/>
      {/* imoveis */}
      <section className="py-10 md:px-24 md:py-20">
        <div className="mx-6">
          <p className="text-zinc-800 text-xl font-semibold text-center md:text-left pb-5">Todos os imoveis</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 justify-items-center">
          <Link href={"../casas/loren"}>
            <div className="w-72 h-96 md:w-60 md:h-80 mb-10 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 md:w-60 md:h-32 bg-yellow-500 rounded-t-xl"></div>
              <div className="w-72 h-56 md:w-60 md:h-48 bg-zinc-100 rounded-b-xl">
                <div className="px-7 pt-5 md:pt-3">
                <p className="text-2xl md:text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4 md:mt-2">
                  <p className="text-sm font-semibold text-zinc-700">Bairro </p>
                  <p className="text-sm">Rua Loren Ipsum, 000</p>
                </div>
                <div className="flex mt-3 justify-between items-center">
                  <p className="flex text-sm"> 
                    <Ruler className="mr-1 text-zinc-700" /> 00²
                  </p>
                  <p className="flex text-sm items-center">
                    <Bed className="mr-1 text-zinc-700" /> 2 dorms.
                  </p>
                </div>
                <div className="mt-6 md:mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"../casas/loren"}>
            <div className="w-72 h-96 md:w-60 md:h-80 mb-10 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 md:w-60 md:h-32 bg-yellow-500 rounded-t-xl"></div>
              <div className="w-72 h-56 md:w-60 md:h-48 bg-zinc-100 rounded-b-xl">
                <div className="px-7 pt-5 md:pt-3">
                <p className="text-2xl md:text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4 md:mt-2">
                  <p className="text-sm font-semibold text-zinc-700">Bairro </p>
                  <p className="text-sm">Rua Loren Ipsum, 000</p>
                </div>
                <div className="flex mt-3 justify-between items-center">
                  <p className="flex text-sm"> 
                    <Ruler className="mr-1 text-zinc-700" /> 00²
                  </p>
                  <p className="flex text-sm items-center">
                    <Bed className="mr-1 text-zinc-700" /> 2 dorms.
                  </p>
                </div>
                <div className="mt-6 md:mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"../casas/loren"}>
            <div className="w-72 h-96 md:w-60 md:h-80 mb-10 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 md:w-60 md:h-32 bg-yellow-500 rounded-t-xl"></div>
              <div className="w-72 h-56 md:w-60 md:h-48 bg-zinc-100 rounded-b-xl">
                <div className="px-7 pt-5 md:pt-3">
                <p className="text-2xl md:text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4 md:mt-2">
                  <p className="text-sm font-semibold text-zinc-700">Bairro </p>
                  <p className="text-sm">Rua Loren Ipsum, 000</p>
                </div>
                <div className="flex mt-3 justify-between items-center">
                  <p className="flex text-sm"> 
                    <Ruler className="mr-1 text-zinc-700" /> 00²
                  </p>
                  <p className="flex text-sm items-center">
                    <Bed className="mr-1 text-zinc-700" /> 2 dorms.
                  </p>
                </div>
                <div className="mt-6 md:mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"../casas/loren"}>
            <div className="w-72 h-96 md:w-60 md:h-80 mb-10 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 md:w-60 md:h-32 bg-yellow-500 rounded-t-xl"></div>
              <div className="w-72 h-56 md:w-60 md:h-48 bg-zinc-100 rounded-b-xl">
                <div className="px-7 pt-5 md:pt-3">
                <p className="text-2xl md:text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4 md:mt-2">
                  <p className="text-sm font-semibold text-zinc-700">Bairro </p>
                  <p className="text-sm">Rua Loren Ipsum, 000</p>
                </div>
                <div className="flex mt-3 justify-between items-center">
                  <p className="flex text-sm"> 
                    <Ruler className="mr-1 text-zinc-700" /> 00²
                  </p>
                  <p className="flex text-sm items-center">
                    <Bed className="mr-1 text-zinc-700" /> 2 dorms.
                  </p>
                </div>
                <div className="mt-6 md:mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/* Falar com o corretor */}
      <section className="min-h-screen bg-zinc-100 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <div className="pb-10 flex justify-center">
                <Image src={house} alt="" className="w-[65%] md:w-[40%]" />
              </div>
              <div className="text-center">
                <p className="px-10 md:px-0 text-xl md:text-2xl font-bold text-zinc-800">Ainda não encontrou o que procura?</p>
                <br />
                <p className="px-4 md:px-96">Quer ajuda para encontrar imóveis? Fale com o corretor e confira se algum deles atende no momento.</p>
              </div>
              <div className="pt-8 flex justify-center">
                <button className="bg-neutral-950 hover:bg-neutral-800 text-white py-2 px-4 rounded-lg">
                  Fale com o Corretor
                </button>
              </div>
            </div>
      </section>
      {/* footer */}
      <Footer />
    </main>
  )
}