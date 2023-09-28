import { Heart, Bed, Ruler, CircleDollarSign, Building2 } from "lucide-react"

import { Header } from "@/app/components/mainPage/header/Index"
import { Caroussel } from "@/app/components/mainPage/caroussel/Index"

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
      <Caroussel.Root>
        <Caroussel.Cards />
      </Caroussel.Root>

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
