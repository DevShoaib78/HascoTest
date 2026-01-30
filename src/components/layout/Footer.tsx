'use client'

import Image from 'next/image'
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MapPin, Mail, Phone, Home, Info, Briefcase, Users, MessageCircle, FolderOpen } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const quickLinks = [
    { key: 'home', href: `/${locale}`, icon: Home },
    { key: 'about', href: `/${locale}/about`, icon: Info },
    { key: 'sectors', href: `/${locale}/sectors`, icon: Briefcase },
    { key: 'projects', href: `/${locale}/projects`, icon: FolderOpen },
    { key: 'clients', href: `/${locale}/clients`, icon: Users },
    { key: 'contact', href: `/${locale}/contact`, icon: MessageCircle }
  ]

  return (
    <footer className="bg-gradient-to-br from-[#003d6b] to-brand-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 mb-8">
          {/* Left Column: Company Information */}
          <div>
            <div className="mb-4">
              <div className="relative w-32 h-16">
                <Image
                  src="/images/hascowhite.png"
                  alt="HASCO Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4 font-body">
              {t('description')}
            </p>

            {/* Social Media Icons */}
            <div className={`flex gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-white/10 rounded-full hover:bg-brand-secondary transition-all duration-300 cursor-pointer transform hover:scale-110 flex items-center justify-center"
                >
                  <social.icon size={16} className="text-white" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Links (horizontal) + Contact Us (horizontal) */}
          <div className="space-y-6 lg:ml-12">
            {/* Quick Links - Horizontal */}
            <div>
              <h3 className="text-xl font-heading mb-4">{t('quickLinks')}</h3>
              <div className="flex flex-wrap gap-5">
                {quickLinks.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300 text-base font-body group"
                  >
                    <link.icon size={16} className="text-brand-secondary group-hover:text-white transition-colors" strokeWidth={2} />
                    <span>{t(link.key)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Us - Horizontal */}
            <div>
              <h3 className="text-xl font-heading mb-4">{t('contactUs')}</h3>
              <div className="flex flex-wrap gap-8 font-body text-base">
                {/* Location */}
                <div className={`inline-flex items-start gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <MapPin size={18} className="text-brand-secondary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/80">{t('jeddah')}, {t('saudi')}</span>
                </div>

                {/* Email */}
                <div className={`inline-flex items-start gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Mail size={18} className="text-brand-secondary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/80">info@hasco.com.sa</span>
                </div>

                {/* Phone */}
                <div className={`inline-flex items-start gap-2 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <Phone size={18} className="text-brand-secondary mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/80" dir="ltr">+966 12 642 5834</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-white/70 text-xs font-body">
              {t('copyright')}
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-xs font-body">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                {t('privacy')}
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                {t('terms')}
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">
                {t('cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
