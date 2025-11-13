'use client'

import { useState, useEffect, useRef } from 'react'

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  })
  const [isVisible, setIsVisible] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div ref={sectionRef} className="bg-gray-100 py-20 relative overflow-hidden section-bg-transition">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-brand-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Section Title */}
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-title-lg md:text-title-xl font-light text-brand-dark mb-4 text-shadow-lg font-heading animate-slide-in-down">
            <span className="font-extralight">Contact </span><span className="font-extralight text-brand-dark">us</span>
          </h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto shadow-lg shadow-brand-primary/50"></div>
        </div>

        {/* Premium Contact Form */}
        <form onSubmit={handleSubmit} className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300 font-heading">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      focusedField === 'name' 
                        ? 'border-brand-primary shadow-lg shadow-brand-primary/25' 
                        : 'border-gray-300 hover:border-brand-primary/50'
                    }`}
                    placeholder="Your Name"
                  />
                  {focusedField === 'name' && (
                    <div className="absolute inset-0 border-2 border-brand-primary rounded-lg animate-pulse pointer-events-none"></div>
                  )}
                </div>
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  Phone Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      focusedField === 'phone' 
                        ? 'border-brand-primary shadow-lg shadow-brand-primary/25' 
                        : 'border-gray-300 hover:border-brand-primary/50'
                    }`}
                    placeholder="Your Phone Number"
                  />
                  {focusedField === 'phone' && (
                    <div className="absolute inset-0 border-2 border-brand-primary rounded-lg animate-pulse pointer-events-none"></div>
                  )}
                </div>
              </div>

              <div className="group">
                <label htmlFor="notes" className="block text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  Additional Notes
                </label>
                <div className="relative">
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('notes')}
                    onBlur={handleBlur}
                    rows={4}
                    className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none ${
                      focusedField === 'notes' 
                        ? 'border-brand-primary shadow-lg shadow-brand-primary/25' 
                        : 'border-gray-300 hover:border-brand-primary/50'
                    }`}
                    placeholder="Your Message"
                  />
                  {focusedField === 'notes' && (
                    <div className="absolute inset-0 border-2 border-brand-primary rounded-lg animate-pulse pointer-events-none"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      focusedField === 'email' 
                        ? 'border-brand-primary shadow-lg shadow-brand-primary/25' 
                        : 'border-gray-300 hover:border-brand-primary/50'
                    }`}
                    placeholder="Your Email"
                  />
                  {focusedField === 'email' && (
                    <div className="absolute inset-0 border-2 border-brand-primary rounded-lg animate-pulse pointer-events-none"></div>
                  )}
                </div>
              </div>

              <div className="group">
                <label htmlFor="address" className="block text-sm font-medium text-brand-dark mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('address')}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm ${
                      focusedField === 'address' 
                        ? 'border-brand-primary shadow-lg shadow-brand-primary/25' 
                        : 'border-gray-300 hover:border-brand-primary/50'
                    }`}
                    placeholder="Your Address"
                  />
                  {focusedField === 'address' && (
                    <div className="absolute inset-0 border-2 border-brand-primary rounded-lg animate-pulse pointer-events-none"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Premium Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="group relative w-full bg-brand-primary text-white px-8 py-4 text-lg font-semibold font-heading hover:bg-brand-secondary transition-all duration-500 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 transform hover:scale-105 hover-lift-3d hover-ripple"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">CONTACT US</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


