import Image from 'next/image'

export default function FeaturedProducts() {
  const products = [
    { name: 'PC Personal', image: '/placeholder.svg?height=300&width=300', description: 'Ideal para uso doméstico y estudiantes' },
    { name: 'PC Empresarial', image: '/placeholder.svg?height=300&width=300', description: 'Potencia y rendimiento para tu negocio' },
    { name: 'PC Administrativa', image: '/placeholder.svg?height=300&width=300', description: 'Optimizada para tareas de oficina' },
  ]

  return (
    <section id="products" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-8 md:mb-12">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <Image src={product.image} alt={product.name} width={300} height={300} className="w-full" />
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">{product.name}</h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm md:text-base">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block w-full md:w-auto"
          >
            Solicita una Cotización Personalizada
          </a>
        </div>
      </div>
    </section>
  )
}

