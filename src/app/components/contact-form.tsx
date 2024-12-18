'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    // Resetear el formulario
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-12 md:py-20 bg-blue-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-8 md:mb-12">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-800 dark:text-blue-200 font-bold mb-2 text-sm md:text-base">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 text-blue-800 dark:text-blue-200 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-sm md:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-800 dark:text-blue-200 font-bold mb-2 text-sm md:text-base">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 text-blue-800 dark:text-blue-200 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-sm md:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-blue-800 dark:text-blue-200 font-bold mb-2 text-sm md:text-base">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 text-blue-800 dark:text-blue-200 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-sm md:text-base"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 text-sm md:text-base w-full md:w-auto"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

