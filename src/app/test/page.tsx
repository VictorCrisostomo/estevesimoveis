import { Card } from "@/components/ui/card/Index"
import Image from 'next/image';
import Link from "next/link";

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
}

async function getData(): Promise<Todo[]> {
  const res = await fetch("https://imoveis-db.vercel.app/casas")

  if (!res.ok) {
    throw new Error("Falha ao carregar")
  }

  const data = await res.json()
  return data
}

export default async function Test() {
  
  const todos = await getData()
  const url: string = 'https://esteves-db.vercel.app'

  console.log(todos)

  return (
    <main className="bg-zinc-200 text-zinc-600">
      Hello world!
      <br />
      {
        todos.map((todos) => (
          <Link key={todos.id} href={`./test/${todos.id}`}>
            <Card.Root >
              <Card.Image className="">
                <Image src={`${url}${todos.images[1]}`} fill alt="" />.
              </Card.Image>
              <Card.Content className="">
                <Card.Description
                  tipo={todos.tipo}
                  bairro={todos.bairro}
                  endereco={todos.endereco}
                  numero={todos.numero}
                  area={todos.terreno}
                  dormitorios={todos.dormitorios}
                  valor={todos.valor}
                />
              </Card.Content>
            </Card.Root>
          </Link>
        ))
      }

    </main>
  )
}