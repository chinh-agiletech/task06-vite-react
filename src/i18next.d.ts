import 'react-i18next';
import en from '../locales/en/login.json';
import vi from '../locales/vi/login.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'login';
    resources: {
      login: typeof en & typeof vi;
    };
  }
}
