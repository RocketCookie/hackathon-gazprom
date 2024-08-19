import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../entities/layout';
import { EmployeePage } from '../pages/employee';
import { HomePage } from '../pages/home';
import { PlatformPage } from '../pages/platform';
import { LoginPage } from '../pages/login';
import { NotFoundPage } from '../pages/not-found';
import { PlatformDetailPage } from '../pages/platform/detail';
import { ProductPage } from '../pages/product';
import { RegistrationPage } from '../pages/registration';
import { ServicePage } from '../pages/service';
import { TeamPage } from '../pages/team';
import { paths } from '../shared/constants/paths.ts';

export const router = createBrowserRouter(
  [
    {
      index: true,
      path: paths.HOME,
      element: <HomePage />,
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
      path: paths.HOME,
      element: <Layout />,
      children: [
        {
          path: paths.STRUCTURE,
          element: <h1>STRUCTURE</h1>,
        },
        {
          path: paths.PLATFORM,
          children: [
            {
              index: true,
              element: <PlatformPage />,
            },
            {
              path: `${ paths.PLATFORM }/:platformID`,
              element: <PlatformDetailPage />,
            },
          ],
        },
        {
          path: paths.PRODUCTS,
          children: [
            {
              index: true,
              element: <ProductPage />,
            },
            {
              path: `${ paths.PRODUCTS }/:productID`,
              element: <h1>id</h1>,
            },
          ],
        },
        {
          path: paths.SERVICE,
          children: [
            {
              index: true,
              element: <ServicePage />,
            },
            {
              path: `${ paths.SERVICE }/:serviceID`,
              element: <h1>id</h1>,
            },
          ],
        },
        {
          path: paths.TEAMS,
          children: [
            {
              index: true,
              element: <TeamPage />,
            },
            {
              path: `${ paths.TEAMS }/:teamID`,
              element: <h1>id</h1>,
            },
          ],
        },
        {
          path: paths.EMPLOYEES,
          children: [
            {
              index: true,
              element: <EmployeePage />,
            },
            {
              path: `${ paths.EMPLOYEES }/:employeeID`,
              element: <h1>id</h1>,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ],
);
