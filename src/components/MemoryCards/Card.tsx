import type { FC } from 'react';
import { Box } from '../common/Box';
import { CardSVG } from '../common/cardSVG';

export const Card: FC = () => {
  return (
    <Box className="w-24 h-36 bg-white rounded-lg p-1 hover:cursor-pointer hover:shadow-lg hover:">
      <CardSVG />
    </Box>
  );
};
