import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com'
const path = '/sectors'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'sectorsPage.hero' })
  const title = t('title')
  const description = t('subtitle')

  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: {
        'en-US': `${siteUrl}/en${path}`,
        'ar-SA': `${siteUrl}/ar${path}`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/${locale}${path}`,
      siteName: 'HASCO Group',
      title,
      description,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      images: [
        {
          url: '/images/hero.jpeg',
          width: 1200,
          height: 630,
          alt: 'HASCO Group - Integrated Excellence',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero.jpeg'],
      creator: '@hascogroup',
    },
  }
}

export default function SectorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
