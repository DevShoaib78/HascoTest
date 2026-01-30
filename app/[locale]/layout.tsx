import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/src/i18n/request';
import LenisProvider from '@/src/components/providers/LenisProvider';
import SplashScreen from '@/src/components/ui/SplashScreen';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.png"
        />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/images/favicon.png"
        />
        <link
          rel="apple-touch-icon"
          href="/images/favicon.png"
        />
        {/* Preload critical fonts for better performance */}
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Helvetica.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'HASCO Group',
              alternateName: 'HASCO - Integrated Excellence',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com'}/images/hascoblue.png`,
              description: 'HASCO delivers comprehensive integrated solutions across marine, logistics, construction, tourism, and consultancy sectors.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Jeddah',
                addressRegion: 'Al Safa',
                addressCountry: 'SA',
              },
              sameAs: [
                'https://www.linkedin.com/company/hascogroup',
                'https://twitter.com/hascogroup',
                'https://www.facebook.com/hascogroup',
                'https://www.instagram.com/hascogroup',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: ['en', 'ar'],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SplashScreen />
          <LenisProvider>
            {children}
          </LenisProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
