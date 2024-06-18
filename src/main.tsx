import '@/styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '@/app.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/libs';

// TODO: ADD error boundary for unexpected errors
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
