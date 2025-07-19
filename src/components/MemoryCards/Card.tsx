import { useState, type FC } from 'react';
import { Box } from '../common/Box';
import { CardSVG } from '../common/cardSVG';

interface CardProps {
  symbol: string;
}
export const Card: FC<CardProps> = ({ symbol }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <Box
      className="w-24 h-36 bg-white rounded-lg p-1 hover:cursor-pointer hover:shadow-lg justify-center"
      onClick={handleClick}
    >
      {!clicked ? (
        <CardSVG />
      ) : (
        <Box className="w-24 h-32 bg-linear-to-r/decreasing from-gradient-start to-gradient-end rounded-lg m-1 hover:cursor-pointer justify-center">
          <p className="text-6xl">{symbol}</p>
        </Box>
      )}
    </Box>
  );
};
