import Navbar from "@/components/navbar/Index"
import { Footer } from '@/components/Footer';
import { Caroussel } from '@/components/Caroussel';
import { TerrenosGroup } from "@/components/imoveis/terrenos/Index";
import Contato from "@/components/Contato";

export default function Terrenos() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />

      {/* slide */}
      <Caroussel />

      {/* imoveis */}
      <TerrenosGroup />


      {/* Falar com o corretor */}
      <Contato />

      {/* footer */}
      <Footer />
    </main>
  )
}