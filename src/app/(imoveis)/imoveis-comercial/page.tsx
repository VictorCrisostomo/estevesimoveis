import Navbar from "@/components/navbar/Index"
import { Footer } from '@/components/Footer';
import { Caroussel } from '@/components/Caroussel';
import { ComercialGroup } from "@/components/imoveis/comercial/index"
import Contato from "@/components/Contato";

export default function ImoveisRurais() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />

      {/* slide */}
      <Caroussel />

      {/* imoveis */}
      <ComercialGroup />

      {/* Falar com o corretor */}
      <Contato />

      {/* footer */}
      <Footer />
    </main>
  )
}