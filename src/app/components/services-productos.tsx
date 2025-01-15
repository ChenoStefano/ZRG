import Image from 'next/image'
import { Button } from "./ui/button"

export default function Services() {
const services = [
  {
    title: 'PC Gaming',
    subtitle: 'Custom Build',
    image: '/pc-gamer.png?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una PC Gaming personalizada.')}`
  },
  {
    title: 'PC Administración',
    subtitle: 'Computadora para negocios',
    image: '/pc-adm.png?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una PC para administración personalizada.')}`
  },
  {
    title: 'Limpieza de PC',
    subtitle: 'Deja tu PC como nueva',
    image: '/limpiar-pc.png?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una limpieza de PC.')}`
  },
  {
    title: 'Servicio Tecnico',
    subtitle: 'Arreglamos lo que sea',
    image: '/servicio-tecnico.png?height=200&width=150',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, necesito reparar mi PC. Problema: .')}`
  },
  {
    title: 'Instalación de OS',
    subtitle: 'Instalación de la versión de windows que desees',
    image: '/logos-windows.png?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar una instalación de OS.')}`
  },
  {
    title: 'Instalación de Pack Office',
    subtitle: 'Word, Excel, PowerPoint, etc...',
    image: '/office.png?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar "instalación Pack Office".')}`
  },
  {
    title: 'Combo Actualización',
    subtitle: 'GPU, CPU, RAM, etc...',
    image: '/combo.png?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa cotizar un combo de actualización.')}`
  },
  {
    title: 'GPU',
    subtitle: 'Gráficas, NVIDIA, AMD',
    image: '/gpu.png?height=100&width=100',
    link: `https://wa.me/541150398570?text=${encodeURIComponent('Hola, me interesa saber que tarjetas graficas tienen disponibles.')}`
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

