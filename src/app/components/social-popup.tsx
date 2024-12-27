'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000) // Reducido a 2 segundos

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
          w-[90%] max-w-2xl z-50
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
        `}
      >
        {/* Monitor Screen */}
        <div className="bg-white rounded-lg shadow-2xl p-8 border-[16px] border-gray-800 relative">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
            aria-label="Cerrar"
          >
            ×
          </button>

          {/* Content */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-blue-600">¡Conéctate con ZRGAMING!</h2>
            <p className="text-gray-600 text-lg">
              Síguenos en redes sociales para las últimas novedades y ofertas.
            </p>
            
            {/* Social buttons */}
            <div className="flex justify-center space-x-6 pt-4">
              <a
                href="https://wa.me/541150398570"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-300"
              >
                <FaWhatsapp className="text-white text-3xl" />
              </a>
              <a
                href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 rounded-full hover:opacity-90 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
                }}
              >
                <FaInstagram className="text-white text-3xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Monitor Stand */}
        <div className="mx-auto" style={{ width: '60%' }}>
          <div className="h-4 bg-gray-800 rounded-b-lg"></div>
          <div className="h-16 w-24 bg-gray-800 mx-auto rounded-b-lg"></div>
          <div className="h-2 w-32 bg-gray-800 mx-auto rounded-lg"></div>
        </div>
      </div>
    </>
  )
}
