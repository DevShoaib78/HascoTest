/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        sans: ['Montserrat', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
        body: ['Helvetica', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        primary: ['Montserrat', 'Helvetica', 'Arial', 'ui-sans-serif', 'system-ui'],
        secondary: ['Helvetica', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Title hierarchy - Reduced sizes
        'title-xl': ['3rem', { lineHeight: '1.1', fontWeight: '300' }], // 48px - Main hero titles (was 64px)
        'title-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '300' }], // 40px - Section titles (was 48px)
        'title-md': ['2rem', { lineHeight: '1.3', fontWeight: '300' }], // 32px - Subsection titles (was 36px)
        'title-sm': ['1.75rem', { lineHeight: '1.3', fontWeight: '300' }], // 28px - Card titles (was 30px)
        
        // Subtitle hierarchy - Increased sizes
        'subtitle-lg': ['1.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 28px - Large subtitles (was 24px)
        'subtitle-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }], // 24px - Medium subtitles (was 20px)
        'subtitle-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '400' }], // 20px - Small subtitles (was 18px)
        
        // Button hierarchy
        'button-lg': ['1rem', { lineHeight: '1.5', fontWeight: '500' }], // 16px - Large buttons
        'button-md': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }], // 14px - Medium buttons
        'button-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }], // 12px - Small buttons
        
        // Body hierarchy
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px - Large body text
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px - Regular body text
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }], // 14px - Small body text
        'body-xs': ['0.75rem', { lineHeight: '1.6', fontWeight: '400' }], // 12px - Extra small body text
      },
    },
  },
  plugins: [],
}




