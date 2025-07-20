import { useEffect, useState } from 'react';

interface UseTimerProps {
  countdown: number;
}

export const useTimer = ({ countdown }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number>(countdown);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  return [timeLeft, setTimeLeft] as const;
};
