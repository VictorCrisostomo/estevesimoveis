import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Ajuda } from '@/components/Ajuda';

import { Infos } from '@/components/layout/Infos'
import { Description } from "@/components/layout/Description"

export default function Casa() {
  return (
    <main className="bg-zinc-50 text-zinc-600">
      {/* navbar */}
      <Navbar />
      {/* Infos */}
      <Infos
        house="Lorem"
        referencia="12345"
        endereco="bairro, ipsun, 123"
        compartilhar='"12345678"'
        valor=''
        dormitorios=''
        vagas=''
        area=''
      />
      {/* descrição */}
      <Description />
      {/* Falar com o corretor */}
      <Ajuda />
      {/* footer */}
      <Footer />
    </main>
  )
}