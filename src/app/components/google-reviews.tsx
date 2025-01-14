import { Star } from 'lucide-react'
import Image from 'next/image'

export default function GoogleReviews() {
const reviews = [
  {
    name: "ANGELO SEBASTIAN SCOZZARI",
    date: "hace 5 días",
    rating: 5,
    text: "Atencion 10/10👏🏻",
    avatar: "/angelo.png?height=40&width=40"
  },
  {
    name: "Ezequiel Rial",
    date: "hace 4 semanas",
    rating: 5,
    text: "10 puntos",
    avatar: "/Eze.png?height=40&width=40"
  },
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
                  src="/google-maps.svg?height=20&width=60"
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

