export const speak = (text: string) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('Text-to-speech is not supported in this browser.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);

  // Find a Korean voice
  const voices = speechSynthesis.getVoices();
  const koreanVoice = voices.find(voice => voice.lang === 'ko-KR');

  if (koreanVoice) {
    utterance.voice = koreanVoice;
  } else {
    console.warn('Korean voice not found. Using default voice.');
  }

  utterance.lang = 'ko-KR';
  utterance.rate = 0.8;

  speechSynthesis.speak(utterance);
};
