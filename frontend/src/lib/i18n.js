import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';  // Optional: for fetching translations from a server
import LanguageDetector from 'i18next-browser-languagedetector';  // Optional: auto-detect user language

import enTranslation from '../locale/en/translation.json';  // Importing translation file
import frTranslation from '../locale/fr/translation.json';

i18n
  .use(Backend) // Optional: for loading translations from the server
  .use(LanguageDetector) // Optional: auto-detect the user's language
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      en: {
        translation: enTranslation,
      },
      fr: {
        translation: frTranslation,
      },
    },
  });

export default i18n;
