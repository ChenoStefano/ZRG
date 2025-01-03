'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Popup */}
      <div 
        className={`
          fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[90%] max-w-md z-50
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
      >
        <div className="relative rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,149,255,0.5)]">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-white hover:text-gray-200 z-10 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Promo Image */}
          <Image
            src="/popup.png" // Reemplaza esto con la ruta a tu imagen
            alt="Oferta Especial"
            width={500}
            height={700}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  )
}

