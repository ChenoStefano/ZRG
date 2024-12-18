import { Shield, Zap, Headphones, PenToolIcon as Tool } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Calidad Garantizada',
      description: 'Utilizamos solo componentes de alta calidad y ofrecemos garantía en todos nuestros productos.',
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Rendimiento Óptimo',
      description: 'Configuramos cada sistema para un rendimiento máximo según tus necesidades específicas.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Soporte Técnico',
      description: 'Ofrecemos soporte técnico continuo para asegurar el buen funcionamiento de tu equipo.',
    },
    {
      icon: <Tool className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
      title: 'Personalización Total',
      description: 'Adaptamos cada computadora a tus requerimientos exactos, tanto en hardware como en software.',
    },
  ]

  return (
    <section id="why-choose-us" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {reason.icon}
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mt-4 mb-2">{reason.title}</h3>
              <p className="text-blue-700 dark:text-blue-300">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

