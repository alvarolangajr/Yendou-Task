import { useState } from 'react';
import { CounterProvider } from './CounterContext';
import Counter from './Counter';

type ToastState = {
  title: string;
  description: string;
  visible: boolean;
};

function AppContent() {
  const [toast, setToast] = useState<ToastState>({
    title: '',
    description: '',
    visible: false,
  });

  const showToast = (value: number) => {
    setToast({
      title: 'Incremented',
      description: `Counter is now ${value}`,
      visible: true,
    });

    window.setTimeout(() => {
      setToast((current) => ({ ...current, visible: false }));
    }, 3000);
  };

  return (
    <main className="app">
      <Counter onIncrement={showToast} />

      {toast.visible && (
        <div className="viewport" role="region" aria-label="Notifications">
          <div className="toast" role="status">
            <span className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
                <path
                  d="M8.25 12.4l2.6 2.6 5-5.6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div className="body">
              <p className="t-title">{toast.title}</p>
              <p className="t-desc">{toast.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <CounterProvider>
      <AppContent />
    </CounterProvider>
  );
}

export default App;