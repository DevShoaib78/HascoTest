import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import { locales } from '@/src/i18n/request';
import LenisProvider from '@/src/components/providers/LenisProvider';
import SplashScreen from '@/src/components/ui/SplashScreen';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat'
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={montserrat.variable}>
      <body className={montserrat.className}>
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
