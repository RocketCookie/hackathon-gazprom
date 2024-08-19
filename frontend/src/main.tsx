import { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { App } from './app/app.tsx';
import './shared/styles/main.css';

const container: HTMLElement | null = document.getElementById('root');
const root: Root | null = container ? createRoot(container) : null;

root &&
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
