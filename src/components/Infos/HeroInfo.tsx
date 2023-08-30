import { Bed, Car, Ruler } from "lucide-react";

type InforProps = {
  valor: string;
  dormitorios: string ;
  vagas: string;
  area: string;
}

// 

export function HeroInfo({ valor='', dormitorios='', vagas='', area=''}: InforProps) {
  return(
    <>
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
            <p className="text-zinc-700 font-bold">{dormitorios} dormitório(s)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Car className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Vagas</p>
            <p className="text-zinc-700 font-bold">{vagas} vaga(s)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-300 rounded-full px-3 py-3">
            <Ruler className="text-zinc-500" />
          </div>
          <div className="">
            <p className="font-medium text-sm">Área</p>
            <p className="text-zinc-700 font-bold">{area}m²</p>
          </div>
        </div>
      </div>
      <hr className="border-zinc-600 mx-7 md:mx-16 mt-2" />
    </>
  )
}