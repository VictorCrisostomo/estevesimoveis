import Navbar from "@/components/navbar/Index"
import { Footer } from '@/components/Footer';
import { Caroussel } from '@/components/Caroussel';
import { Group } from "@/components/ui/groupCards/Index";
import CasasGroup from "@/components/imoveis/casas/Index";
import Contato from "@/components/Contato";

export default function BuscarImoveis() {

  return (
    <main className="bg-zinc-200 text-zinc-600">
      {/* Navbar */}
      <Navbar />

      {/* slide */}
      <Caroussel />

      {/* imoveis */}
      <Group.Root title="Todos os imoveis">
        <CasasGroup/>
      </Group.Root>

      {/* Falar com o corretor */}
      <Contato />

      {/* footer */}
      <Footer />
    </main>
  )
}