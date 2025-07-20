import { useState, useEffect, useMemo, type FC } from 'react';
import { Box } from '../common/Box';
import { Card } from './Card';

export const MemoryCards: FC = () => {
  const symbols = ['🦊', '🐶', '🐱', '🐹', '🐰', '🐵', '🐻', '🐼', '🐨', '🐯', '🦁', '🐷'];

  const cards = useMemo(() => {
    const cards = symbols.flatMap((symbol) => [
      { id: `${symbol}-1`, symbol },
      { id: `${symbol}-2`, symbol },
    ]);

    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    return shuffledCards;
  }, []);

  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleCardClick = (id: string) => {
    if (isDisabled || flippedIds.includes(id) || matchedIds.includes(id)) {
      return;
    }

    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      setIsDisabled(true);
      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (!firstCard || !secondCard) return;

      const isMatch = firstCard.symbol === secondCard.symbol;
      if (isMatch) {
        setMatchedIds((prev) => [...prev, firstId, secondId]);
      }

      setTimeout(() => {
        setFlippedIds([]);
        setIsDisabled(false);
      }, 500);
    }
  };

  useEffect(() => {
    console.table({
      flippedIds,
      matchedIds,
      isDisabled,
    });
  }, [flippedIds, matchedIds, isDisabled]);

  return (
    <Box className="w-full h-full bg-primary-bg md:rounded-3xl md:px-16 md:py-20 justify-center select-none">
      <Box className="grid grid-cols-8 gap-5 2xl:grid-cols-12">
        {cards.map(({ id, symbol }) => (
          <Card
            key={id}
            id={id}
            symbol={symbol}
            isFlipped={flippedIds.includes(id) || matchedIds.includes(id)}
            onClick={handleCardClick}
          />
        ))}
      </Box>
    </Box>
  );
};
