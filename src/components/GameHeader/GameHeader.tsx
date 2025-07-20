import { useCallback, useEffect, useState, type FC } from 'react';
import { Box } from '../common/Box';
import { messages } from '../../messages/messages';
import logo from '../../assets/logo.svg';
import settings from '../../assets/game/settings.svg';
import reset from '../../assets/game/reset.svg';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useTimer } from '../../hooks/useTimer';
import { SettingsModal } from './SettingsModal';
import { resetGame, setGameResult, setStoreTimer } from '../../store/gameSlice';

export const GameHeader: FC = () => {
  const {
    matches,
    mistakes,
    timer: storeTimer,
  } = useSelector((state: RootState) => ({
    matches: state.game.matches,
    mistakes: state.game.mistakes,
    timer: state.game.timer,
    timerVersion: state.game.timerVersion,
  }));
  const [timer, setTimer] = useTimer({ countdown: storeTimer });
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSettingsClick = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);

  const handleResetClick = useCallback(() => {
    dispatch(resetGame());
    dispatch(setGameResult('reset'));
  }, []);

  useEffect(() => {
    setTimer(storeTimer);
  }, [storeTimer, setTimer]);

  useEffect(() => {
    dispatch(setStoreTimer(timer > 0 ? timer : 0));
  }, [timer, dispatch]);

  return (
    <Box className="w-full h-full justify-between pb-8 md:flex-row flex-col">
      <img src={logo} alt={messages.game.logo} className="w-52 h-28" />
      <Box className="flex-row justify-around md:justify-between w-full md:w-[55%]">
        <Box className="flex-row pt-4 md:pt-0">
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
        <Box className="flex-row pt-4 md:pt-0">
          <img
            src={settings}
            alt={messages.game.settings}
            className="w-6 h-6 filter brightness-100 hover:brightness-50  cursor-pointer transition-all duration-300"
            onClick={handleSettingsClick}
          />
          {isModalOpen && <SettingsModal onClick={handleSettingsClick} />}
          <p className="border-r-2 border-border w-0 h-10 mx-4" />
          <img
            src={reset}
            alt={messages.game.reset}
            className="w-6 h-6 filter brightness-100 hover:brightness-50  cursor-pointer transition-all duration-300"
            onClick={handleResetClick}
          />
        </Box>
      </Box>
    </Box>
  );
};
