'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { Link, useRouter, usePathname } from '@/src/lib/navigation'
import { sectors as sectorDefs } from '@/src/lib/sectors'

export default function Header() {
  const t = useTranslations('header')
  const tSectors = useTranslations('sectorsPage')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [sectorsOpen, setSectorsOpen] = useState(false)
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false)

  // Sector dropdown links, derived from the single sector source of truth
  const sectorLinks = sectorDefs.map((s) => ({
    href: `/${locale}/sectors/${s.slug}`,
    label: tSectors(`${s.key}.title`),
  }))

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow all navigation - no longer preventing default
  }

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en'
    // Construct the new path with the new locale
    const newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`
    // Use window.location for instant navigation
    window.location.href = newPath
  }

  const navItems = [
    { href: `/${locale}`, label: t('home'), enabled: true, dropdown: false },
    { href: `/${locale}/about`, label: t('about'), enabled: true, dropdown: false },
    { href: `/${locale}/sectors`, label: t('sectors'), enabled: true, dropdown: true },
    { href: `/${locale}/clients`, label: t('clients'), enabled: true, dropdown: false },
    { href: `/${locale}/contact`, label: t('contact'), enabled: true, dropdown: false },
    { href: `/${locale}/careers`, label: t('careers'), enabled: true, dropdown: false }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 shadow-[0_4px_20px_rgba(0,74,129,0.15)]' 
          : 'bg-white/95 lg:bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className={`flex justify-between items-center transition-all duration-700 ${
          isScrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-24'
        }`}>
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center transition-transform duration-300 hover:scale-105">
              <div className="w-32 h-16 sm:w-36 sm:h-18 lg:w-40 lg:h-20 relative">
                {/* White logo - visible when not scrolled on desktop only */}
                <Image
                  src="/images/hascowhite.png"
                  alt="HASCO Group Logo"
                  fill
                  className={`object-contain transition-opacity duration-700 ${
                    isScrolled ? 'opacity-0' : 'opacity-0 lg:opacity-100'
                  }`}
                  priority
                />
                {/* Blue logo - visible on mobile always, on desktop when scrolled */}
                <Image
                  src="/images/hascoblue.png"
                  alt="HASCO Group Logo"
                  fill
                  className={`object-contain transition-opacity duration-700 ${
                    isScrolled ? 'opacity-100' : 'opacity-100 lg:opacity-0'
                  }`}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center space-x-10 transition-all duration-700 ${
            isScrolled ? 'mt-0' : '-mt-2'
          }`}>
            {navItems.map((item) => (
              item.dropdown ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setSectorsOpen(true)}
                  onMouseLeave={() => setSectorsOpen(false)}
                  onFocus={() => setSectorsOpen(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) setSectorsOpen(false)
                  }}
                >
                  <a
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={sectorsOpen}
                    className={`group relative inline-flex items-center gap-1.5 transition-all duration-300 font-heading font-bold text-lg tracking-wide py-3 px-2 cursor-pointer ${
                      isScrolled ? 'text-[#004A81] hover:text-[#66AADD]' : 'text-white hover:text-[#66AADD]'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${sectorsOpen ? 'rotate-180' : ''}`} />
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isScrolled ? 'bg-[#004A81]' : 'bg-[#66AADD]'
                    }`}></div>
                  </a>

                  {/* Dropdown panel */}
                  <div
                    role="menu"
                    aria-label={item.label}
                    className={`absolute top-full ltr:left-0 rtl:right-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 transition-all duration-200 ${
                      sectorsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {sectorLinks.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        role="menuitem"
                        className="block px-5 py-2.5 font-heading text-base text-[#004A81] hover:bg-[#004A81]/5 hover:text-[#66AADD] transition-colors duration-200 ltr:text-left rtl:text-right"
                      >
                        {s.label}
                      </a>
                    ))}
                    <div className="my-2 border-t border-gray-100"></div>
                    <a
                      href={item.href}
                      role="menuitem"
                      className="block px-5 py-2.5 font-heading text-sm font-bold text-[#66AADD] hover:bg-[#004A81]/5 transition-colors duration-200 ltr:text-left rtl:text-right"
                    >
                      {t('allSectors')}
                    </a>
                  </div>
                </div>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`group relative transition-all duration-300 font-heading font-bold text-lg tracking-wide py-3 px-2 ${
                    isScrolled
                      ? item.enabled
                        ? 'text-[#004A81] hover:text-[#66AADD] cursor-pointer'
                        : 'text-[#004A81]/50 cursor-default'
                      : item.enabled
                        ? 'text-white hover:text-[#66AADD] cursor-pointer'
                        : 'text-white/70 cursor-default'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {item.enabled && (
                    <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                      isScrolled ? 'bg-[#004A81]' : 'bg-[#66AADD]'
                    }`}></div>
                  )}
                </a>
              )
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className={`hidden lg:flex items-center transition-all duration-700 ${
            isScrolled ? 'mt-0' : '-mt-2'
          }`}>
            {/* Language Toggle */}
            <button
              onClick={switchLanguage}
              className={`transition-all duration-300 font-heading text-lg tracking-wide px-4 py-2 rounded-lg ${
                isScrolled
                  ? 'text-[#004A81] hover:text-white hover:bg-[#004A81] border border-[#004A81]/20 hover:border-[#004A81]'
                  : 'text-white hover:text-[#66AADD]'
              }`}
            >
              {t('language')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center transition-colors duration-300 text-[#004A81] hover:text-[#66AADD]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
        <div className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="pt-4 pb-6 mt-2 border-t border-[#004A81]/20 bg-white/95">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.dropdown ? (
                  <div key={item.href}>
                    <div className="flex items-center justify-between">
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex-1 transition-colors duration-300 font-heading font-bold text-base py-2 border-l-2 border-transparent pl-4 text-[#004A81] hover:text-[#66AADD] cursor-pointer"
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        onClick={() => setMobileSectorsOpen((v) => !v)}
                        aria-expanded={mobileSectorsOpen}
                        aria-label={item.label}
                        className="p-2 text-[#004A81] hover:text-[#66AADD] transition-colors duration-300"
                      >
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileSectorsOpen ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                    <div className={`overflow-hidden transition-all duration-300 ${mobileSectorsOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="flex flex-col ltr:pl-8 rtl:pr-8 py-1 space-y-1">
                        {sectorLinks.map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="font-heading text-sm py-1.5 text-[#004A81]/80 hover:text-[#66AADD] transition-colors duration-200"
                          >
                            {s.label}
                          </a>
                        ))}
                        <a
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="font-heading text-sm py-1.5 font-bold text-[#66AADD]"
                        >
                          {t('allSectors')}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href)
                      setIsMenuOpen(false)
                    }}
                    className={`transition-colors duration-300 font-heading font-bold text-base py-2 border-l-2 border-transparent pl-4 ${
                      item.enabled
                        ? 'text-[#004A81] hover:text-[#66AADD] hover:border-[#004A81] cursor-pointer'
                        : 'text-[#004A81]/50 cursor-default'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              ))}
              
              {/* Mobile Language */}
              <div className={`flex items-center pt-4 border-t border-[#004A81]/20 ${locale === 'ar' ? 'pr-4' : 'pl-4'}`}>
                <button
                  onClick={switchLanguage}
                  className="transition-colors duration-300 font-heading text-sm px-3 py-1.5 rounded text-[#004A81] hover:text-white hover:bg-[#004A81] border border-[#004A81]/20"
                >
                  {t('language')}
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
