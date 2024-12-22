import { Facebook, Instagram, PhoneIcon as WhatsApp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md scroll-smooth">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="ZRGaming Logo"
            width={150}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-blue-900 hover:text-blue-600">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/#products" className="text-blue-900 hover:text-blue-600">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/#location" className="text-blue-900 hover:text-blue-600">
                Ubicación
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-blue-900 hover:text-blue-600">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="https://facebook.com/tumarca" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://www.instagram.com/zr.gaming_pc?igsh=eHBsd3B0YXM3cjY3" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://wa.me/541150398570" target="_blank" rel="noopener noreferrer">
            <WhatsApp className="text-blue-600 hover:text-blue-800" />
          </a>
        </div>
      </div>
    </header>
  )
}

