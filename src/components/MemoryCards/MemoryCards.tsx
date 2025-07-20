import { useState, useEffect, useMemo, type FC } from 'react';
import { motion } from 'framer-motion';
import { Box } from '../common/Box';
import { Card } from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { incrementMatches, incrementMistakes } from '../../store/gameSlice';
import type { RootState } from '../../store/store';

export const MemoryCards: FC = () => {
  const dispatch = useDispatch();

  const { timer, pairAmount, mistakes, difficulty } = useSelector((state: RootState) => ({
    timer: state.game.timer,
    pairAmount: state.game.pairAmount,
    mistakes: state.game.mistakes,
    difficulty: state.game.difficulty,
  }));

  const allSymbols = useMemo(
    () => [
      '🦊',
      '🐶',
      '🐱',
      '🐹',
      '🐰',
      '🐵',
      '🐻',
      '🐼',
      '🐨',
      '🐯',
      '🦁',
      '🐷',
      '🐸',
      '🐙',
      '🦋',
      '🐠',
      '🫎',
      '🫏',
      '🦆',
      '🦬',
      '🐃',
      '🦈',
      '🦑',
      '🦌',
      '🐐',
    ],
    []
  );

  const cards = useMemo(() => {
    const selected = allSymbols.sort(() => Math.random() - 0.5).slice(0, pairAmount);
    const cards = selected.flatMap((symbol) => [
      { id: `${symbol}-1`, symbol },
      { id: `${symbol}-2`, symbol },
    ]);

    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    return shuffledCards;
  }, [allSymbols, pairAmount]);

  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleCardClick = (id: string) => {
    if (isDisabled || flippedIds.includes(id) || matchedIds.includes(id) || timer === 0 || mistakes >= difficulty) {
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
        dispatch(incrementMatches());
      } else {
        dispatch(incrementMistakes());
      }

      setTimeout(() => {
        setFlippedIds([]);
        setIsDisabled(false);
      }, 500);
    }
  };

  useEffect(() => {
    console.table({ flippedIds, matchedIds, isDisabled, pairAmount });
  }, [flippedIds, matchedIds, isDisabled, pairAmount]);

  return (
    <Box className="@container w-full h-full bg-primary-bg rounded-lg md:rounded-3xl px-2 py-6 md:px-16 md:py-20 justify-center select-none">
      <Box className="grid grid-cols-2 @md:grid-cols-3 @2xl:grid-cols-4 @4xl:grid-cols-6 @5xl:grid-cols-8 gap-5 2xl:grid-cols-12">
        {cards.map(({ id, symbol }, index) => (
          <motion.div
            key={id}
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.3, delay: index * 0.03 }}
          >
            <Card
              id={id}
              symbol={symbol}
              isFlipped={flippedIds.includes(id) || matchedIds.includes(id)}
              onClick={handleCardClick}
            />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};
