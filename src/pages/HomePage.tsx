import { Box } from '../components/common/Box';
import { Container } from '../components/common/Container';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import type { FC } from 'react';
import { GameHeader } from '../components/GameHeader/GameHeader';

export const HomePage: FC = () => {
  return (
    <DefaultLayout>
      <Container className="bg-white p-20 font-gilroy font-extrabold text-primary-text">
        <GameHeader />
        {/* TODO: cards component */}
        <Box className="w-full h-full justify-between bg-primary-bg md:rounded-3xl md:px-16 md:py-20">
          {/* TODO: map card component */}
          <p>cards</p>
        </Box>
      </Container>
    </DefaultLayout>
  );
};
