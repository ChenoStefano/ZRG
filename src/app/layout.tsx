import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next'
import { DarkModeProvider } from './contexts/DarkModeContext'

export const metadata: Metadata = {
  title: 'ZRGaming - Soluciones Informáticas Personalizadas',
  description: 'Especialistas en armado de computadoras personales, empresariales y administrativas.',
  icons: {
    icon: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Limpiar cualquier clase dark existente
                  document.documentElement.classList.remove('dark');
                  
                  const savedMode = localStorage.getItem('darkMode');
                  if (savedMode === 'true') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  console.error('Error initializing dark mode:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <DarkModeProvider>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
}

