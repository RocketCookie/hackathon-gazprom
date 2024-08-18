import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout } from '../../entities/layout';
import styles from '../../entities/layout/index.module.css';
import { paths } from '../../shared/constants/paths.ts';
import { ButtonElement } from '../../shared/ui/button';

export const PlatformPage = (): ReactElement => {
  return (
    <Layout>
      <NavLink to={ paths.LOGIN }>
        <ButtonElement
          className={ clsx(styles.not_found_button) }
          htmlType={ 'button' }
        >
          Войти
        </ButtonElement>
      </NavLink>
    </Layout>
  );
};
