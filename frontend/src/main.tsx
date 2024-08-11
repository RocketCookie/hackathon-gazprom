import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/app.tsx';

const container: HTMLElement | null = document.getElementById('root');
const root: Root | null = container ? createRoot(container) : null;

root &&
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
