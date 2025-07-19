import type { FC } from 'react';
import { projectDetails } from '../../enums/projectDetails';

export const Header: FC = () => {
  return (
    <header className="h-16 bg-violet-400 justify-around items-center flex flex-row">
      <h1 className="text-white font-medium text-lg drop-shadow-md text-left w-full px-10">{projectDetails.name}</h1>
    </header>
  );
};
