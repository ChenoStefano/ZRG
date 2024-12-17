import Header from './components/header'
import DynamicHeader from './components/dynamic-header'
import FeaturedProducts from './components/featured-products'
import WhyChooseUs from './components/why-choose-us'
import Testimonials from './components/testimonials'
import Location from './components/location'
import ContactForm from './components/contact-form'
import Footer from './components/footer'
import WhatsAppBubble from './components/whatsapp-bubble'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TuMarca - Soluciones Informáticas a tu Medida',
  description: 'Especialistas en armado de computadoras personales, empresariales y administrativas. Ofrecemos soluciones informáticas personalizadas para satisfacer tus necesidades.',
  keywords: 'computadoras, PC, armado de computadoras, soluciones informáticas, hardware, software',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <DynamicHeader />
      <main>
        <section id="home" className="py-12 md:py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-blue-900 text-center mb-4 md:mb-6">
              Soluciones Informáticas a tu Medida
            </h1>
            <p className="text-lg md:text-xl text-blue-800 text-center mb-6 md:mb-8">
              Especialistas en armado de computadoras personales, empresariales y administrativas
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 w-full md:w-auto text-center"
              >
                Contáctanos Ahora
              </a>
            </div>
          </div>
        </section>
        <FeaturedProducts />
        <WhyChooseUs />
        <Testimonials />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}

