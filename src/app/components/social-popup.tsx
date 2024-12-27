'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function SocialPopup() {
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
        className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
        onClick={() => setIsVisible(false)}
      />
      
      {/* Monitor-styled Popup */}
      <div 
        className={`
          fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[95%] max-w-md sm:max-w-xl md:max-w-2xl z-50
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
        `}
      >
        {/* Monitor Screen */}
        <div className="bg-white rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 border-[8px] sm:border-[12px] md:border-[16px] border-gray-800 relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-1 sm:top-2 sm:right-2 text-gray-500 hover:text-gray-700 text-xl"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Content */}
          <div className="text-center space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-600">¡Conéctate con ZRGAMING!</h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Síguenos en redes sociales para las últimas novedades y ofertas.
            </p>
            
            {/* Social buttons */}
            <div className="flex justify-center space-x-4 sm:space-x-6 pt-2 sm:pt-4">
              <a
                href="https://wa.me/541150398570"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-300"
              >
                <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full hover:opacity-90 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                }}
              >
                <FaInstagram className="text-white text-2xl sm:text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="mx-auto" style={{ width: '60%' }}>
          <div className="h-2 sm:h-3 md:h-4 bg-gray-800 rounded-b-lg"></div>
          <div className="h-8 sm:h-12 md:h-16 w-16 sm:w-20 md:w-24 bg-gray-800 mx-auto rounded-b-lg"></div>
          <div className="h-1 sm:h-1.5 md:h-2 w-24 sm:w-28 md:w-32 bg-gray-800 mx-auto rounded-lg"></div>
        </div>
      </div>
    </>
  )
}
