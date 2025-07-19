import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';

interface ContainerProps {
  className: string;
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx('min-h-screen min-w-full flex justify-start items-center flex-col', className)}>
      {children}
    </div>
  );
};
