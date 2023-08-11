import Image from "next/image"

import whatsapp from "../../../assets/whatsapp.png"
import house from "../../../assets/undraw_House_searching_re_stk8.png"
import { Bed, Car, Ruler, Phone, Building2, CircleDollarSign } from "lucide-react"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function Casa() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
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
              <p className="text-zinc-700 font-bold">00m x 00m x 00m x 00m</p>
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
      <div className="px-16 pb-12 flex justify-between items-center">
        <div className="ml-1 max-w-3xl">
          <p className="font-semibold text-xl">Descrição do imóvel</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis nemo incidunt asperiores, ratione quisquam molestiae ut, quod minima soluta eaque atque repellendus cumque architecto quam totam consequuntur distinctio hic?</p>
        </div>
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
      <section className="bg-white">
        <div className="py-12">
          <h2 className="text-xl font-semibold text-center text-zinc-700">Precisa de ajuda?</h2>
        </div>
        <div className="flex items-center justify-center pb-16">
        <div className="grid grid-cols-2 justify-items-center gap-10">
          <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-80 h-96 rounded-2xl drop-shadow-lg flex flex-col justify-center">
            <div className="mr-7 ml-7 justify-center grid grid-rows-3 items-center gap-2">
              <div className="flex justify-center">
                <CircleDollarSign className="w-20 h-20 text-indigo-700" />
              </div>
              <p className="text-xl font-semibold text-center text-zinc-700">Simulador de Crédito</p>
              <p className="text-base text-center">Faça uma simulação de crédito para a compra do seu novo imóvel.</p>
              <div className="flex justify-center">
                <button className="bg-indigo-700 hover:bg-indigo-500 text-white w-56 py-2 px-4 rounded text-base">Simular financiamento</button>
              </div>
            </div>
          </div>
          <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-80 h-96 rounded-2xl drop-shadow-lg flex flex-col justify-center">
            <div className="mr-7 ml-7 justify-center grid grid-rows-3 items-center gap-2">
              <div className="flex justify-center">
                <Building2 className="w-20 h-20 text-indigo-700" />
              </div>
              <p className="text-xl font-semibold text-center text-zinc-700">Quer vender?</p>
              <p className="text-base text-center">Está precisando vender seu imóvel</p>
              <div className="flex justify-center">
                <button className="bg-indigo-700 hover:bg-indigo-500 text-white w-56 py-2 px-4 rounded text-base">Clique aqui</button>
              </div>
            </div>
          </div>
        </div>  
        </div>
 
      </section>
      {/* footer */}
      <Footer />
    </main>
  )
}