import Image from "next/image";

import whatsapp from "../../assets/whatsapp.png"

import { Bed, Car, Home, Ruler } from "lucide-react";

type InforProps = {
  house: string;
  referencia: string;
  endereco: string;
  compartilhar: string;
  valor: string;
  dormitorios: string ;
  vagas: string;
  area: string;
}

export function Infos({house='', referencia='', endereco='', compartilhar='', valor='', dormitorios='', vagas='', area=''}: InforProps) {
  return(
    <>
      {/* header */}
      <div className="px-4 md:px-16 py-3 grid grid-cols-1 justify-items-center md:flex md:justify-between md:items-center">
        <div className="text-center md:text-left pb-2">
          <p className="text-xs">
            <b className="font-bold text-xl">{house}</b> (REF: {referencia})
          </p>
          <p>{endereco}</p>
        </div>
        <div className="flex gap-3">
          <a href="#description">
            <button className=" bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg flex items-center">
              <Home className="w-4 mr-2"/> Saber mais sobre o imóvel
            </button>
          </a>
          <a href={compartilhar}>
            <button className="border border-lime-600 hover:border-lime-700 py-2 px-4 rounded-lg flex items-center">
              <Image src={whatsapp} alt="" className="w-5"/>
            </button>
          </a>
        </div>
      </div>
      {/* caroussel */}
      <div className="relative overflow-auto">
        <div className="relative flex gap-1 snap-x overflow-x-auto scrollCards">

          <div className="snap-center shrink-0">
            <div className="snap-start w-[560px] h-64 md:h-96 bg-red-400">
            </div>
          </div>

          <div className="snap-center shrink-0">
            <div className="snap-start w-[560px] h-64 md:h-96 bg-blue-400">
            </div>
          </div>

          <div className="snap-center shrink-0">
            <div className="snap-start w-[560px] h-64 md:h-96 bg-amber-200">
            </div>
          </div>

          <div className="snap-center shrink-0">
            <div className="snap-start w-[560px] h-64 md:h-96 bg-green-400">
            </div>
          </div>

          <div className="snap-center shrink-0">
            <div className="snap-start w-[560px] h-64 md:h-96 bg-orange-400">
            </div>
          </div>

        </div>
      </div>
      {/* infos */}
      <div className="px-10 md:px-16 py-4 grid grid-cols-1 gap-5 md:gap-0 md:flex justify-between">
        <div>
          <p className="font-medium text-sm">Valor</p>
          <p className="font-extrabold text-2xl text-emerald-600">R$ {valor}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Bed className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Dormitórios</p>
            <p className="text-zinc-700 font-bold">{dormitorios}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Car className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Vagas</p>
            <p className="text-zinc-700 font-bold">{vagas}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Ruler className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Área</p>
            <p className="text-zinc-700 font-bold">{area}</p>
          </div>
        </div>
      </div>
      <hr className="border-zinc-600 mx-7 md:mx-16 mt-2" />
    </>
  )
}