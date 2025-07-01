const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeDetection: true,
    localePath: path.resolve('./public/locales'),
  },
  debug: process.env.NODE_ENV === 'development',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: { 
    useSuspense: false,
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span'],
  },
  ns: ['common', 'solutions', 'approach', 'about', 'process'],
  defaultNS: 'common',
  fallbackLng: 'en',
  load: 'currentOnly',
  interpolation: {
    escapeValue: false,
  },
  serializeConfig: false,
  use: [],
}
