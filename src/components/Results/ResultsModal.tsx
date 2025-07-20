import { useCallback, useEffect, useState, type FC } from 'react';
import { messages } from '../../messages/messages';
import { Box } from '../common/Box';
import { Modal } from '../common/Modal';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { ModalTypes } from '../../types/modalTypes';
import { resetGame } from '../../store/gameSlice';
import clsx from 'clsx';

export const ResultsModal: FC = () => {
  const { mistakes, matches, timer, pairAmount } = useSelector((state: RootState) => ({
    mistakes: state.game.mistakes,
    matches: state.game.matches,
    timer: state.game.timer,
    pairAmount: state.game.pairAmount,
  }));
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsModalOpen((prev) => !prev);
  }, []);
  const handleClick = useCallback(() => {
    setIsModalOpen((prev) => !prev);
    dispatch(resetGame());
  }, []);

  const result: ModalTypes | '' =
    mistakes >= pairAmount / 2 + 1 ? 'defeat' : matches >= pairAmount ? 'victory' : timer <= 0 ? 'timeup' : '';

  useEffect(() => {
    result !== '' && setIsModalOpen(true);
  }, [result]);

  return (
    isModalOpen &&
    result !== '' && (
      <Modal type={result} onClick={handleClose}>
        <Box className="font-light">
          <p>{messages.modal[result].description}</p>
        </Box>
        <button
          onClick={handleClick}
          tabIndex={0}
          className={clsx(
            'm-4 py-4 rounded-3xl uppercase cursor-pointer text-white w-[90%] transition-all duration-300',
            {
              ['bg-secondary-text hover:bg-secondary-text/80']: result === 'defeat' || result === 'timeup',
              ['bg-victory-text hover:bg-victory-text/80']: result === 'victory',
            }
          )}
        >
          {messages.game.retry}
        </button>
      </Modal>
    )
  );
};
