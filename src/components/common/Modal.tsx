import { useCallback, useRef, type FC } from 'react';
import { messages } from '../../messages/messages';
import { Box } from './Box';
import { CloseSVG } from '../svgs/close';
import { useDispatch, useSelector } from 'react-redux';
import { setStoreTimer } from '../../store/gameSlice';
import type { RootState } from '../../store/store';

interface ModalProps {
  onClick?: () => void;
}

export const Modal: FC<ModalProps> = ({ onClick }) => {
  const dispatch = useDispatch();
  const timer = useSelector((state: RootState) => state.game.timer);

  const countdownRef = useRef<HTMLInputElement>(null);
  const pairsRef = useRef<HTMLInputElement>(null);

  const handleClick = useCallback(() => {
    const countdownValue = Number(countdownRef.current?.value) || 60;
    dispatch(setStoreTimer(countdownValue));
    onClick?.();
  }, [dispatch, onClick]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-3xl shadow-lg">
        <Box className="flex-row mb-4 justify-between bg-primary-bg px-5 py-7 rounded-3xl rounded-b-none">
          <h2 className="text-xl pr-4">{messages.modal.settings.title}</h2>
          <CloseSVG onClick={onClick} />
        </Box>
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
        </Box>
        <button
          onClick={handleClick}
          tabIndex={0}
          className="mb-4 py-4 rounded-3xl uppercase cursor-pointer bg-secondary-text text-white w-[90%] hover:bg-secondary-text/80 transition-all duration-300"
        >
          {messages.modal.settings.save}
        </button>
      </div>
    </div>
  );
};
