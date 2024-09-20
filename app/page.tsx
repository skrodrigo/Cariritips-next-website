import Faq from './components/Faq'
import FeaturesSection  from './components/featuresSection'
import Footer from './components/Footer/Footer'
import Form from './components/Form'
import Header from './components/header'
import HeroSection from './components/heroSection'
import { AnimatedShinyTextDemo } from './components/shiny'

export default function Home() {
  return (
    <main className="flex flex-col mx-auto">
      <Header />
      <AnimatedShinyTextDemo />
      <HeroSection />
      <FeaturesSection />
      <Form />
      <Faq />
      <Footer />
    </main>
  )
}
