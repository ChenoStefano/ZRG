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
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-6 max-w-sm z-50">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">¡Conéctate con ZRGAMING!</h2>
      <p className="text-gray-600 mb-4">Síguenos en redes sociales para las últimas novedades y ofertas.</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://wa.me/541150398570"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-300"
        >
          <FaWhatsapp className="text-white text-2xl" />
        </a>
       <a
        href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full hover:opacity-90 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
        }}
      >
        <FaInstagram className="text-white text-2xl" />
      </a>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        ×
      </button>
    </div>
  )
}

