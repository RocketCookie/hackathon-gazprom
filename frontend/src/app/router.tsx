import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { NotFoundPage } from '../pages/not-found';
import { RegistrationPage } from '../pages/registration';
import { paths } from '../shared/constants/paths.ts';

export const router = createBrowserRouter(
  [
    {
      index: true,
      path: paths.HOME,
      element: <>
        <HomePage />
      </>,
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
      path: paths.STRUCTURE,
      element: <h1>STRUCTURE</h1>,
    },
    {
      path: paths.PLATFORM,
      element: <h1>PLATFORM</h1>,
    },
    {
      path: paths.PRODUCTS,
      element: <h1>PRODUCTS</h1>,
    },
    {
      path: paths.SERVICE,
      element: <h1>SERVICE</h1>,
    },
    {
      path: paths.TEAMS,
      element: <h1>TEAMS</h1>,
    },
    {
      path: paths.EMPLOYEES,
      element: <h1>EMPLOYEES</h1>,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
);
