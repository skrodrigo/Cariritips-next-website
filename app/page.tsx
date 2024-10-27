'use client'

import Faq from './components/Faq'
import FeaturesSection from './components/featuresSection'
import Footer from './components/Footer/Footer'
import Form from './components/Form'
import Header from './components/header'
import HeroSection from './components/heroSection'
import { AnimatedShinyTextDemo } from './components/shiny'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col mx-auto"
    >
      <Header />
      {/* Banner for large screens */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hidden 2xl:flex absolute top-16 w-full h-[500px] overflow-hidden -z-10"
      >
        <Image
          alt="banner"
          src="/banner.jpg"
          width={1920}
          height={500}
          priority={true}
          quality={100}
          className="object-cover w-full h-full"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </motion.div>
      {/* Banner for medium screens */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="2xl:hidden lg:flex hidden absolute top-16 w-full h-[600px] overflow-hidden -z-10"
      >
        <Image
          alt="Foto"
          src="/banner2.jpg"
          width={1535}
          height={600}
          priority={true}
          quality={100}
          className="object-cover w-full h-full"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </motion.div>
      {/* Banner for smaller screens */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex lg:hidden absolute top-16 w-full h-[600px] overflow-hidden -z-10"
      >
        <Image
          alt="Foto"
          src="/banner3.jpg"
          width={1024}
          height={600}
          priority={true}
          quality={100}
          className="object-cover w-full h-full"
        />
        <hr className="w-full h-full absolute bottom-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <AnimatedShinyTextDemo />
      </motion.div>
      <hr className="mb-[450px] lg:mb-0 xl:mb-0 w-0" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <HeroSection />
      </motion.div>
      {/* <FeaturesSection /> */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Form />
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Faq />
      </motion.div>
      <Footer />
    </motion.main>
  )
}
