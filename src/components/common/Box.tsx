import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';

interface BoxProps {
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Box: FC<BoxProps> = ({ className, children, onClick }) => {
  return (
    <div className={clsx('flex items-center text-center', className)} onClick={onClick}>
      {children}
    </div>
  );
};
