import { createContext, useContext, useRef, useState, ReactNode } from 'react';

type CounterContextType = {
  count: number;
  increment: () => number;
  reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

type CounterProviderProps = {
  children: ReactNode;
};

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increment = () => {
    const next = countRef.current + 1;
    countRef.current = next;
    setCount(next);
    return next;
  };

  const reset = () => {
    countRef.current = 0;
    setCount(0);
  };

  return (
    <CounterContext.Provider value={{ count, increment, reset }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter must be used within CounterProvider');
  }

  return context;
}