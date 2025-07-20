import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

interface UseTimerProps {
  countdown?: number;
}

export const useTimer = ({ countdown }: UseTimerProps) => {
  const { timerSetting } = useSelector((state: RootState) => ({
    timerSetting: state.game.timerSetting,
  }));
  const [timeLeft, setTimeLeft] = useState<number>(countdown ?? timerSetting);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  return [timeLeft, setTimeLeft] as const;
};
