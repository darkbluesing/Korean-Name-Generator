'use client';

export default function LanguageSwitcher({ lang, setLang }: { lang: 'en' | 'ko', setLang: (lang: 'en' | 'ko') => void }) {
  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ko' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-3 py-1.5 ring-1 ring-inset ring-slate-300 dark:ring-slate-700"
    >
      <span className="material-symbols-outlined text-base text-slate-700 dark:text-slate-300">language</span>
      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{lang === 'en' ? 'English' : '한국어'}</span>
      <span className="material-symbols-outlined text-base text-slate-700 dark:text-slate-300">expand_more</span>
    </button>
  );
}
