import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LoginPage } from '../pages/login';
import { RegistrationPage } from '../pages/registration';
import { paths } from '../shared/constants/paths.ts';

export const router = createBrowserRouter(
  [
    {
      index: true,
      element: <Navigate to={ paths.LOGIN } />,
    },
    {
      path: paths.LOGIN,
      element: <LoginPage />,
    },
    {
      path: paths.REGISTER,
      element: <RegistrationPage />,
    },
    {
      path: '*',
      element: <Navigate to={ paths.LOGIN } />,
    },
  ],
);
