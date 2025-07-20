import { useCallback, useRef, type FC } from 'react';
import { messages } from '../../messages/messages';
import { useDispatch, useSelector } from 'react-redux';
import { setStoreTimer, setUsername } from '../../store/gameSlice';
import type { RootState } from '../../store/store';
import { Box } from '../common/Box';
import { Modal } from '../common/Modal';

interface SettingsModalProps {
  onClick?: () => void;
}

export const SettingsModal: FC<SettingsModalProps> = ({ onClick }) => {
  const dispatch = useDispatch();
  const { timer, username } = useSelector((state: RootState) => ({
    timer: state.game.timer,
    username: state.game.username,
  }));

  const countdownRef = useRef<HTMLInputElement>(null);
  const pairsRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const countdownValue = Number(countdownRef.current?.value) || 60;
    const usernameValue = String(usernameRef.current?.value) || 'Player';
    dispatch(setStoreTimer(countdownValue));
    dispatch(setUsername(usernameValue));
    onClick?.();
  }, [dispatch, onClick]);

  return (
    <Modal type="settings" onClick={onClick}>
      <Box className="px-7 flex-col font-sans font-thin">
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-medium text-lg">{messages.modal.settings.pairs}</p>
          <input
            role="textbox"
            ref={pairsRef}
            tabIndex={0}
            defaultValue={12}
            className="px-4 py-2 border-2 border-border max-w-13 rounded-lg"
          />
        </Box>
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-medium text-lg">{messages.modal.settings.countdown}</p>
          <input
            role="textbox"
            tabIndex={0}
            ref={countdownRef}
            defaultValue={timer}
            className="px-4 py-2 border-2 border-border max-w-13 rounded-lg"
          />
        </Box>
        <Box className="flex-row justify-between text-center w-full mb-4 mr-4">
          <p className="font-medium text-lg">{messages.modal.settings.username}</p>
          <input
            role="textbox"
            tabIndex={0}
            ref={usernameRef}
            defaultValue={username}
            className="px-4 py-2 border-2 border-border max-w-30 rounded-lg"
          />
        </Box>
      </Box>
      <button
        onClick={handleClick}
        tabIndex={0}
        className="mb-4 py-4 rounded-3xl uppercase cursor-pointer bg-secondary-text text-white w-[90%] hover:bg-secondary-text/80 transition-all duration-300"
      >
        {messages.modal.settings.save}
      </button>
    </Modal>
  );
};
