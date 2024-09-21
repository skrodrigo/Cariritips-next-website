'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navegacao() {
  return (
    <nav className="w-full border-b border-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/logo.svg"
                priority
                quality={100}
                width={40}
                height={45}
                alt="Logo da Marca CaririTips"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-sm font-medium text-gray-700">
                Grupos
              </Link>
              <Link href="/" className="text-sm font-medium text-gray-700">
                Sobre
              </Link>
            </div>
          </div>
          <div className="md:flex hidden">
            <Button className="bg-green text-white">Contate-nos</Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="bg-transparent" size="icon">
                  <Menu className="h-7 w-7 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/grupos"
                    className="text-sm font-medium text-gray-700"
                  >
                    Grupos
                  </Link>
                  <Link
                    href="/sobre"
                    className="text-sm font-medium text-gray-700"
                  >
                    Sobre
                  </Link>

                  <Button className="bg-green text-white">Contate-nos</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
