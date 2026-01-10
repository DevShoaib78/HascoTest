const withNextIntl = require('next-intl/plugin')(
  './src/i18n/request.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
      {
        protocol: 'https',
        hostname: 'toppng.com',
      },
      {
        protocol: 'https',
        hostname: 'static.thenounproject.com',
      },
      {
        protocol: 'https',
        hostname: 'w7.pngwing.com',
      },
      {
        protocol: 'https',
        hostname: 'e7.pngegg.com',
      },
      {
        protocol: 'https',
        hostname: 'png.pngtree.com',
      },
      {
        protocol: 'https',
        hostname: 'eu-images.contentstack.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hoteliermiddleeast.com',
      },
      {
        protocol: 'https',
        hostname: 'd3q0fpse3wbo5h.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'img.favpng.com',
      },
      {
        protocol: 'https',
        hostname: 'cms.hotelschool.nl',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'icon2.cleanpng.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dhl.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 's44783.pcdn.co',
      },
      {
        protocol: 'https',
        hostname: 'aaft.com',
      },
      {
        protocol: 'https',
        hostname: 'images.seeklogo.com',
      },
    ],
  },
  trailingSlash: false,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
}

module.exports = withNextIntl(nextConfig)
