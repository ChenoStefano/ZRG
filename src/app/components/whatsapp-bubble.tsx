import { PhoneIcon as WhatsApp } from 'lucide-react'

export default function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/541150398570"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsApp size={24} />
    </a>
  )
}

