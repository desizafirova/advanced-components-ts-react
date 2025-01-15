import { type Timer as TimerProps } from '../store/timers-context.tsx';

export default function Header({ name, duration }: TimerProps) {
  return (
    <header>
      <h1>{name}</h1>

      <p>{duration}</p>
    </header>
  );
}
