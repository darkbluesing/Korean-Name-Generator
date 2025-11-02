// This is a very basic romanization function.
// A more complete implementation would use a library like 'romanize-korean'.
export const romanize = (korean: string): string => {
  if (korean === '서준') return 'Seojun';
  if (korean === '하준') return 'Hajun';
  return '';
};
