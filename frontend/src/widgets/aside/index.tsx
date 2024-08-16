import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { AsideProps } from './types.ts';

export const Aside = ({
  options,
  className,
}: AsideProps): ReactElement => {
  return (
    <aside className={ clsx(className ?? '') }>
      <nav>
        <ul>
          { options.map(item => (
            <li
              className={ clsx() }
              key={ item.key }
            >
              <NavLink to={ item.link }>
                { item.title }
              </NavLink>
            </li>
          )) }
        </ul>
      </nav>
    </aside>
  );
};
