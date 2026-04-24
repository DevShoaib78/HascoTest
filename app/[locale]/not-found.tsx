'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/src/lib/navigation'

export default function LocaleNotFound() {
  const t = useTranslations('notFound')

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-[#004A81] to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-heading">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-body">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#004A81] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#003d6b] transition-colors duration-300 font-heading"
            >
              {t('goHome')}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
