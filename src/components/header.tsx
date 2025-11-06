"use client"

import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Logo from "./Logo"

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "Marketplace", to: "/marketplace" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <Logo mode="dark" className="h-10 w-auto" enableRainbow={true} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium px-2 py-1 transition-colors ${
                    isActive ? "text-red-600" : "text-gray-700 hover:text-gray-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="ml-4 flex items-center gap-3">
              <Link to="/signin" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Sign in
              </Link>
              <Link
                to="/signup"
                className="inline-flex items-center px-4 py-2 rounded-md bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-700 transition"
              >
                Sign up
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 transition"
            >
              {open ? (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0.15 } : { type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden bg-white border-b border-gray-100"
          >
            <div className="px-4 pt-4 pb-6">
              <div className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                        isActive ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to="/signin"
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Sign in
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-md bg-red-600 text-white text-sm font-semibold shadow-sm hover:bg-red-700 transition"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
