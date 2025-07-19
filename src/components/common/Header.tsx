import type { FC } from 'react';
import { projectDetails } from '../../enums/projectDetails';

export const Header: FC = () => {
  return (
    <header className="h-16 bg-violet-400 justify-around items-center flex flex-row">
      <h1 className="text-white font-medium drop-shadow-md">{projectDetails.name}</h1>
      <span className="text-white font-medium drop-shadow-md">{projectDetails.author}</span>
    </header>
  );
};
