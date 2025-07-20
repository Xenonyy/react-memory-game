import type { FC } from 'react';
import { Box } from '../common/Box';
import { CardSVG } from '../common/cardSVG';

interface CardProps {
  id: string;
  symbol: string;
  isFlipped: boolean;
  onClick: (id: string) => void;
}

export const Card: FC<CardProps> = ({ id, symbol, isFlipped, onClick }) => {
  return (
    <Box
      id={id}
      className="w-24 h-36 bg-white rounded-lg p-1 hover:cursor-pointer hover:shadow-lg justify-center"
      onClick={() => onClick(id)}
      role="button"
      aria-pressed={isFlipped}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(id);
        }
      }}
    >
      {!isFlipped ? (
        <CardSVG />
      ) : (
        <Box className="w-24 h-32 bg-linear-to-r/decreasing from-gradient-start to-gradient-end rounded-lg m-1 justify-center flex items-center">
          <p className="text-6xl select-none">{symbol}</p>
        </Box>
      )}
    </Box>
  );
};
