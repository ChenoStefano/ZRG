'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

export default function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  const whatsappNumber = '541150398570'
  const predefinedMessage = encodeURIComponent('¡Hola! Me interesa la oferta del combo -Kit Xeon- ¿Podrían darme más información?')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${predefinedMessage}`

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
          {/* WhatsApp button with predefined message */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 left-2 text-white hover:text-green-400 z-10 w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded-full transition-colors duration-300"
            aria-label="Contactar por WhatsApp"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-white hover:text-red-400 z-10 w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors duration-300"
            aria-label="Cerrar"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Promo Image */}
          <Image
            src="/popup.png"
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

