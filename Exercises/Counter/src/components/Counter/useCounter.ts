import { useState } from "react";

interface CounterProps {
  value: number;
}

export function useCounter({ value }: CounterProps) {
  const [count, setCount] = useState<number>(value);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count === 0) {
      alert("Não é possível decrementar o valor é 0.");
      return;
    }
    setCount(count - 1);
  }

  return {
    count,
    increment,
    decrement,
  };
}
