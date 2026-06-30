import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: 'es', // default language
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  detection: {
    // no external detector needed for now; we control via UI
  },
});

export default i18n;
