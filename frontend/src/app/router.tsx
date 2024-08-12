import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Login } from '../pages/login';
import { paths } from '../shared/constants/paths.ts';

export const router = createBrowserRouter(
  [
    {
      index: true,
      element: <Navigate to={ paths.LOGIN } />,
    },
    {
      path: paths.LOGIN,
      element: <Login />,
    },
    {
      path: paths.REGISTER,
      element: <h1>registration</h1>,
    },
    {
      path: '*',
      element: <Navigate to={ paths.LOGIN } />,
    },
  ],
);
