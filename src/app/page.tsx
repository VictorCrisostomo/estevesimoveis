import Link from 'next/link';
import Image from 'next/image';

import { CircleDollarSign, Building2 } from "lucide-react"

import { Header } from "@/components/ui/mainPage/header/Index"
import { Caroussel } from "@/components/ui/mainPage/caroussel/Index"
import { Group } from '@/components/ui/mainPage/highlights/Group';
import { Card } from "@/components/ui/card/Index"
import { SimulacaoModals } from "@/components/SimulacaoModals"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Header.NavBar />

      {/*Hero*/}
      <Header.Hero />

      {/*carousel options*/}
        <Caroussel.Root>
          <Caroussel.Cards />
        </Caroussel.Root>

      {/* Cards Destaques */}
      <Group>
        <Link href={"./casas/12"}>
          <Card.Root>
            <Card.Image className="relative w-72 h-40 ">
              <Image src='https://esteves-db.vercel.app/ei12/c01.jpg' quality={70} fill alt='' className='rounded-t-xl' />
            </Card.Image>
            <Card.Content className="w-72 h-56" >
              <Card.Description
                tipo='Casa'
                bairro='Ilha de Atalaia'
                endereco='Tv. Ilha Náutica'
                numero='S/N'
                area='300,00'
                dormitorios='2'
                valor='280.000,00'
                />
            </Card.Content>
          </Card.Root>
        </Link>

        <Link href={"./casas/50"}>
          <Card.Root>
            <Card.Image className="relative w-72 h-40 ">
              <Image src='https://esteves-db.vercel.app/ei50/c02.jpg' quality={70} fill alt='' className='rounded-t-xl' />
            </Card.Image>
            <Card.Content className="w-72 h-56" >
              <Card.Description
                tipo='Casa'
                bairro='Sócrates Rezende'
                endereco='Av. Helena Chaves'
                numero='166'
                area='394,00'
                dormitorios='3'
                valor='300.000,00'
                />
            </Card.Content>
          </Card.Root>
        </Link>

        <Link href={"./casas/51"}>
          <Card.Root>
            <Card.Image className="relative w-72 h-40 ">
              <Image src='https://esteves-db.vercel.app/ei51/c01.jpg' quality={70} fill alt='' className='rounded-t-xl' />
            </Card.Image>
            <Card.Content className="w-72 h-56" >
              <Card.Description
                tipo='Casa'
                bairro='Centro'
                endereco='Av. Cel. Augusto L. de Carvalho'
                numero='439'
                area='1.161,80'
                dormitorios='3'
                valor='2.000.000,00'
                />
            </Card.Content>
          </Card.Root>
        </Link>

      </Group>

      {/* About */}
      <section className="bg-white min-h-screen">
        <div className="pt-10 mx-8 md:mx-32">
          <h2 className="text-xl font-semibold text-center text-zinc-700">Quem somos?</h2>
          <br />
          <p className="text-center">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
        </div>
        <div className="flex justify-center mt-10">
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-24 md:px-4 rounded">Ver mais</button>
        </div>

        <div className="flex items-center justify-center py-10 gap-10">
          <div className="grid md:grid-cols-2 justify-items-center gap-5">
            <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg flex flex-col justify-center">
              <div className="mx-7 justify-center grid grid-rows-3 items-center gap-2">
                <div className="flex justify-center">
                  <CircleDollarSign className="w-16 h-16 text-indigo-700" />
                </div>
                <p className="text-lg font-semibold text-center text-zinc-700">Simulador de Crédito</p>
                <p className="text-sm text-center">Faça uma simulação de crédito para a compra do seu novo imóvel.</p>
                <div className="flex justify-center">
                  <SimulacaoModals />
                  {/* <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Simular financiamento</button> */}
                </div>
              </div>
            </div>
            <div className="transition delay-150 hover:bg-zinc-200 duration-300 w-64 h-80 rounded-2xl drop-shadow-lg flex flex-col justify-center">
              <div className="mx-7 justify-center grid grid-rows-3 items-center gap-2">
                <div className="flex justify-center">
                  <Building2 className="w-16 h-16 text-indigo-700" />
                </div>
                <p className="text-lg font-semibold text-center text-zinc-700">Quer vender ou alugar?</p>
                <p className="text-sm text-center">Precisando vender ou alugar o seu Imóvel?</p>
                <div className="flex justify-center">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>

      {/* Footer */ }
      <Footer />
    </main>
  )
}
