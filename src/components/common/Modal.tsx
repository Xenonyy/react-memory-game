import { type FC, type ReactNode } from 'react';
import { messages } from '../../messages/messages';
import { Box } from './Box';
import { CloseSVG } from '../svgs/close';
import type { ModalTypes } from '../../types/modalTypes';
import clsx from 'clsx';

interface ModalProps {
  onClick?: () => void;
  children: ReactNode;
  type: ModalTypes;
}

export const Modal: FC<ModalProps> = ({ onClick, children, type }) => {
  const t = messages.modal[type];
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-10">
      <div className="bg-white rounded-3xl shadow-lg">
        <Box className="flex-row mb-4 justify-between bg-primary-bg p-5 rounded-3xl rounded-b-none">
          <h2
            className={clsx('text-xl pr-4', {
              ['text-secondary-text']: type === 'defeat' || type === 'timeup',
              ['text-blue-400']: type === 'victory',
            })}
          >
            {t.title}
          </h2>
          <CloseSVG onClick={onClick} />
        </Box>
        <Box className="px-7 mb-4 flex-col">{children}</Box>
      </div>
    </div>
  );
};
