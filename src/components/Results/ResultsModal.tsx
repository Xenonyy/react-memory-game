import { useCallback, useEffect, useState, type FC } from 'react';
import { messages } from '../../messages/messages';
import { Box } from '../common/Box';
import { Modal } from '../common/Modal';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import type { ModalTypes } from '../../types/modalTypes';
import { resetGame } from '../../store/gameSlice';

export const ResultsModal: FC = () => {
  const { mistakes, matches, timer } = useSelector((state: RootState) => ({
    mistakes: state.game.mistakes,
    matches: state.game.matches,
    timer: state.game.timer,
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

  // optional TODO: implement difficulty settings then replace hardcoded values
  const result: ModalTypes | '' = mistakes >= 12 ? 'defeat' : matches >= 10 ? 'victory' : timer <= 0 ? 'timeup' : '';

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
          className="m-4 py-4 rounded-3xl uppercase cursor-pointer bg-secondary-text text-white w-[90%] hover:bg-secondary-text/80 transition-all duration-300"
        >
          {messages.game.retry}
        </button>
      </Modal>
    )
  );
};
