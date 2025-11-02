'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PreferencesPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const [gender, setGender] = useState('');
  const [style, setStyle] = useState('');
  const [meaning, setMeaning] = useState('');

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

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between p-4 px-6">
        <Link href="/start" className="flex items-center justify-center w-10 h-10">
          <span className="material-symbols-outlined text-slate-900 dark:text-white">arrow_back</span>
        </Link>
        {/* LanguageSwitcher placeholder */}
      </header>

      {/* Main content */}
      <div className="relative z-20 flex w-full max-w-md mx-auto flex-1 flex-col justify-between px-6 pt-2 pb-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-lg"></div>
            <div className="absolute w-full h-1/2 top-0 left-0 bg-tae-red rounded-t-full overflow-hidden"></div>
            <div className="absolute w-full h-1/2 bottom-0 left-0 bg-tae-blue rounded-b-full overflow-hidden"></div>
            <div className="absolute w-1/2 h-1/2 top-1/4 left-0 bg-tae-blue rounded-full"></div>
            <div className="absolute w-1/2 h-1/2 top-1/4 right-0 bg-tae-red rounded-full"></div>
          </div>
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">Tell us a little<br/>more about you</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">We'll find the perfect name for you.</p>
        </div>

        <div className="flex flex-col w-full gap-6 mt-8">
          <div className="flex flex-col gap-4">
            {/* Gender selection */}
            <fieldset>
              <legend className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">What is your gender?</legend>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setGender('Male')} className={`flex items-center justify-center rounded-xl h-12 px-4 backdrop-blur-sm text-base font-medium ring-1 ring-inset ${gender === 'Male' ? 'bg-white/80 dark:bg-slate-800/80 ring-tae-blue ring-2' : 'bg-white/50 dark:bg-slate-800/50 ring-slate-300 dark:ring-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80'}`}>Male</button>
                <button onClick={() => setGender('Female')} className={`flex items-center justify-center rounded-xl h-12 px-4 backdrop-blur-sm text-base font-medium ring-1 ring-inset ${gender === 'Female' ? 'bg-white/80 dark:bg-slate-800/80 ring-tae-blue ring-2' : 'bg-white/50 dark:bg-slate-800/50 ring-slate-300 dark:ring-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80'}`}>Female</button>
              </div>
            </fieldset>

            {/* Style selection */}
            <fieldset>
              <legend className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">Choose your preferred name style.</legend>
              <div className="grid grid-cols-2 gap-3">
                {['Modern', 'Traditional', 'Gentle', 'Strong'].map((s) => (
                  <button key={s} onClick={() => setStyle(s)} className={`flex items-center justify-center rounded-xl h-12 px-4 backdrop-blur-sm text-base font-medium ring-1 ring-inset ${style === s ? 'bg-white/80 dark:bg-slate-800/80 ring-tae-blue ring-2' : 'bg-white/50 dark:bg-slate-800/50 ring-slate-300 dark:ring-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80'}`}>{s}</button>
                ))}
              </div>
            </fieldset>

            {/* Meaning input */}
            <label className="flex w-full flex-col">
              <p className="text-slate-800 dark:text-slate-200 text-base font-medium leading-normal pb-2">Any preferred meanings? (Optional)</p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-slate-900 dark:text-white focus:outline-0 focus:ring-2 ring-inset focus:ring-tae-blue dark:focus:ring-tae-blue border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm h-14 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-[15px] text-base font-normal leading-normal shadow-sm"
                placeholder="e.g. wisdom, courage, love"
                value={meaning}
                onChange={(e) => setMeaning(e.target.value)}
              />
            </label>
          </div>
          <Link href={{ pathname: '/results', query: { name, gender, style, meaning } }} className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-gradient-to-r from-tae-blue to-tae-red text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-tae-blue/20 dark:shadow-tae-red/20 hover:opacity-90 transition-opacity duration-200 mt-2">
            <span className="truncate">Get Name Recommendations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
