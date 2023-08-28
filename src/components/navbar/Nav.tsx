'use client';
import Link from 'next/link';
import Image from 'next/image';

import { Navbar } from 'flowbite-react';

import logo from "@/assets/logo-1.png"

export function NavBar() {
  return (
    <Navbar
      fluid
      rounded
      className='px-8 md:px-16 py-2 items-center bg-zinc-300 text-zinc-600'
    >
      <Navbar.Brand>
        <Link href="/">
            <Image src={logo} alt="" className="w-32 md:w-44" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href={"/"}>
          <p className="hover:text-indigo-700 pb-3 md:pb-0">Inicio</p>
        </Link>
        <Link href={"../buscar-imoveis"}>
          <p className="hover:text-indigo-700 pb-3 md:pb-0">Buscar Imoveis</p>
        </Link>
        <Link href={"../quem-somos"}>
          <p className="hover:text-indigo-700 pb-3 md:pb-0">Quem somos</p>
        </Link>
        <Link href={"../contato"}>
          <p className="hover:text-indigo-700 pb-3 md:pb-0">Contato</p>
        </Link>
        <Link href={"../blog"}>
          <p className="hover:text-indigo-700 pb-3 md:pb-0">Blog</p>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}