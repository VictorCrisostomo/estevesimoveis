import { BoxSelect, HardHat } from "lucide-react"

type AreaProps = {
  terreno: string;
  construcao: string;
}

export function AreaDescription({ terreno='', construcao='' }: AreaProps){
  return(
    <>

      {/* descrição */}
            <div className=" flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-3 py-3">
                <BoxSelect className="text-zinc-500" />
              </div>
              <div className="">
                <p className="font-medium text-sm">Área do terreno</p>
                <p className="text-zinc-700 font-bold">{terreno}</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className="bg-zinc-300 rounded-full px-3 py-3">
                <HardHat className="text-zinc-500" />
              </div>
              <div className="">
                <p className="font-medium text-sm">Área construída</p>
                <p className="text-zinc-700 font-bold">{construcao}</p>
              </div>
            </div>
    </>
  )
}