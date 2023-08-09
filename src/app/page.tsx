import Image from "next/image"
import Link from "next/link"
import { Heart, Bed, Ruler, CircleDollarSign, Building2, Instagram, Facebook, Mail } from "lucide-react"

import whatsapp from "../assets/whatsapp.png"
import family from "../assets/undraw_family_vg76.png"
import logo from "../assets/logo.png"

export default function Home() {
  return (
    <main className="bg-zinc-200 text-zinc-600">
        <div className="w-[100%] absolute z-10 items-center grid grid-cols-3 justify-items-center">
          {/* Whatsapp */}
          <>
            <a href="" className="px-6 py-1.5 border-2 rounded-full border-zinc-200 text-zinc-100 font-bold flex justify-center items-center">
            (xx) xxxxx-xxxx <Image src={whatsapp} alt="whats" className="w-4 ml-2"/>
            </a>
          </>
          {/* Logo */}
          <div  className=" px-16 py-16 rounded-b-2xl bg-zinc-100 text-zinc-400 font-bold text-2xl">Logo</div>
          {/* Social Medias */}
          <div className="flex gap-1">
            <a href="" className="w-10 h-10 rounded-lg bg-zinc-100 text-gray-400 flex justify-center items-center">
              <Instagram />
            </a>
            <a href="" className="w-10 h-10 rounded-lg bg-zinc-100 text-gray-400 flex justify-center items-center">
              <Facebook />
            </a>
            <a href="" className="w-10 h-10 rounded-lg bg-zinc-100 text-gray-400 flex justify-center items-center">
              <Mail />
            </a>
            {/* <p className="text-2xl text-center text-zinc-100"> | </p>
            <a href="" className="w-16 h-10 border-2 rounded-lg border-zinc-200 text-zinc-100 flex justify-center items-center font-bold">X</a> */}
          </div>
        </div>
      {/*Hero*/}
      <section className="min-h-screen flex justify-center items-center bg-[url(../assets/abstract.jpg)] bg-cover bg-center">
        <div className="w-[100%] h-[100%] absolute bg-slate-600 opacity-40" />
        <div className="mx-48">
          <h1 className="text-6xl font-bold relative text-white text-center">Esteves Imóveis</h1>
          <br />
          <p className="relative text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, saepe. Exercitationem molestiae magni est, consectetur expedita inventore sit dolore accusantium laboriosam optio quae cupiditate minima quidem perferendis non, illum praesentium.
          </p>
        </div>
      </section>
      {/*carousel options*/}
      <section className="bg-zinc-200">
        {/* Container */}
        <div className="mt-12 mx-32">
          <h2 className="text-xl font-semibold text-center text-zinc-700 pb-4">O que você está procurando?</h2>
          
          <div className="mt-6 relative overflow-auto">
              <div className="relative flex gap-6 snap-x overflow-x-auto">

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./casas"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-red-700 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Casas</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./aluguel-de-imoveis"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-blue-700 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Aluguel de Imóveis</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./terrenos"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-slate-700 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Terrenos</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./sitios"}>
                    <div className="snap-start w-48 h-60 rounded-2xl drop-shadow-lg">
                      <div className="w-48 h-40 bg-orange-800 rounded-t-xl"></div>
                      <div className="w-48 h-20 bg-zinc-100 rounded-b-xl">
                        <p className="ml-5 pt-3 text-lg">Sítios</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="snap-center shrink-0 first:pl-8 last:pr-8">
                  <Link href={"./buscar-imoveis"}>
                    <div className="snap-start w-48 h-60 rounded-2xl bg-zinc-100 flex items-center justify-center drop-shadow-lg">
                      <p className="p-2 text-lg text-center">Ver todos os imóveis disponíveis.</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
        </div>
        <div className="my-24 mx-32 flex items-center justify-center">
            <div className="mr-4">
              <Image src={family} alt="" />
            </div>
            <div className="ml-4">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ipsa laborum aut natus dolor laboriosam possimus quo mollitia cupiditate in fuga asperiores harum non, id distinctio, repellendus amet, sequi esse.
                </p>
                </div>
          </div>
      </section>

      <section className="bg-zinc-200">
        {/* Container */}
        <div className="mx-20">
          <h2 className="text-xl font-semibold text-center text-zinc-700">Destaques</h2>

      {/* Cards Destaques */}
          <div className="my-10 flex justify-around">
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
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Ver mais</button>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="bg-white min-h-screen">
        <div className="pt-10 mx-32">
        <h2 className="text-xl font-semibold text-center text-zinc-700">Quem somos?</h2>
        <br />
        <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
        </div>
        <div className="flex justify-center mt-10">
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded">Ver mais</button>
        </div>
        <div className="my-14 mx-80 grid grid-cols-2 justify-items-center">
            <div className="transition delay-150 hover:bg-gray-100 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg">
                <div className="mr-7 ml-7 pt-5 justify-center">
                  <div className="flex justify-center">
                    <CircleDollarSign className="pt-3 w-16 h-16 text-indigo-700" />
                  </div>
                  <br />
                  <p className="text-lg font-semibold text-center text-zinc-700">Simulador de Crédito</p>
                  <br />
                  <p className="text-sm text-center">Faça uma simulação de crédito para a compra do seu novo imóvel.</p>
                  <br />
                  <div className="flex justify-center">
                    <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Fazer simulação</button>
                  </div>
                </div>
            </div>
            <div className="transition delay-150 hover:bg-gray-100 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg">
                <div className="mr-7 ml-7 pt-5">
                  <div className="flex justify-center">
                    <Building2 className="pt-3 w-16 h-16 text-indigo-700" />
                  </div>
                  <br />
                  <p className="text-lg font-semibold text-center text-zinc-700">Quer Vender?</p>
                  <br />
                  <p className="text-sm text-center">Precisando vender o seu Imóvel?</p>
                  <br />
                  <div className="flex justify-center pt-5">
                    <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                  </div>
                </div>
            </div>
        </div>
      </section>
      {/* Footer */ }
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
