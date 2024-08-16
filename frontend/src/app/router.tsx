import { clsx } from 'clsx';
import { createBrowserRouter, NavLink } from 'react-router-dom';
import { LoginPage } from '../pages/login';
import styles from '../pages/login/index.module.css';
import { NotFoundPage } from '../pages/not-found';
import { RegistrationPage } from '../pages/registration';
import { paths } from '../shared/constants/paths.ts';
import { ButtonElement } from '../shared/ui/button';

export const router = createBrowserRouter(
  [
    {
      index: true,
      path: paths.HOME,
      element: <>
        <h1>Home page</h1>
        <NavLink to={ paths.LOGIN }>
          <ButtonElement
            className={ clsx(styles.not_found_button) }
            htmlType={ 'button' }
          >
            Войти
          </ButtonElement>
        </NavLink>
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
      path: '*',
      element: <NotFoundPage />,
    },
  ],
);
