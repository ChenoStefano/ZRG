import './globals.css'
import { Metadata } from 'next'
import { DarkModeProvider } from './contexts/DarkModeContext'

export const metadata: Metadata = {
  title: 'ZRGaming - Soluciones Informáticas Personalizadas',
  description: 'Especialistas en armado de computadoras personales, empresariales y administrativas.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
}

