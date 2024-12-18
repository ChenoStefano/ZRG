import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">ZRGaming</h3>
            <p className="text-blue-200 dark:text-blue-300">Soluciones informáticas a tu medida</p>
          </div>
          <div className="flex space-x-6">
            <button
              onClick={() => alert('Estamos trabajando en nuestra página de Facebook. ¡Pronto estará disponible!')}
              className="text-[#1877F2] hover:text-blue-300 transition-colors duration-300"
            >
              <FaFacebook size={24} />
            </button>
            <a href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E4405F] hover:text-pink-300 transition-colors duration-300" size={24} />
            </a>
            <a href="https://wa.me/541150398570" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-[#25D366] hover:text-green-300 transition-colors duration-300" size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-200 dark:text-blue-300">
          <p>&copy; 2025 ZRGaming. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

