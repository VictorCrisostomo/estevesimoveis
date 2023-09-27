import Image from "next/image"
import Link from "next/link"
import { Heart, Bed, Ruler, CircleDollarSign, Building2, Instagram, Facebook, Mail } from "lucide-react"


import whatsapp from "@/assets/whatsapp.png"
import family from "@/assets/undraw_family_vg76.svg"
import logo from "@/assets/logo-2.png"

import { Header } from "@/app/components/mainPage/header/Index"

import { Footer } from "@/components/Footer"
import { SimulacaoModals } from "@/components/SimulacaoModals"

export default function Home() {
  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Header.NavBar />

      {/*Hero*/}
      <Header.Hero />

      {/*carousel options*/}
      <section className="bg-zinc-200">
        <div className="pt-12 md:mx-32">
          <h2 className="text-xl font-semibold text-center text-zinc-700 pb-4">O que você está procurando?</h2>
          
          <div className="mt-6 relative overflow-auto" id="">
              <div className="relative flex gap-6 snap-x overflow-x-auto scrollCards">

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./casas"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-red-700 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Casas</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./aluguel-de-imoveis"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-blue-700 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="px-5 pt-3 text-lg">Aluguel de Imóveis</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./terrenos"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-slate-700 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Terrenos</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./imoveis-rurais"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-orange-800 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Imóveis Rurais</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./buscar-imoveis"}>
                    <div className="snap-start w-48 h-60 rounded-2xl bg-zinc-100 flex items-center justify-center drop-shadow-lg">
                      <p className="p-2 text-lg text-center">Ver todos os imóveis disponíveis.</p>
                    </div>
                  </Link>
                </div>
              </div>
          </div>
        </div>
        <div className="my-20 mx-8 md:mx-32 md:flex items-center justify-center">
            <div className="pb-8 md:mr-4 flex justify-center md:justify-end">
              <Image src={family} alt="" className="w-[50%] md:w-[75%]" />
            </div>
            <div className="md:ml-4">
              <p className="text-center md:text-left">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa laborum aut natus dolor laboriosam possimus quo mollitia cupiditate in fuga asperiores harum non, id distinctio, repellendus amet, sequi esse.</p>
            </div>
        </div>
      </section>

      {/* Cards Destaques */}
      <section className="bg-zinc-200">
        <div className="md:mx-20">
          <h2 className="text-xl font-semibold text-center text-zinc-700">Destaques</h2>

          <div className="my-10 flex flex-col items-center gap-8 md:gap-0 md:flex-row md:justify-around">
            <div className="w-72 h-96 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 bg-yellow-500 rounded-t-xl"></div>
              <div className="w-72 h-56 bg-zinc-100 rounded-b-xl">
                <div className="mr-7 ml-7 pt-5">
                <p className=" text-2xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4">
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
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>

            <div className="w-72 h-96 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 bg-red-700 rounded-t-xl"></div>
              <div className="w-72 h-56 bg-zinc-100 rounded-b-xl">
              <div className="mr-7 ml-7 pt-5">
                <p className=" text-2xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-zinc-700">Bairro </p>
                  <p className="text-sm">Rua Loren Ipsum, 000</p>
                </div>
                <div className="flex mt-3 justify-between items-center">
                  <p className="flex text-sm"> 
                    <Ruler className="mr-1 text-zinc-700"/> 00²
                  </p>
                  <p className="flex text-sm items-center text-zinc-600">
                    <Bed className="mr-1 text-zinc-700" /> 2 dorms.
                  </p>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>

            <div className="w-72 h-96 rounded-2xl drop-shadow-lg">
              <div className="w-72 h-40 bg-blue-700 rounded-t-xl"></div>
              <div className="w-72 h-56 bg-zinc-100 rounded-b-xl">
              <div className="mr-7 ml-7 pt-5">
                <p className=" text-2xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-4">
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
                <div className="mt-6 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center my-10">
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-24 md:px-4 rounded">Ver mais</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white min-h-screen">
        <div className="pt-10 mx-8 md:mx-32">
          <h2 className="text-xl font-semibold text-center text-zinc-700">Quem somos?</h2>
          <br />
          <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-24 md:px-4 rounded">Ver mais</button>
        </div>

        <div className="flex items-center justify-center py-10 gap-10">
          <div className="grid md:grid-cols-2 justify-items-center gap-5">
            <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg flex flex-col justify-center">
              <div className="mx-7 justify-center grid grid-rows-3 items-center gap-2">
                <div className="flex justify-center">
                  <CircleDollarSign className="w-16 h-16 text-indigo-700" />
                </div>
                <p className="text-lg font-semibold text-center text-zinc-700">Simulador de Crédito</p>
                <p className="text-sm text-center">Faça uma simulação de crédito para a compra do seu novo imóvel.</p>
                <div className="flex justify-center">
                  <SimulacaoModals />
                  {/* <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Simular financiamento</button> */}
                </div>
              </div>
            </div>
            <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg flex flex-col justify-center">
              <div className="mx-7 justify-center grid grid-rows-3 items-center gap-2">
                <div className="flex justify-center">
                  <Building2 className="w-16 h-16 text-indigo-700" />
                </div>
                <p className="text-lg font-semibold text-center text-zinc-700">Quer vender ou alugar?</p>
                <p className="text-sm text-center">Precisando vender ou alugar o seu Imóvel?</p>
                <div className="flex justify-center">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>

      {/* Footer */ }
      <Footer />
    </main>
  )
}
