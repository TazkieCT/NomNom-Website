"use client"

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-pink-600">NOM</span>
              <span className="text-black">NOM</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="#about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link to="#signin" className="text-gray-700 hover:text-gray-900 transition">
              Sign In
            </Link>
            <button className="px-6 py-2 border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition font-medium">
              Sign Up
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
