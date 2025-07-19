import { Box } from '../common/Box';

import type { FC } from 'react';
import { Card } from './Card';

export const MemoryCards: FC = () => {
  return (
    <Box className="w-full h-full bg-primary-bg md:rounded-3xl md:px-16 md:py-20 justify-center">
      <Box className="grid grid-cols-8 gap-5 2xl:grid-cols-12">
        {/* Default number of cards is 24, refactor later */}
        {Array.from({ length: 24 }, (_, index) => (
          <Card key={index} />
        ))}
      </Box>
    </Box>
  );
};
