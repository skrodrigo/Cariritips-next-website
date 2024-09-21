import { Star } from 'lucide-react'
import { AnimatedSubscribeButtonDemo } from './AnimatedSubscribeButtonDemo'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="bg-black flex-col-reverse text-white flex container mx-auto gap-8 md:flex-row justify-between items-center">
      <div className="px-4 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 w-full md:w-[640px]">
          Te ajudamos a ser lucrativo{' '}
          <span className="text-green">no mercado esportivo!</span>
        </h1>
        <p className="text-sm md:text-xl mb-8 w-full md:w-[580px]">
          Somos especialistas em dicas esportivas, oferecendo análises precisas
          e estratégias vencedoras no nosso{' '}
          <span className="font-bold">grupo grátis!</span>
        </p>
        <div className="flex flex-col md:flex-row justify-center md:justify-left items-center gap-5">
          <Link href="https://chat.whatsapp.com/KfzCb422E3NHHqH9Lo3c8h">
            <AnimatedSubscribeButtonDemo />
          </Link>
          <div className="md:text-sm md:flex-row flex-col gap-2 flex text-gray50  justify-center items-center">
            <div>
              {[...Array(5)].map(item => (
                <Star
                  key={item}
                  size={20}
                  className="inline-block mr-1 fill-green stroke-none"
                />
              ))}
            </div>
            <div>
              <span className="text-white mr-1">100+</span>
              pessoas lucrando diariamente no grupo.
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 md:hidden lg:flex">
        <Image alt="Foto" src="/foto.png" width={400} height={406} />
      </div>
    </div>
  )
}
