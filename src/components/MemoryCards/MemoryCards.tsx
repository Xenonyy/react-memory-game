import { Box } from '../common/Box';

import type { FC } from 'react';
import { Card } from './Card';

export const MemoryCards: FC = () => {
  const symbols = ['🦊', '🐶', '🐱', '🐹', '🐰', '🐵', '🐻', '🐼', '🐨', '🐯', '🦁', '🐷'];

  const cards = symbols.flatMap((symbol) => [
    { id: `${symbol}-1`, symbol },
    { id: `${symbol}-2`, symbol },
  ]);

  const shuffledCards = cards.sort(() => Math.random() - 0.5);

  return (
    <Box className="w-full h-full bg-primary-bg md:rounded-3xl md:px-16 md:py-20 justify-center select-none">
      <Box className="grid grid-cols-8 gap-5 2xl:grid-cols-12">
        {shuffledCards.map((card) => {
          console.table('Card' + card.id + ': ' + card.symbol);
          return <Card key={card.id} symbol={card.symbol} />;
        })}
      </Box>
    </Box>
  );
};
