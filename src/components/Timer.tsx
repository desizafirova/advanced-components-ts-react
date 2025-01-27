import { useEffect, useRef, useState } from 'react';
import {
  useTimersContext,
  type Timer as TimerProps,
} from '../store/timers-context.tsx';
import { preview } from 'vite';

export default function Header({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  const { isRunning } = useTimersContext();

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
      }, 50);
      interval.current = timer;
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formatedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <header>
      <h1>{name}</h1>

      <p>
        <progress max={duration * 1000} value={remainingTime} />
      </p>
      <p>{formatedRemainingTime}</p>
    </header>
  );
}
