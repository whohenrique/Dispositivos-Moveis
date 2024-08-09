import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CounterContextTypes {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterContextTypes | undefined>(
  undefined
);

export const CounterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log(`O contador mudou: ${count}`);
  }, [count]);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count === 0) {
      alert("Não é possível decrementar, o valor é 0.");
      return;
    }
    setCount(count - 1);
  }

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextTypes => {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
