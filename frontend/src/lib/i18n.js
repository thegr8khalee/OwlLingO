import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';  // Optional: for fetching translations from a server
import LanguageDetector from 'i18next-browser-languagedetector';  // Optional: auto-detect user language

import enTranslation from '../locale/en/translation.json';  // Importing translation file
import frTranslation from '../locale/fr/translation.json';
import zh_CNTranslation from '../locale/zh-CN/translation.json';
import hi_INTranslation from '../locale/hi-IN/translation.json';
import esTranslation from '../locale/es/translation.json';
import arTranslation from '../locale/ar/translation.json';
import bn_BDTranslation from '../locale/bn-BD/translation.json';
import ruTranslation from '../locale/ru/translation.json';
import urTranslation from '../locale/ur/translation.json';
import ptTranslation from '../locale/pt/translation.json';

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
      zh_CN: {
        translation: zh_CNTranslation,
      },
      hi_IN: {
        translation: hi_INTranslation,
      },
      es: {
        translation: esTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      bn_BD: {
        translation: bn_BDTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      ur: {
        translation: urTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
    },
  });

export default i18n;
