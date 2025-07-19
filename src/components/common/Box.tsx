import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';

interface BoxProps {
  className: string;
  children: ReactNode;
}

export const Box: FC<BoxProps> = ({ className, children }) => {
  return <div className={clsx('flex items-center text-center', className)}>{children}</div>;
};
