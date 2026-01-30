'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

export default function CTA() {
  const t = useTranslations('cta')
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('closing-cta')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission to your backend API
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    // For now, the form data is available in the formData state
    // You can integrate with your CRM, email service, or database here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section
      id="closing-cta"
      className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className={`bg-gradient-to-br from-gray-100 to-white rounded-3xl shadow-2xl border-2 border-gray-200 p-8 md:p-12 lg:p-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-heading">
                <span className="text-brand-primary">{t('heading')}</span>
              </h2>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
                {t('description')}
              </p>
            </div>

            {/* Right Side - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder={t('firstName')}
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 font-body"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder={t('lastName')}
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 font-body"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder={t('email')}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 font-body"
                  required
                />

                <p className="text-xs text-gray-500 font-body">
                  {t('terms')}{' '}
                  <a href="#" className="text-brand-primary hover:underline">{t('termsLink')}</a>
                  {' '}{t('and')}{' '}
                  <a href="#" className="text-brand-primary hover:underline">{t('privacyLink')}</a>.
                </p>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-heading rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-brand-primary/30"
                >
                  {t('submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
