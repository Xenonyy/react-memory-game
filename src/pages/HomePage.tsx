import { Box } from '../components/common/Box';
import { Container } from '../components/common/Container';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import logo from '../assets/logo.svg';
import type { FC } from 'react';

export const HomePage: FC = () => {
  return (
    <DefaultLayout>
      <Container className="bg-white p-20 font-gilroy font-extrabold">
        <Box className="w-full h-full justify-between text-black">
          <img src={logo} alt="Logo" className="w-48 h-48" />

          {/* mock structure */}
          {/* TODO: countdown timer-matches-mistakes component */}
          <Box className="flex-row">
            <p>{90}</p>
            <Box className="flex-col">
              <p>{2} matches</p>
              <p>{3} mistakes</p>
            </Box>
          </Box>
          <Box className="flex-row">
            <p>Settings</p>
            <p>|</p>
            <p>Reset</p>
          </Box>
        </Box>
      </Container>
    </DefaultLayout>
  );
};
