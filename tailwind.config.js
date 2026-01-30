/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#004A81', // HASCO Primary Blue
        'brand-secondary': '#66AADD', // HASCO Light Blue
        'brand-dark': '#0f172a',
        'brand-light': '#f8fafc',
      },
      fontFamily: {
        // Montserrat - Primary typeface for headings, navigation, buttons, UI
        heading: ['Montserrat', 'sans-serif'],
        // Helvetica - Secondary typeface for body copy and descriptive text
        body: ['Helvetica', 'Arial', 'sans-serif'],
        // Default sans (uses Helvetica for body text)
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Title hierarchy - All use Montserrat-Regular (400)
        'title-xl': ['3rem', { lineHeight: '1.1', fontWeight: '400' }], // 48px - Main hero titles
        'title-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '400' }], // 40px - Section titles
        'title-md': ['2rem', { lineHeight: '1.3', fontWeight: '400' }], // 32px - Subsection titles
        'title-sm': ['1.75rem', { lineHeight: '1.3', fontWeight: '400' }], // 28px - Card titles
        
        // Subtitle hierarchy - All use Helvetica-Regular (400)
        'subtitle-lg': ['1.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 28px - Large subtitles
        'subtitle-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }], // 24px - Medium subtitles
        'subtitle-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }], // 20px - Small subtitles
        
        // Button hierarchy - All use Montserrat-Regular (400)
        'button-lg': ['1rem', { lineHeight: '1.5', fontWeight: '400' }], // 16px - Large buttons
        'button-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px - Medium buttons
        'button-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }], // 12px - Small buttons
        
        // Body hierarchy - All use Helvetica-Regular (400)
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px - Large body text
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px - Regular body text
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px - Small body text
        'body-xs': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }], // 12px - Extra small body text
      },
    },
  },
  plugins: [],
}




