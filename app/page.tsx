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
      <div className="flex lg:hidden absolute w-full top-16 -z-10 scale-100">
        <Image
          alt="Foto"
          src="/bannerMobile.png"
          width={1080}
          height={1300}
          className="relative object-cover"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>
      <div className="hidden lg:flex absolute top-16 -z-10">
        <Image
          alt="Foto"
          src="/banner.png"
          width={2560}
          height={700}
          priority
          quality={100}
          className="relative object-cover"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </div>
      <AnimatedShinyTextDemo />
      <hr className="mb-[300px] sm:mb-[500px] md:mb-[700px] lg:mb-20 xl:mb-0 w-0" />
      <HeroSection />
      {/* <Form /> */}
      <Faq />
      <Footer />
    </main>
  )
}
