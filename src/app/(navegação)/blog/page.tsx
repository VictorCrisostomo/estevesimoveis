import Navbar from '@/components/navbar/Index';
import { Footer } from '@/components/Footer';

export default function Blog() {
  return(
    <div className="text-zinc-600">
      <Navbar />
      <p className='text-center px-24 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, asperiores voluptate! Animi veritatis eaque modi praesentium odit quae quam itaque quasi sunt facere, ut ipsam deserunt tempore fugit placeat ipsa!</p>

      <section className="py-4 md:px-24 md:py-5">
        <div className="mx-6">
          <p className="text-zinc-800 text-xl font-semibold text-center md:text-left pb-5">Veja as ultimas noticias!</p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 justify-items-center">
        </div>
      </section>
      <Footer />
    </div>
  )
}