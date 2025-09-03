import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import vi from '../locales/vi';

// Lấy tất cả namespace từ locale files
const namespaces = Object.keys(en);

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      vi,
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: namespaces, // Tự động lấy tất cả namespace
    defaultNS: 'login', // Hoặc namespace mặc định bạn muốn
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;