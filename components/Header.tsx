'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm py-1`}>

      {/* Main navigation */}
      <div className="w-full pl-6 sm:pl-8 lg:pl-12 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-[54px]">
          {/* Logo Section */}
          <div className="flex items-center pl-0">
            <a href="/" className="flex items-center">
              <div className="w-22 h-22 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="HASCO Group Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/sectors', label: 'Sectors' },
            { href: '/clients', label: 'Clients' },
            { href: '/contact', label: 'Contact' },
            { href: '/careers', label: 'Careers' }
          ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative transition-all duration-300 font-semibold font-heading text-sm md:text-base text-gray-800 hover:text-brand-primary`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-brand-primary`}></div>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 text-gray-800 hover:text-brand-primary`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`pt-4 pb-6 border-t mt-4 bg-white`}>
            <nav className="flex flex-col space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/sectors', label: 'Sectors' },
                { href: '/clients', label: 'Clients' },
                { href: '/contact', label: 'Contact' },
                { href: '/careers', label: 'Careers' }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`transition-colors duration-300 font-semibold font-heading text-base py-2 border-l-2 border-transparent pl-4 text-gray-800 hover:text-brand-primary hover:border-brand-primary`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              </nav>
          </div>
        </div>
      </div>
    </header>
  )
}