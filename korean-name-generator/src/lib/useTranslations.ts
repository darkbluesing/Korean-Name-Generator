'use client';

import { useState, useEffect } from 'react';
import en from '../locales/en.json';
import ko from '../locales/ko.json';

const translations = { en, ko };

export const useTranslations = (initialLang: 'en' | 'ko' = 'en') => {
  const [lang, setLang] = useState(initialLang);
  const t = translations[lang];

  return { t, setLang, lang };
};
