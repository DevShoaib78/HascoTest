# HASCO Group Website - Next.js

A modern, responsive website for HASCO Group, a leading integrated solutions provider in marine, logistics, and development sectors. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with red, white, and dark gray color scheme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Tabbed navigation, hover effects, and smooth transitions
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

### Home Page (`/`)
1. **Header**: Navigation with logo, menu items, and contact information
2. **Hero Section**: Sector carousel showcasing HASCO Group's expertise
3. **About Section**: Company overview with story and core services
4. **Services Section**: Comprehensive service offerings
5. **Statistics**: Key performance metrics and achievements
6. **Operation Offices**: Geographic presence and locations
7. **Projects Showcase**: Featured projects and case studies
8. **Why HASCO**: Competitive advantages and value propositions
9. **Clients Section**: Trusted partners and testimonials
10. **Divisions**: Specialized business units and capabilities
11. **Contact Section**: Contact information and inquiry forms

### About Page (`/about`)
1. **Hero Section**: "About HASCO Group" with company overview
2. **Company Overview**: Our story, key statistics, and company image
3. **Core Services**: Four main service areas with detailed descriptions
4. **Mission & Vision**: Company mission and vision statements
5. **Our Divisions**: Dynamic display of business divisions
6. **Call-to-Action**: Contact and service exploration prompts

### Sectors Page (`/sectors`)
1. **Hero Section**: "Our Sectors" with comprehensive solutions overview
2. **Sectors Grid**: Six core business sectors with detailed descriptions and features
3. **Our Impact**: Statistics showcasing achievements (19+ years, 6 sectors, 500+ projects, 100% satisfaction)
4. **Call-to-Action**: "Ready to Work Together?" with project start and learn more options

### Clients Page (`/clients`)
1. **Hero Section**: "Our Clients" with diverse client portfolio overview
2. **Client Sectors**: Dynamic display of clients organized by business divisions
3. **Client Testimonials**: Three featured testimonials with ratings and client information
4. **Client Satisfaction Statistics**: Key metrics (100% retention, 4.9/5 rating, 95% on-time delivery, 200+ happy clients)
5. **Call-to-Action**: "Become Our Partner" with get in touch and explore services options

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page component
│   ├── about/
│   │   └── page.tsx         # About page component
│   ├── sectors/
│   │   └── page.tsx         # Sectors page component
│   ├── clients/
│   │   └── page.tsx         # Clients page component
│   └── not-found.tsx        # 404 error page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── SectorCarousel.tsx   # Hero section carousel
│   ├── AboutHASCOGroup.tsx  # About section component
│   ├── OurServices.tsx      # Services section
│   ├── StatisticsSection.tsx # Statistics display
│   ├── HASCOOperationOffices.tsx # Offices section
│   ├── ProjectsShowcase.tsx # Projects gallery
│   ├── WhyHASCO.tsx         # Value propositions
│   ├── OurClientsSection.tsx # Clients and testimonials
│   ├── OurDivisions.tsx     # Business divisions
│   ├── ContactUsSection.tsx # Contact form
│   ├── ConditionalFooter.tsx # Footer component
│   ├── AdvancedParticleSystem.tsx # Background particles
│   ├── CustomCursor.tsx     # Custom cursor effects
│   └── SectionTransition.tsx # Section animations
├── public/
│   ├── logo.png            # Company logo
│   └── images/             # Image assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Colors
The main brand colors are defined in `tailwind.config.js`:
- `brand-primary`: #004A81 (HASCO Blue)
- `brand-secondary`: #66AADD (Light Blue)
- `brand-accent`: #FFBB5B (Gold)

### Content
Update the content in each component file to match your specific needs.

### Images
Replace placeholder images in the Featured Services section with your own images.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React**: Component-based UI library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).




