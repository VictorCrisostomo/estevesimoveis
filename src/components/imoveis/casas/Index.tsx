import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card/Index";

type Todo = {
  id: number;
  tipo: string;
  categoria: string;
  bairro: string;
  endereco: string;
  numero: string;
  terreno: string;
  dormitorios: string;
  valor: string;
  images: string;
  blurs: string;
}

async function getData(): Promise<Todo[]> {
  const res = await fetch("https://imoveis-db.vercel.app/casas")

  if (!res.ok) {
    throw new Error("Falha ao carregar")
  }

  const data = await res.json()
  return data
}

export default async function CasasGroup() {

  const todos = await getData()
  const url: string = 'https://esteves-db.vercel.app'

  return(
    <>
          {
        todos.map((todos) => (
          <Link key={todos.id} href={`./casas/${todos.id}`}>
            <Card.Root >
              <Card.Image className="relative w-72 h-40 md:w-64 md:h-40">
                <Image
                  src={`${url}${todos.images[1]}`}
                  blurDataURL={`${url}${todos.blurs[1]}`}
                  placeholder="blur" 
                  quality={70}
                  fill
                  alt=""
                  className="bg-center bg-cover rounded-t-xl"
                />.
              </Card.Image>
              <Card.Content className="h-60 md:h-52">
                <Card.Description
                  tipo={todos.tipo}
                  bairro={todos.bairro}
                  endereco={todos.endereco}
                  numero={`nº ${todos.numero}`}
                  area={todos.terreno}
                  dormitorios={todos.dormitorios}
                  valor={todos.valor}
                />
              </Card.Content>
            </Card.Root>
          </Link>
        ))
      }
    </>
  )
}