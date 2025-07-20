import type { FC } from 'react';

interface CloseProps {
  onClick?(): void;
}

export const CloseSVG: FC<CloseProps> = ({ onClick }) => {
  return (
    <div className="cursor-pointer text-gray-300 hover:text-gray-500 transition-all duration-300" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="currentColor">
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
};
