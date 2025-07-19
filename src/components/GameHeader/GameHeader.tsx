import { useState, type FC } from 'react';
import { Box } from '../common/Box';
import { messages } from '../../messages/messages';
import logo from '../../assets/logo.svg';
import settings from '../../assets/game/settings.svg';
import reset from '../../assets/game/reset.svg';

export const GameHeader: FC = () => {
  const [matches, setMatches] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [timer, setTimer] = useState(90);

  return (
    <Box className="w-full h-full justify-between pb-8">
      <img src={logo} alt={messages.game.logo} className="w-52 h-28" />
      <Box className="flex-row">
        <p className="text-secondary-text text-6xl border-r-2 border-border pr-4">{timer}</p>
        <Box className="flex-col">
          <p className="border-b-2 border-border pb-2 pl-4">
            {matches} {messages.game.matches}
          </p>
          <p className="pt-2 pl-4">
            {mistakes} {messages.game.mistakes}
          </p>
        </Box>
      </Box>
      <Box className="flex-row">
        <img src={settings} alt={messages.game.settings} className="w-6 h-6" />
        <p className="border-r-2 border-border w-0 h-10 mx-4" />
        <img src={reset} alt={messages.game.reset} className="w-6 h-6" />
      </Box>
    </Box>
  );
};
