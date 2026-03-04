import { Header, Footer } from '@/src/components/layout'
import { useLocale } from 'next-intl'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

const content = {
  en: {
    title: 'Terms & Conditions',
    lastUpdated: 'Last updated: March 2025',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: 'By accessing or using the HASCO Group website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not access the website.',
      },
      {
        heading: '2. Use of Website',
        body: 'This website is intended for informational purposes about HASCO Group and its services. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. You must not misuse this website by knowingly introducing viruses, trojans, or other malicious material.',
      },
      {
        heading: '3. Intellectual Property',
        body: 'All content on this website — including text, graphics, logos, images, and data — is the property of HASCO Group and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.',
      },
      {
        heading: '4. Information Accuracy',
        body: 'HASCO Group strives to ensure that the information on this website is accurate and up to date. However, we make no warranties or representations, express or implied, as to the accuracy, completeness, or suitability of any information on this site.',
      },
      {
        heading: '5. Third-Party Links',
        body: 'This website may contain links to third-party websites for your convenience. HASCO Group does not endorse or take responsibility for the content, privacy practices, or availability of those external sites.',
      },
      {
        heading: '6. Limitation of Liability',
        body: 'To the fullest extent permitted by law, HASCO Group shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website or its content.',
      },
      {
        heading: '7. Changes to Terms',
        body: 'HASCO Group reserves the right to modify these Terms and Conditions at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website constitutes acceptance of the revised terms.',
      },
      {
        heading: '8. Governing Law',
        body: 'These Terms and Conditions are governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Saudi Arabia.',
      },
      {
        heading: '9. Contact',
        body: 'For questions regarding these Terms and Conditions, please contact us at info@hasco.com.sa or call +966 12 642 5834.',
      },
    ],
  },
  ar: {
    title: 'الشروط والأحكام',
    lastUpdated: 'آخر تحديث: مارس 2025',
    sections: [
      {
        heading: '١. قبول الشروط',
        body: 'بالوصول إلى موقع مجموعة هاسكو أو استخدامه، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فلا يحق لك الوصول إلى الموقع.',
      },
      {
        heading: '٢. استخدام الموقع',
        body: 'هذا الموقع مخصص لأغراض إعلامية حول مجموعة هاسكو وخدماتها. توافق على استخدام هذا الموقع للأغراض المشروعة فقط وبطريقة لا تنتهك حقوق الآخرين.',
      },
      {
        heading: '٣. الملكية الفكرية',
        body: 'جميع المحتويات الموجودة على هذا الموقع — بما في ذلك النصوص والرسومات والشعارات والصور والبيانات — هي ملك لمجموعة هاسكو ومحمية بموجب قوانين حقوق الطبع والنشر المعمول بها.',
      },
      {
        heading: '٤. دقة المعلومات',
        body: 'تسعى مجموعة هاسكو إلى ضمان دقة المعلومات الواردة في هذا الموقع وتحديثها. غير أننا لا نقدم أي ضمانات أو تعهدات، صريحة أو ضمنية، بشأن دقة أو اكتمال أي معلومات.',
      },
      {
        heading: '٥. روابط الطرف الثالث',
        body: 'قد يحتوي هذا الموقع على روابط لمواقع إلكترونية تابعة لجهات خارجية. لا تتحمل مجموعة هاسكو أي مسؤولية عن محتوى تلك المواقع أو ممارسات الخصوصية الخاصة بها.',
      },
      {
        heading: '٦. تحديد المسؤولية',
        body: 'إلى أقصى حد يسمح به القانون، لن تكون مجموعة هاسكو مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية تنشأ عن استخدامك للموقع.',
      },
      {
        heading: '٧. تغييرات الشروط',
        body: 'تحتفظ مجموعة هاسكو بحق تعديل هذه الشروط والأحكام في أي وقت. ستُنشر التغييرات على هذه الصفحة مع تاريخ المراجعة المحدث.',
      },
      {
        heading: '٨. القانون الحاكم',
        body: 'تخضع هذه الشروط والأحكام وتُفسَّر وفقاً لقوانين المملكة العربية السعودية. تخضع أي نزاعات تنشأ للاختصاص القضائي الحصري لمحاكم المملكة العربية السعودية.',
      },
      {
        heading: '٩. التواصل',
        body: 'لأي استفسارات بشأن هذه الشروط والأحكام، يرجى التواصل معنا على info@hasco.com.sa أو الاتصال على +966 12 642 5834.',
      },
    ],
  },
}

export default function TermsPage() {
  const locale = useLocale() as 'en' | 'ar'
  const c = content[locale]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative bg-brand-primary py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading text-white mb-3">{c.title}</h1>
          <p className="text-white/60 font-body text-sm">{c.lastUpdated}</p>
        </div>
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0 80L1440 80L1440 40C1200 70 960 80 720 75C480 70 240 50 0 40Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-10">
            {c.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-heading text-brand-primary mb-3">{section.heading}</h2>
                <p className="text-gray-600 font-body text-base leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
