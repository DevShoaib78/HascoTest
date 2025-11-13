'use client'

import Image from 'next/image'

export default function ConditionalFooter() {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-0 -mt-2 lg:-mt-3">
              <div className="relative w-32 h-32 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                <Image
                  src="/logo.png"
                  alt="HASCO Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-black leading-relaxed mt-0 mb-0 max-w-md">
              Excellence in integrated solutions across marine, logistics, and development sectors with 19+ years of proven expertise. Your trust, our commitment.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 bg-gray-700 rounded-full hover:bg-brand-primary transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg hover:shadow-brand-primary/25 flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-black hover:text-brand-primary transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-black hover:text-brand-primary transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-black hover:text-brand-primary transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-black hover:text-brand-primary transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-black hover:text-brand-primary transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-black">Jeddah, Al Safa, KSA</p>
                  <p className="text-black">Dammam, Saudi Arabia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <p className="text-black">info@hasco.com.sa</p>
                  <p className="text-black">support@hasco.com.sa</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-brand-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <p className="text-black">+966 12 642 5834</p>
                  <p className="text-black">+966 13 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              ©Copyright HASCO 2025. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
