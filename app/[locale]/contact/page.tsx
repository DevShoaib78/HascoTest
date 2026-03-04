'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Header, Footer } from '@/src/components/layout'
import { MapPin, Mail, Phone, Clock, Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react'

export default function ContactPage() {
  const t = useTranslations('contactPage')
  const locale = useLocale()
  const [isVisible, setIsVisible] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [officesVisible, setOfficesVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)

    const createObserver = (setState: (val: boolean) => void, threshold = 0.1) => {
      return new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setState(true) },
        { threshold }
      )
    }

    const formObserver = createObserver(setFormVisible)
    const officesObserver = createObserver(setOfficesVisible)

    const formEl = document.getElementById('form-section')
    const officesEl = document.getElementById('offices-section')

    if (formEl) formObserver.observe(formEl)
    if (officesEl) officesObserver.observe(officesEl)

    return () => {
      clearTimeout(timer)
      formObserver.disconnect()
      officesObserver.disconnect()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subjectLabel = formData.subject ? t(`form.${formData.subject}`) : ''
    const message = [
      `*HASCO Form Submission*`,
      ``,
      `*First Name:* ${formData.firstName}`,
      `*Last Name:* ${formData.lastName}`,
      `*Email:* ${formData.email}`,
      formData.phone ? `*Phone:* ${formData.phone}` : null,
      subjectLabel ? `*Subject:* ${subjectLabel}` : null,
      ``,
      `*Message:*`,
      formData.message,
    ].filter(line => line !== null).join('\n')

    const whatsappUrl = `https://wa.me/966126425834?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  const subjectOptions = [
    { key: 'subjectGeneral' },
    { key: 'subjectPartnership' },
    { key: 'subjectMarine' },
    { key: 'subjectLogistics' },
    { key: 'subjectConstruction' },
    { key: 'subjectTourism' },
    { key: 'subjectHospitality' },
    { key: 'subjectCareers' },
  ]

  const offices = [
    'Jeddah', 'NEOM / Al Wajh', 'Yanbu', 'Dammam', 'Ras Al Khair', 'Jazan'
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-primary">
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #002d50 0%, #004A81 50%, #003d6b 100%)' }} />
        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full border border-white/10" />
        <div className="absolute top-[-40px] right-[-40px] w-[280px] h-[280px] rounded-full border border-white/10" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full border border-white/10" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full border border-white/10" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 text-center">
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight font-heading mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('hero.title')}
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-body transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('hero.subtitle')}
          </p>
        </div>
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Form + Info */}
      <section id="form-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">

            {/* Form */}
            <div className={`transition-all duration-1000 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
                {t('form.heading')}
              </h2>
              <div className={`w-24 h-1 bg-brand-primary rounded-full mb-8 transition-all duration-1000 delay-300 ${formVisible ? 'scale-x-100' : 'scale-x-0'} ${locale === 'ar' ? 'origin-right' : 'origin-left'}`}></div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="text-green-700 font-body text-lg">{t('form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-heading text-gray-700 mb-2">{t('form.firstName')}</label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={e => setFormData({...formData, firstName: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white font-body text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-gray-700 mb-2">{t('form.lastName')}</label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={e => setFormData({...formData, lastName: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white font-body text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-heading text-gray-700 mb-2">{t('form.email')}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white font-body text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-heading text-gray-700 mb-2">{t('form.phone')}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white font-body text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-heading text-gray-700 mb-2">{t('form.subject')}</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 font-body text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors bg-white"
                    >
                      <option value="">{t('form.subject')}</option>
                      {subjectOptions.map(opt => (
                        <option key={opt.key} value={opt.key}>{t(`form.${opt.key}`)}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-heading text-gray-700 mb-2">{t('form.message')}</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white font-body text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-brand-primary text-white px-8 py-4 text-button-lg font-heading rounded-lg shadow-lg hover:shadow-xl hover:shadow-brand-primary/30 transform hover:scale-105 transition-all duration-300 overflow-hidden relative"
                  >
                    <span className="relative z-10">{t('form.submit')}</span>
                    <Send className={`w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300 ${locale === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div className={`transition-all duration-1000 delay-200 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-br from-brand-primary to-[#003d6b] rounded-2xl p-8 text-white sticky top-28">
                <h3 className="text-2xl font-heading mb-8">{t('info.heading')}</h3>

                <div className="space-y-6">
                  {/* HQ */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <div>
                      <p className="font-heading text-sm text-white/70 mb-1">{t('info.headquarters')}</p>
                      <p className="font-body">{t('info.address')}</p>
                      <p className="font-body text-white/80">{t('info.country')}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <div>
                      <p className="font-body" dir="ltr">{t('info.phone')}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <div>
                      <p className="font-body">{t('info.email')}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-brand-secondary" />
                    </div>
                    <div>
                      <p className="font-heading text-sm text-white/70 mb-1">{t('info.hours')}</p>
                      <p className="font-body text-sm">{t('info.hoursValue')}</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="font-heading text-sm text-white/70 mb-4">{t('info.followUs')}</p>
                  <div className="flex gap-3">
                    {socialLinks.map(social => (
                      <a key={social.label} href={social.href} aria-label={social.label}
                        className="w-10 h-10 bg-white/10 rounded-full hover:bg-brand-secondary transition-all duration-300 flex items-center justify-center transform hover:scale-110">
                        <social.icon size={18} className="text-white" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Strip */}
      <section id="offices-section" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className={`text-center mb-12 transition-all duration-1000 ${officesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-title-lg md:text-title-xl leading-tight font-heading mb-4 text-brand-primary">
              {t('offices.heading')}
            </h2>
            <div className={`w-24 h-1 bg-brand-primary mx-auto rounded-full transition-all duration-1000 delay-300 ${officesVisible ? 'scale-x-100' : 'scale-x-0'}`}></div>
            <p className="mt-6 text-lg text-gray-600 font-body leading-relaxed max-w-3xl mx-auto">
              {t('offices.text')}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {offices.map((office, index) => (
              <div
                key={office}
                className={`group bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 border border-gray-200 ${officesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 80 + 300}ms` }}
              >
                <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-heading text-sm text-brand-primary">{office}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
