import type { FC } from 'react';
import { projectDetails } from '../../enums/projectDetails';

export const Footer: FC = () => {
  return (
    <footer className="h-16 bg-violet-400 justify-around items-center flex flex-row">
      <span className="text-white font-medium drop-shadow-md">
        &copy;{projectDetails.year} {projectDetails.author}
      </span>
      <span className="text-white font-medium drop-shadow-md">{`Version: ${projectDetails.version}`}</span>
    </footer>
  );
};
