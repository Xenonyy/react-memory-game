import { useCallback, useRef, type FC } from 'react';
import { messages } from '../../messages/messages';
import { useDispatch, useSelector } from 'react-redux';
import { setDifficulty, setPairAmount, setStoreTimer, setTimersetting, setUsername } from '../../store/gameSlice';
import type { RootState } from '../../store/store';
import { Box } from '../common/Box';
import { Modal } from '../common/Modal';

interface SettingsModalProps {
  onClick?: () => void;
}

export const SettingsModal: FC<SettingsModalProps> = ({ onClick }) => {
  const dispatch = useDispatch();
  const { timer, username, timerSetting, pairAmount, difficulty } = useSelector((state: RootState) => ({
    timer: state.game.timer,
    username: state.game.username,
    timerSetting: state.game.timerSetting,
    pairAmount: state.game.pairAmount,
    difficulty: state.game.difficulty,
  }));

  const countdownRef = useRef<HTMLInputElement>(null);
  const pairsRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const difficultyRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const countdownValue = Number(countdownRef.current?.value) || timer;
    const pairsValue = Number(pairsRef.current?.value) || pairAmount;
    const usernameValue = String(usernameRef.current?.value) || username;
    const difficultyValue = Number(difficultyRef.current?.value) || difficulty;

    dispatch(setStoreTimer(countdownValue));
    dispatch(setTimersetting(countdownValue));
    dispatch(setUsername(usernameValue));
    dispatch(setPairAmount(pairsValue));
    dispatch(setDifficulty(difficultyValue));
    onClick?.();
  }, [dispatch, onClick]);

  const translations = messages.modal.settings;

  return (
    <Modal type="settings" onClick={onClick}>
      <Box className="flex-col font-gilroy font-thin">
        {/* potential TODO: could refactor each section into a SettingsItem and move everything to a Settings folder */}
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-sans font-medium text-lg">{translations.pairs}</p>
          <input
            role="textbox"
            ref={pairsRef}
            tabIndex={0}
            aria-label={translations.pairs}
            defaultValue={pairAmount}
            className="text-center py-2 border-2 border-border max-w-13 rounded-lg"
          />
        </Box>
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-sans font-medium text-lg">{translations.difficulty}</p>
          <input
            role="textbox"
            tabIndex={0}
            ref={difficultyRef}
            aria-label={translations.difficulty}
            defaultValue={difficulty}
            className="text-center py-2 border-2 border-border max-w-13 rounded-lg"
          />
        </Box>
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-sans font-medium text-lg">{translations.countdown}</p>
          <input
            role="textbox"
            tabIndex={0}
            ref={countdownRef}
            aria-label={translations.countdown}
            defaultValue={timerSetting}
            className="text-center py-2 border-2 border-border max-w-13 rounded-lg"
          />
        </Box>
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-sans font-medium text-lg">{translations.username}</p>
          <input
            role="textbox"
            tabIndex={0}
            ref={usernameRef}
            aria-label={translations.username}
            defaultValue={username}
            className="text-center py-2 border-2 border-border max-w-30 rounded-lg"
          />
        </Box>
      </Box>
      <button
        onClick={handleClick}
        tabIndex={0}
        aria-label={translations.save}
        className="mb-4 py-4 rounded-3xl uppercase cursor-pointer bg-secondary-text text-white w-[90%] hover:bg-secondary-text/80 transition-all duration-300"
      >
        {translations.save}
      </button>
    </Modal>
  );
};
