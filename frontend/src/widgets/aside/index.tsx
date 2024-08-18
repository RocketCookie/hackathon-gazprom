import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { AsideProps } from './types';
import style from './index.module.css';

export const Aside = ({
  options,
  className,
}: AsideProps): ReactElement => {
  return (
    <aside className={ clsx(style.aside, className ?? '') }>
      <nav>
        <ul className={ clsx(style.menu) }>
          { options.map(item => (
            <li
              className={ clsx(style.menu_item) }
              key={ item.key }
            >
              <NavLink
                className={ ({ isActive }) =>
                  clsx(
                    style.menu_link,
                    { [style.menu_link_active]: isActive },
                  ) }
                to={ item.link }
              >
                { item.title }
              </NavLink>
            </li>
          )) }
        </ul>
      </nav>
    </aside>
  );
};
