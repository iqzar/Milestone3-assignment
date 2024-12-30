'use client'
import Link from "next/link";
import { MenuIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from './public/logoo.png'

export default function Header() {
  return (
    <main className="sticky top-0 z-50 flex justify-between bg-pri bg-opacity-5 pt-1 font-poppins backdrop-blur-md">
      <div className="flex ml-10 md:mr-0">
        <Image src={logo} width={80} height={80} alt="logo" />
      </div>
      <ul className="md:block hidden mr-10 pt-2">
        <li className="space-x-10 font-sans text-xs text-pri font-semibold">
          <Link className="hover:border-b-4 hover:border-med" href={"/about"}>Home</Link>
          <Link className="hover:border-b-4 hover:border-med" href="#skills">About</Link>
          <Link className="hover:border-b-4 hover:border-med" href="/blog">Articles</Link>
          <Link className="hover:border-b-4 hover:border-med" href="/contact">Contact us</Link>
        </li>
      </ul>
      <Sheet>
        <SheetTrigger className="md:hidden"><MenuIcon className="mr-5" /></SheetTrigger>
        <SheetContent className="bg-pri ml-5">
          <ul className="bg-pri ml-5">
            <li className="flex flex-col font-poppins text-sm leading-loose">
              <Link href={'/'}>Home</Link>
              <Link href='/about'>About</Link>
              <Link href='#projects'>Projects</Link>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </main>
  )
}
