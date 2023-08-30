import Navbar from "@/components/navbar/Index"
import { Footer } from '@/components/Footer';
import { Caroussel } from '@/components/Caroussel';
import { AluguelGroup } from "@/components/imoveis/aluguel/Index";
import Contato from "@/components/Contato";

export default function AluguelDeImoveis() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />

      {/* slide */}
      <Caroussel />

      {/* imoveis */}
        <AluguelGroup />


      {/* Falar com o corretor */}
      <Contato />

      {/* footer */}
      <Footer />
    </main>
  )
}