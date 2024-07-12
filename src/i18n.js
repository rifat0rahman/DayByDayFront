// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    welcome: 'Welcome',
    // Add other translations
  },
  de: {
    welcome: 'Willkommen',
    // Add other translations
  },
};

const i18n = createI18n({
  locale: 'en', // set default locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;

