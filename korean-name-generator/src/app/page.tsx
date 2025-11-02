'use client';

import Link from 'next/link';
import { useTranslations } from '@/lib/useTranslations';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function LandingPage() {
  const { t, lang, setLang } = useTranslations();

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -left-[30%] w-[80%] h-[80%] bg-tae-red/50 dark:bg-tae-red/40 rounded-full blur-3xl animate-[spin_20s_linear_infinite_reverse]"></div>
        <div className="absolute -bottom-[20%] -right-[30%] w-[80%] h-[80%] bg-tae-blue/50 dark:bg-tae-blue/40 rounded-full blur-3xl animate-[spin_20s_linear_infinite]"></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] aspect-square z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-tae-blue/10 dark:bg-tae-blue/20 rounded-b-full"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tae-red/10 dark:bg-tae-red/20 rounded-b-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-20 flex w-full max-w-md mx-auto flex-1 flex-col items-center justify-between px-6 pt-12 pb-8 text-center">
        <div className="flex items-center justify-end w-full">
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-lg"></div>
            <div className="absolute w-full h-1/2 top-0 left-0 bg-tae-red rounded-t-full overflow-hidden"></div>
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-tae-blue rounded-b-full overflow-hidden"></div>
            <div className="absolute w-1/2 h-1/2 top-1/4 left-0 bg-tae-blue rounded-full"></div>
            <div className="absolute w-1/2 h-1/2 top-1/4 right-0 bg-tae-red rounded-full"></div>
          </div>
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight" dangerouslySetInnerHTML={{ __html: t.landing.title }}></h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">{t.landing.description}</p>
        </div>

        <div className="w-full pt-10">
          <Link href="/start" className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-tae-blue to-tae-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-tae-blue/20 dark:shadow-tae-red/20 hover:opacity-90 transition-opacity duration-200">
            <span className="truncate">{t.landing.cta}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
