import Image from "next/image";
import { Home } from "lucide-react";
import whatsapp from "@/assets/whatsapp.png"

type HeaderProps = {
  house: string;
  referencia: string;
  endereco: string;
  compartilhar: string;
}

export function HeaderInfo({ house='', referencia='', endereco='', compartilhar='' } : HeaderProps) {
  return (
    <div className="px-4 md:px-16 py-3 grid grid-cols-1 justify-items-center md:flex md:justify-between md:items-center">
      <div className="text-center md:text-left pb-2">
        <p className="text-xs">
          <b className="font-bold text-xl">{house}</b> (REF: {referencia})
        </p>
        <p className="text-sm">{endereco}</p>
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
  )
}