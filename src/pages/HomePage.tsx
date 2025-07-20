import { Container } from '../components/common/Container';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import type { FC } from 'react';
import { GameHeader } from '../components/GameHeader/GameHeader';
import { MemoryCards } from '../components/MemoryCards/MemoryCards';
import { ResultsModal } from '../components/Results/ResultsModal';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const HomePage: FC = () => {
  const gameResetVersion = useSelector((state: RootState) => state.game.gameResetVersion);

  return (
    <DefaultLayout>
      <Container className="bg-white p-20 font-gilroy font-extrabold text-primary-text">
        <GameHeader />
        <MemoryCards key={gameResetVersion} />
        <ResultsModal />
      </Container>
    </DefaultLayout>
  );
};
