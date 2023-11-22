export interface Imovel {
  id: number
  codigo: string
  tipo: string
  categoria: string
  bairro: string
  endereco: string
  numero: string
  terreno: string
  construcao: string
  dormitorios: string
  vagas: string
  valor: string
  descricao: string
}


async function getImovel(id: string): Promise<Imovel> {
  const res = await fetch(`https://imoveis-db.vercel.app/casas/${id}`)
  
  if (!res.ok) {
    throw new Error("Falha ao carregar")
  }

  const data = await res.json()
  return data
}


export default async function Imoveis({
  params: { id },
}: {
  params: { id: string },
}) {
  const imovel = await getImovel(id)

  return <>Imovel: {imovel.codigo}</>
}