import { useTranslation } from 'react-i18next';
import React from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const languages = ['en', 'vi']; // list of supported languages

  const toggleLanguage = () => {
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  return (
    <div className="language-switcher flex items-center gap-2">
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
      >
        {i18n.language === 'en' ? 'Vietnamese' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
