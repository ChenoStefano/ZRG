'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [enviando, setEnviando] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEnviando(true)
    setMensaje('')
    setError('')

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setMensaje('¡Mensaje enviado correctamente!')
        setFormData({ nombre: '', correo: '', mensaje: '' })
      } else {
        setError('Error al enviar el mensaje. Por favor, intenta nuevamente.')
      }
    } catch {
      setError('Error al enviar el mensaje. Por favor, intenta nuevamente.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 text-center mb-8 md:mb-12">Contáctanos</h2>
        {mensaje && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            {mensaje}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-blue-800 dark:text-blue-200 font-bold mb-2 text-sm md:text-base">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 text-blue-800 dark:text-blue-200 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-sm md:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="correo" className="block text-blue-800 dark:text-blue-200 font-bold mb-2 text-sm md:text-base">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="w-full px-3 py-2 text-blue-800 dark:text-blue-200 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-sm md:text-base"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mensaje" className="block text-blue-800 dark:text-blue-200 font-bold mb-2 text-sm md:text-base">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 text-blue-800 dark:text-blue-200 border rounded-lg focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 text-sm md:text-base"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={enviando}
              className={`bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-bold py-3 px-6 rounded-full transition duration-300 text-sm md:text-base w-full md:w-auto ${
                enviando ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {enviando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
