import { MapPin, Phone, Mail } from 'lucide-react'

export default function Location() {
  return (
    <section id="location" className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-8 md:mb-12">Nuestra Ubicación</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.990862466257!2d-58.2303222!3d-34.755823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32f005d6d7ec3%3A0x258fce9bc2679d1c!2sZR%20GAMING!5e0!3m2!1ses-419!2sar!4v1734440411559!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">Información de Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="text-blue-600 dark:text-blue-400 mr-2" size={20} />
                <span className="text-sm md:text-base text-blue-800 dark:text-blue-200">Calle 137, N°137 - Berazategui</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-blue-600 mr-2" size={20} />
                <span className="text-sm md:text-base text-blue-800 dark:text-blue-200">+54 11 5039-8570</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-blue-600 mr-2" size={20} />
                <span className="text-sm md:text-base text-blue-800 dark:text-blue-200">zr.gaming_pc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

