const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
    localeDetection: false,
  },
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
