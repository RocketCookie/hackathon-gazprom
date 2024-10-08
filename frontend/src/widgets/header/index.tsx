import { Select } from 'antd';
import { clsx } from 'clsx';
import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { colors } from '../../shared/constants/colors';
import { paths } from '../../shared/constants/paths.ts';
import { Logo } from '../../shared/ui/logo';
import styles from './index.module.css';
import { HeaderProps } from './types.ts';
import { Profile } from './ui/profile';

export const Header = ({
  className
}: HeaderProps): ReactElement => {
  const [value, setValue] = useState();

  return (
    <header className={ clsx(styles.header, className) }>
      <div className={ clsx(styles.header__wrapper) }>
        <NavLink to={paths.HOME} className={clsx(styles.logo_link)}>
          <Logo
            fill={ colors.WHITE }
            logoSize={ 20 }
            className={ clsx(styles.logo) }
          />
        </NavLink>

        <section className={ clsx(styles.search) }>
          <Select
            showSearch
            value={ value }
            placeholder={ 'Поиск' }
            className={ clsx(styles.search_element) }
            defaultActiveFirstOption={ false }
            suffixIcon={ null }
            filterOption={ false }
            onChange={ value => setValue(value) }
            notFoundContent={ null }
            variant={ 'borderless' }
          />
        </section>

        <Profile
          image={ 'https://placehold.co/24' }
          name={ 'Селиверстов Константин' }
        />
      </div>
    </header>
  );
};
