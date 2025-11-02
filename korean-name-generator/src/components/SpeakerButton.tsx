'use client';

import { speak } from '../lib/tts';

export default function SpeakerButton({ text }: { text: string }) {
  return (
    <button
      onClick={() => speak(text)}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-200/50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
    >
      <span className="material-symbols-outlined text-xl">volume_up</span>
    </button>
  );
}
