import { useTranslation } from 'react-i18next';
import React from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'vi' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className="language-switcher flex items-center gap-2">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
      >
        {i18n.language === 'en' ? 'English' : 'Vietnamese'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
