/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

module.exports = nextConfig;
