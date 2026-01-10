import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hascogroup.com'
  const locales = ['en', 'ar']
  const pages = ['', '/about', '/sectors', '/clients', '/contact', '/careers']

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Generate entries for each locale and page
  locales.forEach(locale => {
    pages.forEach(page => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      })
    })
  })

  return sitemapEntries
}
