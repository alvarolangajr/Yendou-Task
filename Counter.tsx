import { useCounter } from './CounterContext';

type CounterProps = {
  onIncrement: (value: number) => void;
};

function Counter({ onIncrement }: CounterProps) {
  const { count, increment, reset } = useCounter();

  const handleIncrement = () => {
    const next = increment();
    onIncrement(next);
  };

  return (
    <section className="card">
      <p className="eyebrow">Yendou · take-home</p>
      <h1 className="heading">Counter</h1>

      <div className="display">
        <span className="label">Current count</span>
        <span className="value">{count}</span>
      </div>

      <div className="actions">
        <button className="primary" type="button" onClick={handleIncrement}>
          +1
        </button>
        <button className="ghost" type="button" onClick={reset} disabled={count === 0}>
          Reset
        </button>
      </div>

      <p className="hint">Each click increments the global counter.</p>
    </section>
  );
}

export default Counter;
