import Image from "next/image"
import Link from "next/link"

import logo from "../assets/logo-2.png"
import logoDev from "../assets/logo-dev.png"

export function Footer() {
  return (
    <footer>
      <div className="bg-gray-200 md:px-48 py-10 flex flex-col text-center gap-5 md:gap-0 md:text-left md:flex-row md:justify-between">
        <div className="flex-col">
          <p className="font-semibold text-zinc-700 pb-3">Destaques</p>
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
          <p className="font-semibold text-zinc-700 pb-1">Endereço</p>
          <p>Praça 25 de março, 30 - Centro <br />Canavieiras - BA | 45.860-000</p>
          <br />
          <p className="font-semibold text-zinc-700 pb-1">Horário de funcionamento</p>
          <p>Seg à sex: 8hs às 18hs <br />Sábados: 8hs às 13hs</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image src={logo} alt="img" className="w-40"/>
          <p className="font-semibold text-center">CRECI 1517 - PJ</p>
          <p className="text-xs text-center">Copyright @ 2023 - ESTEVES IMOVEIS <br /> Todos os direitos reservados</p>
        </div>
      </div>
      <div className="bg-zinc-100 py-3 flex justify-center items-center gap-2">
        <p className="text-xs text-center">Developed by:</p>
        <Image src={logoDev} alt="img" className="w-20"/>
      </div>
    </footer>
  )
}