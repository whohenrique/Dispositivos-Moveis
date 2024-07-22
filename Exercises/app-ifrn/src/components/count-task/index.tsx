import { Count } from "./styles";

interface CounterTaskProps {
  value: number;
  isCount: boolean;
}

export function CounterTask({ isCount, value }: CounterTaskProps) {
  return <Count count={isCount}>{value}</Count>;
}
