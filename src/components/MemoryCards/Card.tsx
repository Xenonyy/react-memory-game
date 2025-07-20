import type { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from '../common/Box';
import { CardSVG } from '../svgs/card';

interface CardProps {
  id: string;
  symbol: string;
  isFlipped: boolean;
  onClick: (id: string) => void;
}

export const Card: FC<CardProps> = ({ id, symbol, isFlipped, onClick }) => {
  const variants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1 },
    exit: { rotateY: -90, opacity: 0 },
  };

  return (
    <Box
      id={id}
      className="relative w-24 h-36 rounded-lg cursor-pointer hover:shadow-lg justify-center [perspective:1000px]"
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
      <AnimatePresence initial={false}>
        {!isFlipped ? (
          <motion.div
            key="front"
            className="absolute inset-0 backface-hidden transform-3d flex items-center justify-center bg-white rounded-lg p-1 shadow-lg"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <CardSVG />
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute backface-hidden transform-3d inset-0 flex items-center justify-center bg-linear-to-r/decreasing from-gradient-start to-gradient-end rounded-lg shadow-lg"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <p className="text-6xl select-none">{symbol}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};
