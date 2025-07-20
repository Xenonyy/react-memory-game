import type { FC } from 'react';
import { messages } from '../../messages/messages';
import { Box } from './Box';
import { CloseSVG } from '../svgs/close';

interface ModalProps {
  onClick?: () => void;
}

export const Modal: FC<ModalProps> = ({ onClick }) => {
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
              defaultValue={60}
              className="px-4 py-2 border-2 border-border max-w-13 rounded-lg"
            />
          </Box>
        </Box>
        <button
          onClick={onClick}
          tabIndex={0}
          className="bg-secondary-text text-white w-[90%] py-4 rounded-3xl uppercase  hover:bg-secondary-text mb-4"
        >
          {messages.modal.settings.save}
        </button>
      </div>
    </div>
  );
};
