import './app.css';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

export type AppProps = {}

export const App: FC<AppProps> = () => <RouterProvider router={ router } />;
