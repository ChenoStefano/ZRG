'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

export default function SocialPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000) // Show popup after 5 seconds

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
      
      {/* Popup */}
      <div 
        className={`
          fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[90%] max-w-2xl bg-white rounded-lg shadow-2xl z-50
          transition-all duration-500 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
        `}
      >
        <div className="relative p-8">
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
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
      </div>
    </>
  )
}
