'use client'

import Image from 'next/image'

export default function BrandCarousel() {
  const brands = [
    { name: 'AMD', logo: '/amd.svg?height=50&width=120' },
    { name: 'Intel', logo: '/intel.svg?height=50&width=120' },
    { name: 'NVIDIA', logo: '/nvidia.svg?height=50&width=120' },
    { name: 'ASUS', logo: '/asus.svg?height=50&width=120' },
    { name: 'MSI', logo: '/msi.svg?height=50&width=120' },
    { name: 'Corsair', logo: '/corsair.svg?height=50&width=120' },
    { name: 'Razer', logo: '/razer.svg?height=50&width=120' },
    { name: 'Logitech', logo: '/logitech.svg?height=50&width=120' },
  ]

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10"></div>
      <div className="relative flex items-center py-8">
        <div
          className="flex items-center space-x-16 whitespace-nowrap animate-scroll"
          style={{
            animationDuration: `${brands.length * 5}s`,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center justify-center min-w-[120px] opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={50}
                className="dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

