export interface NameRecommendation {
  hangul: string;
  romanized: string;
  meaning: string;
  relevance: string;
}

export const getRecommendations = (name: string, gender: string, style: string, meaning: string): NameRecommendation[] => {
  // In a real app, this would be a more sophisticated algorithm
  return [
    {
      hangul: '서준',
      romanized: 'Seojun',
      meaning: 'To become an auspicious and outstanding person.',
      relevance: `Like ${name}, it symbolizes dignified and positive leadership.`,
    },
    {
      hangul: '하준',
      romanized: 'Hajun',
      meaning: 'Great and talented like the summer.',
      relevance: `Similar to ${name}'s strong and protective image, it represents embracing one\'s surroundings with a big heart.`,
    },
  ];
};
