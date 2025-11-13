'use client'

import Image from 'next/image'
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react'
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

  return (
    <footer className="bg-gradient-to-br from-[#003d6b] to-brand-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Information */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative w-40 h-20">
                <Image
                  src="/images/hascowhite.png"
                  alt="HASCO Group Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md font-body">
              {t('description')}
            </p>
            
            {/* Social Media Icons */}
            <div className={`flex gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 rounded-full hover:bg-brand-secondary transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg flex items-center justify-center group"
                >
                  <social.icon size={18} className="text-white" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">{t('quickLinks')}</h3>
            <ul className="space-y-3 font-body">
              {[
                { key: 'home', href: `/${locale}` },
                { key: 'about', href: `/${locale}/about` },
                { key: 'sectors', href: `/${locale}/sectors` },
                { key: 'projects', href: `/${locale}/projects` },
                { key: 'clients', href: `/${locale}/clients` },
                { key: 'contact', href: `/${locale}/contact` }
              ].map((link) => (
                <li key={link.key}>
                  <a 
                    href={link.href} 
                    className={`text-white/80 hover:text-white transition-all duration-300 inline-block ${
                      locale === 'ar' ? 'hover:-translate-x-2' : 'hover:translate-x-2'
                    }`}
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 font-heading">{t('contactUs')}</h3>
            <div className="space-y-4 font-body">
              <div className={`flex items-start gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <MapPin size={20} className="text-brand-secondary mt-1 flex-shrink-0" strokeWidth={2} />
                <div className="text-white/80">
                  <p>{t('jeddah')}</p>
                  <p>{t('saudi')}</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Mail size={20} className="text-brand-secondary mt-1 flex-shrink-0" strokeWidth={2} />
                <div className="text-white/80">
                  <p>info@hasco.com.sa</p>
                  <p>support@hasco.com.sa</p>
                </div>
              </div>
              
              <div className={`flex items-start gap-3 ${locale === 'ar' ? 'flex-row-reverse' : ''}`}>
                <Phone size={20} className="text-brand-secondary mt-1 flex-shrink-0" strokeWidth={2} />
                <div className="text-white/80" dir="ltr">
                  <p>+966 12 642 5834</p>
                  <p>+966 13 123 4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm font-body">
              {t('copyright')}
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-body">
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
