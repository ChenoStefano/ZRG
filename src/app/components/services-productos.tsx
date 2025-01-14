import Image from 'next/image'
import { Button } from "./ui/button"

export default function Services() {
const services = [
  {
    title: 'PC Gaming',
    subtitle: 'Custom Build Online',
    image: '/placeholder.svg?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una PC Gaming personalizada.')}`
  },
  {
    title: 'PC Empresarial',
    subtitle: 'Custom Build Online',
    image: '/placeholder.svg?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una PC Empresarial personalizada.')}`
  },
  {
    title: 'PC Workstation',
    subtitle: 'Custom Build Online',
    image: '/placeholder.svg?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una PC Workstation personalizada.')}`
  },
  {
    title: 'PC Servidor',
    subtitle: 'Custom Build Online',
    image: '/placeholder.svg?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar un Servidor personalizado.')}`
  },
  {
    title: 'Procesadores',
    subtitle: 'Intel y AMD',
    image: '/placeholder.svg?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar Procesadores.')}`
  },
  {
    title: 'Memoria RAM',
    subtitle: 'DDR4 y DDR5',
    image: '/placeholder.svg?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar Memoria RAM.')}`
  },
  {
    title: 'Discos Duros',
    subtitle: 'SSD y HDD',
    image: '/placeholder.svg?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar Discos Duros.')}`
  },
  {
    title: 'Tarjetas',
    subtitle: 'Gráficas, RAID, NIC',
    image: '/placeholder.svg?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar Tarjetas.')}`
  },
]


  return (
    <section id="services" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-8 md:mb-12 neon-title">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 relative w-full aspect-square max-w-[200px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">
                {service.title}
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                {service.subtitle}
              </p>
              <Button
                asChild
                variant="default"
                className="bg-black hover:bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <a href={service.link} target="_blank" rel="noopener noreferrer">
                  Cotizar Ahora
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

