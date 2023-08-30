import Navbar from "@/components/navbar/Index"
import { Footer } from '@/components/Footer';
import { Caroussel } from '@/components/Caroussel';
import { SitiosGroup } from "@/components/imoveis/sitios/Index";
import Contato from "@/components/Contato";

export default function ImoveisRurais() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />

      {/* slide */}
      <Caroussel />

      {/* imoveis */}
      <SitiosGroup />

      {/* Falar com o corretor */}
      <Contato />

      {/* footer */}
      <Footer />
    </main>
  )
}