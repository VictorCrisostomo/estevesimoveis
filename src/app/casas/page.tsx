import Image from "next/image"

import house from "@/assets/undraw_house_searching_re_stk8.svg"

import Navbar from "@/components/navbar/Index"
import { Footer } from '@/components/Footer';
import { Caroussel } from '@/components/Caroussel';
import { Group } from "@/components/groupCards/Index";
import { CasasGroup } from "@/components/imoveis/casas/Index";

export default function Casas() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />

      {/* slide */}
      <Caroussel />

      {/* imoveis */}
        <Group.Root title="Casas">
          <CasasGroup/>
        </Group.Root>

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