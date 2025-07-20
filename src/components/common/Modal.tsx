import { type FC, type ReactNode } from 'react';
import { messages } from '../../messages/messages';
import { Box } from './Box';
import { CloseSVG } from '../svgs/close';
import type { ModalTypes } from '../../types/modalTypes';

interface ModalProps {
  onClick?: () => void;
  children: ReactNode;
  type: ModalTypes;
}

export const Modal: FC<ModalProps> = ({ onClick, children, type }) => {
  const t = messages.modal[type];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-3xl shadow-lg">
        <Box className="flex-row mb-4 justify-between bg-primary-bg px-5 py-7 rounded-3xl rounded-b-none">
          <h2 className="text-xl pr-4">{t.title}</h2>
          <CloseSVG onClick={onClick} />
        </Box>
        {children}
      </div>
    </div>
  );
};
