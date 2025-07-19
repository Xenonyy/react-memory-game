import type { FC } from 'react';
import { Box } from '../common/Box';
import cardBack from '../../assets/game/card-back.svg';

export const Card: FC = () => {
  return (
    <Box className="w-24 h-36 bg-white rounded-lg p-1">
      <img src={cardBack} alt="Card Back" />
    </Box>
  );
};
