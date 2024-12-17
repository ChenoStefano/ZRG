import { Facebook, Instagram, PhoneIcon as WhatsApp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">ZRGaming</h3>
            <p className="text-blue-200">Soluciones informáticas a tu medida</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://facebook.com/tumarca" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-white hover:text-blue-300" />
            </a>
            <a href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3" target="_blank" rel="noopener noreferrer">
              <Instagram className="text-white hover:text-blue-300" />
            </a>
            <a href="https://wa.me/541150398570" target="_blank" rel="noopener noreferrer">
              <WhatsApp className="text-white hover:text-blue-300" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-200">
          <p>&copy; 2025 ZRGaming. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

