'use client'

import DynamicHeader from './components/dynamic-header'
import FeaturedProducts from './components/featured-products'
import WhyChooseUs from './components/why-choose-us'
import Location from './components/location'
import ContactForm from './components/contact-form'
import Footer from './components/footer'
import WhatsAppBubble from './components/whatsapp-bubble'
import AnimatedSection from './components/animated-section'
import BrandCarousel from './components/brand-carousel'
import PromoPopup from './components/promo-popup'

export default function Home() {
  return (
    <div className="min-h-screen">
      <DynamicHeader />
       <PromoPopup />
      <main>
        <AnimatedSection>
          <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                    SOLUCIONES
                    <br />
                    HARDWARE
                    <br />
                    SOFTWARE
                    <br />
                  </h1>
                </div>
                <div>
                  <div className="space-y-6">
                    <h2>
                      <span className="block text-3xl font-bold text-blue-600">
                        RENDIMIENTO
                        <br />
                        INIGUALABLE.
                      </span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      Especialistas en armado de computadoras personales, empresariales y administrativas. 
                      Ofrecemos soluciones tecnlogicas de alta calidad para satisfacer tus necesidades específicas.
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

