import Image from 'next/image';

import contact from "@/assets/undraw_mobile_marketing_re_p77p.svg"
import whatsapp from "@/assets/whatsapp.png"

import Navbar from "@/components/navbar/Index";
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function QuemSomos() {
  return (
    <main className="text-zinc-600">
      <Navbar />
      <div className="mx-5 md:mx-32 my-8 flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold text-center text-zinc-700">Quem somos?</p>
        <br />
        <p className="text-center">A Esteves Imóveis atua no ramo imobiliário há mais de 10 anos, é uma empresa especializada na administração de locações, intermediação de compra e venda de imóveis residenciais, comerciais, rurais e industriais, documentação e avaliação de imóveis e tem como diferencial o atendimento personalizado e exclusivo a seus clientes.</p>
        
        <video className="py-5 w-[90%] md:w-[50%]" controls>
            <source src={"video/video1.mp4"}/>
        </video>

        <p className="text-center"> É uma empresa moderna, possui forte investimento em meios de comunicação e em novas tecnologias para atender as exigências do mercado imobiliário, é formada por profissionais competentes com expertise para realizar todas as etapas do negócio imobiliário desde a pesquisa ao registro final, tendo como objetivo proporcionar segurança, tranquilidade, conforto e agilidade no momento da realização da compra e venda de imóveis ou investimento desejado.</p>

        <video className="py-5 w-[90%] md:w-[50%]" controls>
            <source src={"video/video2.mp4"}/>
        </video>
        
      </div>

      <Footer />
    </main>
  )
}