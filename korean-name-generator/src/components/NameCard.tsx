'use client';

import { useState, useEffect } from 'react';
import SpeakerButton from './SpeakerButton';

export default function NameCard({ recommendation, isTop }: { recommendation: any, isTop: boolean }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem(`liked_${recommendation.hangul}`);
    if (storedLiked) {
      setLiked(JSON.parse(storedLiked));
    }
  }, [recommendation.hangul]);

  const toggleLike = () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    localStorage.setItem(`liked_${recommendation.hangul}`, JSON.stringify(newLikedState));
  };

  return (
    <div className="relative w-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg p-5 flex flex-col gap-4 border border-slate-300/50 dark:border-slate-700/50">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{isTop ? 'Top' : 'Second'} Recommendation</p>
          <p className="text-2xl font-bold text-slate-900 dark:text-white font-korean tracking-wide">{recommendation.hangul} ({recommendation.romanized})</p>
        </div>
        <div className="flex items-center gap-2">
          <SpeakerButton text={recommendation.hangul} />
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
          <button onClick={toggleLike} className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${liked ? 'bg-tae-red/10 text-tae-red hover:bg-tae-red/20' : 'bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
            <span className={`material-symbols-outlined text-xl ${liked ? 'filled' : ''}`}>{liked ? 'favorite' : 'favorite_border'}</span>
          </button>
        </div>
      </div>
      <div className="w-full h-px bg-slate-300/50 dark:bg-slate-700/50"></div>
      <div>
        <p className="text-base text-slate-800 dark:text-slate-200"><span className="font-bold text-tae-blue">Meaning:</span> {recommendation.meaning}</p>
        <p className="text-base text-slate-600 dark:text-slate-400 mt-1"><span className="font-bold text-slate-700 dark:text-slate-300">Relevance:</span> {recommendation.relevance}</p>
      </div>
    </div>
  );
};
