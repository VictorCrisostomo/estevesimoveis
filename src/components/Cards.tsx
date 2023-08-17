import { Bed, Ruler } from "lucide-react";
import Link from "next/link";

export function Card() {
  return(
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
  )
}