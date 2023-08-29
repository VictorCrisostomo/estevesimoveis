import Image from "next/image";
import whatsapp from "@/assets/whatsapp.png"
import { Phone } from "lucide-react";

type CardProps = {
  valor: string
}

export function CardDescription({valor=''}: CardProps) {
  return(
        <div className="bg-zinc-50 rounded-xl shadow-xl px-6 py-7">
          <p className="font-medium text-sm">Valor</p>
          <p className="font-extrabold text-xl text-emerald-600">{valor}</p>

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
  )
}