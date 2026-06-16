import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { sectors, getSectorBySlug } from '@/src/lib/sectors'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com'

export function generateStaticParams() {
  return sectors.map((s) => ({ sector: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; sector: string }>
}): Promise<Metadata> {
  const { locale, sector } = await params
  const def = getSectorBySlug(sector)
  if (!def) return {}

  const t = await getTranslations({ locale, namespace: 'sectorsPage' })
  const sectorName = t(`${def.key}.title`)
  const title = `${sectorName} | HASCO Group`
  const description = t(`${def.key}.detail.tagline`)
  const path = `/sectors/${def.slug}`

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}${path}`,
      languages: {
        'en-US': `${siteUrl}/en${path}`,
        'ar-SA': `${siteUrl}/ar${path}`,
        'x-default': `${siteUrl}/en${path}`,
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
          url: def.image,
          width: 1200,
          height: 630,
          alt: sectorName,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [def.image],
      creator: '@hascogroup',
    },
  }
}

export default function SectorDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
