import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../shared/constants/paths.ts';
import { Logo } from '../../shared/icons/not-found';
import { ButtonElement } from '../../shared/ui/button';
import styles from './index.module.css';

export const NotFoundPage = (): ReactElement => {
  return (
    <div className={ clsx(styles.page_wrapper) }>
      <section className={ clsx(styles.not_found_section) }>
        <Logo
          size={ 254 }
          className={ clsx(styles.not_found_image) }
        />
        <div className={ clsx(styles.not_found_text) }>
          <span className={ clsx(styles.not_found_code) }>404</span>
          <p
            className={ clsx(styles.not_found_description) }
          >
            Страница не найдена
          </p>
        </div>

        <NavLink to={ paths.HOME }>
          <ButtonElement
            className={ clsx(styles.not_found_button) }
            htmlType={ 'button' }
          >
            На главную
          </ButtonElement>
        </NavLink>
      </section>
    </div>
  );
};

