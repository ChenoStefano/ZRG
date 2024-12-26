import DynamicHeader from './components/dynamic-header'
import FeaturedProducts from './components/featured-products'
import WhyChooseUs from './components/why-choose-us'
import Testimonials from './components/testimonials'
import Location from './components/location'
import ContactForm from './components/contact-form'
import Footer from './components/footer'
import WhatsAppBubble from './components/whatsapp-bubble'
import AnimatedSection from './components/animated-section'
import BrandCarousel from './components/brand-carousel'
import PromoPopup from './components/promo-popup'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZRGaming - Soluciones Informáticas Personalizadas',
  description: 'Especialistas en armado de computadoras personales, empresariales y administrativas. Ofrecemos soluciones informáticas de alta calidad para satisfacer tus necesidades específicas.',
  keywords: 'computadoras, PC gaming, armado de computadoras, soluciones informáticas, hardware, software, ZRGaming',
  openGraph: {
    title: 'ZRGaming - Soluciones Informáticas Personalizadas',
    description: 'Especialistas en armado de computadoras personales, empresariales y administrativas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ZRGaming - Soluciones Informáticas',
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <DynamicHeader />
      <PromoPopup />
      <main>
        <AnimatedSection>
          <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                    GAMING
                    <br />
                    HARDWARE
                    <br />
                    SOLUTIONS
                  </h1>
                </div>
                <div>
                  <div className="space-y-6">
                    <h2>
                      <span className="block text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        UNA PLATAFORMA.
                      </span>
                      <span className="block text-3xl font-bold text-blue-600">
                        RENDIMIENTO
                        <br />
                        INIGUALABLE.
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Especialistas en armado de computadoras personales, empresariales y administrativas. 
                      Ofrecemos soluciones informáticas de alta calidad para satisfacer tus necesidades específicas.
                    </p>
                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        Contáctanos Ahora
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <BrandCarousel />
            </div>
          </section>
        </AnimatedSection>
        <AnimatedSection>
          <FeaturedProducts />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUs />
        </AnimatedSection>  
        <AnimatedSection>
          <Location />
        </AnimatedSection>
        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  )
}


