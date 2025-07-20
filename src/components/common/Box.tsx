import { clsx } from 'clsx';
import type { FC, ReactNode } from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Box: FC<BoxProps> = ({ className, children, onClick, ...props }) => {
  return (
    <div {...props} className={clsx('flex items-center text-center', className)} onClick={onClick}>
      {children}
    </div>
  );
};
