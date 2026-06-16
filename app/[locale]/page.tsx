import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Header, Footer } from '@/src/components/layout'
import { Hero, About, CEO, Sectors, Clients, Stats, CTA, InteractiveMap } from '@/src/components/sections'
import { SectionTransition } from '@/src/components/ui'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })
  const title =
    locale === 'ar'
      ? 'هاسكو - التميز المتكامل في الخدمات البحرية واللوجستية والإنشاءات'
      : 'HASCO - Integrated Excellence in Marine, Logistics & Construction'
  const description = t('subtitle')

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en-US': `${siteUrl}/en`,
        'ar-SA': `${siteUrl}/ar`,
        'x-default': `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/${locale}`,
      siteName: 'HASCO Group',
      title,
      description,
      locale: locale === 'ar' ? 'ar_SA' : 'en_US',
      images: [
        { url: '/images/hero.jpeg', width: 1200, height: 630, alt: 'HASCO Group - Integrated Excellence' },
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Section 1: Hero Section - No padding needed as header is transparent */}
      <SectionTransition
        transitionType="reveal"
        addGradientOverlay={false}
      >
        <div id="home">
          <Hero />
        </div>
      </SectionTransition>

      {/* Section 2: HASCO Snapshot */}
      <SectionTransition
        transitionType="slide-up"
        delay={200}
        addDivider={false}
      >
        <div id="hasco-snapshot">
          <About />
        </div>
      </SectionTransition>

      {/* Section 2.5: CEO's Note */}
      <SectionTransition
        transitionType="fade-in"
        delay={250}
        addDivider={false}
      >
        <div id="ceo-section">
          <CEO />
        </div>
      </SectionTransition>

      {/* Section 3: Sectors Overview */}
      <SectionTransition
        transitionType="fade-in"
        delay={300}
        addDivider={false}
      >
        <div id="sectors-overview">
          <Sectors />
        </div>
      </SectionTransition>

      {/* Section 4.5: Interactive Map */}
      <SectionTransition
        transitionType="fade-in"
        delay={425}
        addDivider={false}
      >
        <div id="interactive-map">
          <InteractiveMap />
        </div>
      </SectionTransition>

      {/* Section 6: Stats Section */}
      <SectionTransition
        transitionType="fade-in"
        delay={500}
        addDivider={false}
      >
        <div id="stats-section">
          <Stats />
        </div>
      </SectionTransition>

      {/* Section 7: Trusted Partnerships (after stats) */}
      <SectionTransition
        transitionType="slide-up"
        delay={550}
        addDivider={false}
      >
        <div id="clients">
          <Clients />
        </div>
      </SectionTransition>

      {/* Section 8: Closing CTA */}
      <SectionTransition
        transitionType="fade-in"
        delay={600}
        addDivider={false}
      >
        <div id="closing-cta">
          <CTA />
        </div>
      </SectionTransition>

      {/* Footer */}
      <Footer />
    </main>
  )
}
