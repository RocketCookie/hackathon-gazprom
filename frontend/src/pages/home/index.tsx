import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../shared/constants/paths.ts';

export const HomePage = (): ReactElement => {
  return (
    <ul>
      <li>
        <NavLink to={ paths.LOGIN }>login</NavLink>
      </li>
      <li>
        <NavLink to={ paths.REGISTER }>register</NavLink>
      </li>
      <li>
        <NavLink to={ paths.PLATFORM }>Main app</NavLink>
      </li>
    </ul>
  );
};
