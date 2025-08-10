import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const languages = [
    { code: 'en', name: t('language.english') },
    { code: 'hi', name: t('language.hindi') },
    { code: 'mr', name: t('language.marathi') }
  ];

  return (
    <div className="language-selector" style={{ position: 'relative', display: 'inline-block' }}>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        style={{
          padding: '5px 10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: 'white',
          fontSize: '14px',
          cursor: 'pointer'
        }}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;