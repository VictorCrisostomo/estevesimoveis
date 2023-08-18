'use client';
import { useState } from 'react';

import { Button, Modal, Card } from 'flowbite-react';
import Image from "next/image";

import * as bbLogoPng from "../assets/bb-logo.png"
import * as logoBraPng from "../assets/logo-bra.png"
import * as logoItauPng from "../assets/logo-itau.png"
import * as logoCaixaPng from "../assets/logo-caixa.png"
import * as logoBNordestePng from "../assets/banco-nordeste.png"

export function SimulacaoModals() {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs" onClick={() => props.setOpenModal('dismissible')}>Simular financiamento</button>
      <Modal dismissible show={props.openModal === 'dismissible'} onClose={() => props.setOpenModal(undefined)}>
        <Modal.Header>
          <p  className='font-semibold text-zinc-700'>Simule seu financiamento</p>
        </Modal.Header>
        <Modal.Body>
          <p className='font-medium text-zinc-600'>Selecione a instituição de preferência ou entre em contato conosco!</p>
          <div className="py-4 grid grid-cols-2 md:grid-cols-3 gap-2">
            <div className="rounded-2xl drop-shadow-lg pb-3">
              <div className="w-40 h-16 bg-amber-400 rounded-t-xl flex justify-center items-center">
                <Image src={bbLogoPng} width={85} height={250} alt="" />
              </div>
              <div className="w-40 h-16 bg-zinc-50 rounded-b-xl flex justify-center items-center">
                <a href="https://www42.bb.com.br/portalbb/imobiliario/creditoimobiliario/simular,802,2250,2250.bbx" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl drop-shadow-lg pb-3">
              <div className="w-40 h-16 bg-white rounded-t-xl flex justify-center items-center">
                <Image src={logoBraPng} width={50} height={200} alt="" />
              </div>
              <div className="w-40 h-16 bg-zinc-50 rounded-b-xl flex justify-center items-center">
                <a href="https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/encontre-seu-credito/simuladores-imoveis.shtm" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl drop-shadow-lg pb-3">
              <div className="w-40 h-16 bg-orange-400 rounded-t-xl flex justify-center items-center">
                <Image src={logoItauPng} width={60} height={60} alt="" />
              </div>
              <div className="w-40 h-16 bg-zinc-50 rounded-b-xl flex justify-center items-center">
                <a href="https://credito-imobiliario.itau.com.br/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl drop-shadow-lg">
              <div className="w-40 h-16 bg-blue-300 rounded-t-xl flex justify-center items-center">
                <Image src={logoCaixaPng} width={100} height={300} alt="" />
              </div>
              <div className="w-40 h-16 bg-zinc-50 rounded-b-xl flex justify-center items-center">
                <a href="https://www8.caixa.gov.br/siopiinternet-web/simulaOperacaoInternet.do?method=inicializarCasoUso" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl drop-shadow-lg">
              <div className="w-40 h-16 bg-white rounded-t-xl flex justify-center items-center">
                <Image src={logoBNordestePng} width={100} height={300} alt="" />
              </div>
              <div className="w-40 h-16 bg-zinc-50 rounded-b-xl flex justify-center items-center">
                <a href="https://www.bnb.gov.br/credito-pessoal/simulador" target="_blank" rel="noopener noreferrer">
                  <button className="bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded text-xs">Clique aqui</button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl">
              <div className="w-40 h-32 rounded-b-xl flex justify-center items-center">
                <a href="https://web.whatsapp.com/send?phone=5573999973057&text=Ol%C3%A1.%20Estou%20visitando%20o%20site." target="_blank" rel="noopener noreferrer">
                  <button className="bg-neutral-900 hover:bg-neutral-800 text-white py-2 px-4 rounded text-xs">Falar com o corretor</button>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}


