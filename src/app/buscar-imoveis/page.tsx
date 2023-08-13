import Image from "next/image"
import Link from "next/link"

import { Bed, Ruler } from "lucide-react"

import house from "../../assets/undraw_House_searching_re_stk8.png"
import logo from "../../assets/logo.png"

import { Navbar } from "@/components/Navbar"

export default function BuscarImoveis() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />
      {/* slide */}
      <div className="bg-indigo-700">
        <div className="px-52 py-10 flex items-center justify-center">
          <div className="">
            <Image src={house} alt="" className="w-[100%]" />
          </div>
          <div className="">
            <p className="pb-3 font-semibold text-2xl text-zinc-100">Lorem Ipsun</p>
            <p className="text-sm text-zinc-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi deserunt esse, dolorem unde et, consequuntur repellat enim voluptatibus qui beatae.</p>
          </div>
        </div>
      </div>
      {/* imoveis */}
      <section className="px-24 py-20">
        <div className="mx-6">
          <p className="text-zinc-800 text-xl font-semibold pb-5">Todos os imoveis</p>
        </div>
        <div className=" grid grid-cols-4 justify-items-center">
          <Link href={"../casas/loren"}>
            <div className="mb-10 w-60 h-80 rounded-2xl drop-shadow-lg">
              <div className="w-60 h-32 bg-blue-700 rounded-t-xl"></div>
              <div className="w-60 h-48 bg-zinc-100 rounded-b-xl">
                <div className="px-7 pt-3">
                  <p className=" text-xl font-semibold text-zinc-800">Casas</p>
                  <div className="mt-2">
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
                  <div className="mt-5 flex justify-between items-center">
                    <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                    {/* <Heart /> */}
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="mb-10 w-60 h-80 rounded-2xl drop-shadow-lg">
            <div className="w-60 h-32 bg-blue-700 rounded-t-xl"></div>
            <div className="w-60 h-48 bg-zinc-100 rounded-b-xl">
              <div className="px-7 pt-3">
                <p className=" text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-2">
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
                <div className="mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-60 h-80 rounded-2xl drop-shadow-lg">
            <div className="w-60 h-32 bg-blue-700 rounded-t-xl"></div>
            <div className="w-60 h-48 bg-zinc-100 rounded-b-xl">
              <div className="px-7 pt-3">
                <p className=" text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-2">
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
                <div className="mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-60 h-80 rounded-2xl drop-shadow-lg">
            <div className="w-60 h-32 bg-blue-700 rounded-t-xl"></div>
            <div className="w-60 h-48 bg-zinc-100 rounded-b-xl">
              <div className="px-7 pt-3">
                <p className=" text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-2">
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
                <div className="mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-60 h-80 rounded-2xl drop-shadow-lg">
            <div className="w-60 h-32 bg-blue-700 rounded-t-xl"></div>
            <div className="w-60 h-48 bg-zinc-100 rounded-b-xl">
              <div className="px-7 pt-3">
                <p className=" text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-2">
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
                <div className="mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 w-60 h-80 rounded-2xl drop-shadow-lg">
            <div className="w-60 h-32 bg-blue-700 rounded-t-xl"></div>
            <div className="w-60 h-48 bg-zinc-100 rounded-b-xl">
              <div className="px-7 pt-3">
                <p className=" text-xl font-semibold text-zinc-800">Casas</p>
                <div className="mt-2">
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
                <div className="mt-5 flex justify-between items-center">
                  <p className="text-xl font-bold text-emerald-500">R$ 000.000,000</p>
                  {/* <Heart /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Falar com o corretor */}
      <section className="min-h-screen bg-zinc-100 flex flex-col justify-center">
            <div className="flex flex-col items-center">
              <div className="flex justify-center">
                <Image src={house} alt="" className="w-[70%]" />
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-zinc-800">Ainda não encontrou o que procura?</p>
                <br />
                <p>Quer ajuda para encontrar imóveis? Fale com o corretor <br /> e confira se algum deles atende no momento.</p>
              </div>
              <div className="pt-8 flex justify-center">
                <button className="bg-neutral-950 hover:bg-neutral-800 text-white py-2 px-4 rounded-lg">
                  Fale com o Corretor
                </button>
              </div>
            </div>
      </section>
      {/* footer */}
      <footer>
        <div className="bg-gray-200 px-48 py-10 flex justify-between">
          <div className="flex-col">
            <p className="font-semibold text-zinc-700">Destaques</p>
            <br />
            <Link href={"/"}>
              <p className="py-1">Inicio</p>
            </Link>
            <Link href={"./buscar-imoveis"}>
              <p className="py-1">Buscar Imoveis</p>
            </Link>
            <Link href={"./quem-somos"}>
              <p className="py-1">Quem Somos</p>
            </Link>
            <Link href={"./contato"}>
              <p className="py-1">Contato</p>
            </Link>

          </div>
          <div className="">
            <p className="font-semibold text-zinc-700">Endereço</p>
            <br />
            <p>Praça 25 de março, 30 - Centro <br />Canavieiras - BA | 45.860-000</p>
            <br />
            <p className="font-semibold text-zinc-700">Horário de funcionamento</p>
            <br />
            <p>Seg à sex: 8hs às 18hs <br />Sábados: 8hs às 13hs</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src={logo} alt="img" className="w-40"/>
            <br />
            <p className="font-semibold text-center">CRECI 1517 - PJ</p>
            <br />
            <p className="text-xs text-center">Copyright @ 2023 - ESTEVES IMOVEIS <br /> Todos os direitos reservados</p>
          </div>
        </div>
        <div className="bg-zinc-100 py-3">
          <p className="text-xs text-center">Developed by:</p>
        </div>
      </footer>
    </main>
  )
}