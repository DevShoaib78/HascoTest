import { Header, Footer } from '@/src/components/layout'
import { useLocale } from 'next-intl'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

const content = {
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: March 2025',
    intro: 'HASCO Group ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or submit inquiries through our contact forms.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: 'We may collect personal information you voluntarily provide, such as your name, email address, and phone number when you submit a contact or partnership enquiry form. We also collect non-personal data such as browser type, device information, and pages visited through standard web analytics.',
      },
      {
        heading: '2. How We Use Your Information',
        body: 'The information you provide is used solely to respond to your enquiry, facilitate business discussions, or send relevant updates about HASCO Group — where you have consented. We do not use your personal data for automated decision-making or profiling.',
      },
      {
        heading: '3. Information Sharing',
        body: 'We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website or conducting our business, subject to confidentiality obligations. We may also disclose information where required by law.',
      },
      {
        heading: '4. Data Retention',
        body: 'We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected or as required by applicable law. When no longer needed, your data is securely deleted or anonymised.',
      },
      {
        heading: '5. Data Security',
        body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.',
      },
      {
        heading: '6. Cookies',
        body: 'Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how visitors use our site. You can choose to disable cookies through your browser settings, though this may affect website functionality.',
      },
      {
        heading: '7. Your Rights',
        body: 'You have the right to access, correct, or request deletion of your personal data that we hold. To exercise any of these rights, please contact us using the details below. We will respond within a reasonable timeframe in accordance with applicable law.',
      },
      {
        heading: '8. Changes to This Policy',
        body: 'HASCO Group reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised date. We encourage you to review this policy periodically.',
      },
      {
        heading: '9. Contact Us',
        body: 'If you have any questions about this Privacy Policy or how we handle your data, please contact us at info@hasco.com.sa or by calling +966 12 642 5834.',
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    lastUpdated: 'آخر تحديث: مارس 2025',
    intro: 'تلتزم مجموعة هاسكو بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك واستخدامها وحمايتها عند زيارة موقعنا الإلكتروني أو تقديم استفسارات عبر نماذج التواصل.',
    sections: [
      {
        heading: '١. المعلومات التي نجمعها',
        body: 'قد نجمع المعلومات الشخصية التي تقدمها طوعاً، مثل اسمك وعنوان بريدك الإلكتروني ورقم هاتفك عند تعبئة نموذج الاستفسار. كما نجمع بيانات غير شخصية مثل نوع المتصفح ومعلومات الجهاز والصفحات المُزارة.',
      },
      {
        heading: '٢. كيفية استخدام معلوماتك',
        body: 'تُستخدم المعلومات التي تقدمها فقط للرد على استفسارك أو تسهيل النقاشات التجارية أو إرسال تحديثات ذات صلة بمجموعة هاسكو عند موافقتك. لا نستخدم بياناتك الشخصية لأي قرارات آلية.',
      },
      {
        heading: '٣. مشاركة المعلومات',
        body: 'لا نبيع معلوماتك الشخصية أو نتاجر بها أو نؤجرها لأطراف ثالثة. قد نشارك البيانات مع مزودي الخدمات الموثوقين الذين يساعدون في تشغيل موقعنا، وذلك وفق التزامات السرية.',
      },
      {
        heading: '٤. الاحتفاظ بالبيانات',
        body: 'نحتفظ ببياناتك الشخصية فقط للمدة اللازمة لتحقيق الغرض الذي جُمعت من أجله أو كما يقتضيه القانون. عند انتهاء الحاجة إليها، يُتلف بشكل آمن أو يُجهَّل.',
      },
      {
        heading: '٥. أمان البيانات',
        body: 'نطبق تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو الإتلاف.',
      },
      {
        heading: '٦. ملفات تعريف الارتباط',
        body: 'قد يستخدم موقعنا ملفات تعريف الارتباط لتحسين تجربة تصفحك. يمكنك إلغاء تفعيلها من خلال إعدادات متصفحك، وإن كان ذلك قد يؤثر على بعض وظائف الموقع.',
      },
      {
        heading: '٧. حقوقك',
        body: 'يحق لك الوصول إلى بياناتك الشخصية التي نحتفظ بها أو تصحيحها أو طلب حذفها. للاستفادة من أي من هذه الحقوق، يرجى التواصل معنا.',
      },
      {
        heading: '٨. التغييرات على هذه السياسة',
        body: 'تحتفظ مجموعة هاسكو بحق تحديث سياسة الخصوصية هذه في أي وقت. ستُنشر التغييرات على هذه الصفحة مع تاريخ المراجعة المحدث.',
      },
      {
        heading: '٩. اتصل بنا',
        body: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا على info@hasco.com.sa أو الاتصال على +966 12 642 5834.',
      },
    ],
  },
}

export default function PrivacyPage() {
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
          <p className="text-gray-600 font-body text-base leading-relaxed mb-10 pb-10 border-b border-gray-200">{c.intro}</p>
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
