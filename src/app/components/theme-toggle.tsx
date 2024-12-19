'use client'

import { Moon, Sun } from 'lucide-react'
import { useDarkMode } from '../contexts/DarkModeContext'

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  console.log('Current darkMode state:', darkMode)

  return (
    <button
      onClick={() => {
        toggleDarkMode()
        console.log('Toggle clicked, new state should be:', !darkMode)
      }}
      className={`
        relative flex items-center w-[200px] h-[40px] rounded-full p-1 transition-all duration-300
        ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}
      `}
      aria-label={darkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      <span
        className={`
          absolute left-1 flex items-center justify-center w-[98px] h-[32px] rounded-full transition-all duration-300 z-10
          ${darkMode ? 'translate-x-[96px] bg-gray-700' : 'bg-white'}
        `}
      >
        {darkMode ? (
          <Moon size={18} className="text-blue-400 mr-2" />
        ) : (
          <Sun size={18} className="text-yellow-500 mr-2" />
        )}
        <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {darkMode ? 'NIGHT' : 'DAY'}
        </span>
      </span>
      <span className={`flex-1 text-sm text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        DAY
      </span>
      <span className={`flex-1 text-sm text-center ${darkMode ? 'text-white' : 'text-gray-400'}`}>
        NIGHT
      </span>
    </button>
  )
}

