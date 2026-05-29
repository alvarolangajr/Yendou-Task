import { CounterProvider } from './CounterContext';

function App() {
  return (
    <CounterProvider>
      <div>Counter app</div>
    </CounterProvider>
  );
}

export default App;