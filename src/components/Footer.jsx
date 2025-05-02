import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="w-full p-4 bg-white border-t border-gray-200 shadow items-center md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <p className="text-sm text-gray-500 text-center dark:text-gray-400">© 2025 <a href="/" className="hover:underline">FilmFiesta&trade;</a>. All Rights Reserved.
        </p>
    </footer>
  )
}