import { Bed, Ruler } from "lucide-react";

type DescriptionProps = {
  tipo: string;
  bairro: string ;
  endereco: string;
  area: string;
  dormitorios: string;
  valor: string;
  numero: string;
}

export function DescriptionCard({tipo='', bairro='', endereco='', numero='', area='', dormitorios='', valor=''}: DescriptionProps) {
  return(
    <>
      <p className="text-2xl md:text-xl font-semibold text-zinc-800">{tipo}</p>
      <div className="mt-4 md:mt-2">
        <p className="text-sm font-semibold text-zinc-700">{bairro}</p>
        <p className="text-sm">{endereco}</p>
        <p className="text-sm">{numero}</p>
      </div>
      <div className="flex mt-3 justify-between items-center">
        <p className="flex text-sm"> 
          <Ruler className="mr-1 text-zinc-700" /> {area}m²
        </p>
        <p className="flex text-sm items-center">
          <Bed className="mr-1 text-zinc-700" /> {dormitorios} dorms.
        </p>
      </div>
      <div className="mt-6 md:mt-5 flex justify-between items-center">
        <p className="text-xl font-bold text-emerald-500">R$ {valor}</p>
        {/* <Heart /> */}
      </div>
    </>
 
  )
}