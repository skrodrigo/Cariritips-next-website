import Faq from './components/Faq'
import FeaturesSection from './components/featuresSection'
import Footer from './components/Footer/Footer'
import Form from './components/Form'
import Header from './components/header'
import HeroSection from './components/heroSection'
import { AnimatedShinyTextDemo } from './components/shiny'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto">
      <Header />

      {/* Banner para telas grandes */}
      <div className="hidden 2xl:flex absolute top-16 w-full h-[500px] overflow-hidden -z-10">
        <Image
          alt="Foto"
          src="/banner.png"
          width={1920}
          height={500}
          priority
          quality={100}
          className="object-cover w-full h-full"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      {/* Banner para telas médias */}
      <div className="2xl:hidden lg:flex hidden absolute top-16 w-full h-[600px] overflow-hidden -z-10">
        <Image
          alt="Foto"
          src="/banner1280.png"
          width={1535}
          height={600}
          priority
          quality={100}
          className="object-cover w-full h-full"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      {/* Banner para telas menores */}
      <div className="flex lg:hidden absolute top-16 w-full h-[600px] overflow-hidden -z-10">
        <Image
          alt="Foto"
          src="/banner1024.png"
          width={1024}
          height={600}
          priority
          quality={100}
          className="object-cover w-full h-full"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>

      <AnimatedShinyTextDemo />
      <hr className="mb-[450px] lg:mb-0 xl:mb-0 w-0" />
      <HeroSection />
      {/* <Form /> */}
      <Faq />
      <Footer />
    </main>
  )
}
