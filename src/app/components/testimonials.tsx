import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ana García',
      role: 'Estudiante Universitaria',
      image: '/placeholder.svg?height=100&width=100',
      quote: 'Mi nueva PC personal es increíble. Rápida, silenciosa y perfecta para mis estudios y entretenimiento.',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Gerente de IT',
      image: '/placeholder.svg?height=100&width=100',
      quote: 'Las computadoras empresariales que adquirimos han mejorado significativamente la productividad de nuestro equipo.',
    },
    {
      name: 'Laura Martínez',
      role: 'Diseñadora Gráfica',
      image: '/placeholder.svg?height=100&width=100',
      quote: 'Mi PC personalizada maneja perfectamente todas mis aplicaciones de diseño. El rendimiento es excepcional.',
    },
  ]

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8 md:mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 md:p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">{testimonial.name}</h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-blue-800 dark:text-blue-200 italic text-sm md:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

