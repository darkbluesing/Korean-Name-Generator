'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import NameCard from '@/components/NameCard';
import { getRecommendations } from '@/lib/names/recommender';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'User';
  const gender = searchParams.get('gender') || '';
  const style = searchParams.get('style') || '';
  const meaning = searchParams.get('meaning') || '';

  const recommendations = getRecommendations(name, gender, style, meaning);

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
      <div className="relative z-20 flex w-full max-w-md mx-auto flex-1 flex-col justify-start px-6 pt-12 pb-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-slate-900 dark:text-white tracking-tight text-3xl sm:text-4xl font-bold leading-tight">Recommended Names<br/>for {name}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pt-3">Choose a name you like and share it.</p>
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {recommendations.map((rec, index) => (
            <NameCard key={index} recommendation={rec} isTop={index === 0} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href={{ pathname: '/preferences', query: { name, gender, style, meaning } }} className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
            <span className="material-symbols-outlined">refresh</span>
            <span>Get New Recommendations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
