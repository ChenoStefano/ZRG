import { Star } from 'lucide-react'
import Image from 'next/image'

export default function GoogleReviews() {
const reviews = [
  {
    name: "Carlos Martínez",
    date: "hace 2 días",
    rating: 5,
    text: "Excelente servicio y asesoramiento. Me armaron una PC gaming perfecta para mis necesidades.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Ana López",
    date: "hace 1 semana",
    rating: 5,
    text: "La mejor atención que he recibido. El equipo es muy profesional y conocedor.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Miguel Rodríguez",
    date: "hace 2 semanas",
    rating: 5,
    text: "Increíble relación calidad-precio. Mi PC funciona perfectamente para trabajo y gaming.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Laura García",
    date: "hace 3 semanas",
    rating: 5,
    text: "Super recomendados. Excelente servicio post-venta y soporte técnico.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Pedro Sánchez",
    date: "hace 1 mes",
    rating: 5,
    text: "Muy satisfecho con mi compra. El armado fue rápido y profesional.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "María Torres",
    date: "hace 1 mes",
    rating: 5,
    text: "Grandes profesionales. Me ayudaron a elegir los mejores componentes para mi presupuesto.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Diego Flores",
    date: "hace 2 meses",
    rating: 5,
    text: "Excelente atención y muy buenos precios. Totalmente recomendados.",
    avatar: "/placeholder.svg?height=40&width=40"
  },
  {
    name: "Julia Ramírez",
    date: "hace 2 meses",
    rating: 5,
    text: "La mejor tienda de computación. Conocen muy bien su trabajo.",
    avatar: "/placeholder.svg?height=40&width=40"
  }
]


  return (
    <section className="py-12 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-white neon-title">
          Reseñas de Google
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <h3 className="text-white font-semibold">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-300 text-sm">{review.text}</p>
              <div className="mt-4">
                <Image
                  src="/placeholder.svg?height=20&width=60"
                  alt="Google"
                  width={60}
                  height={20}
                  className="opacity-50"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

