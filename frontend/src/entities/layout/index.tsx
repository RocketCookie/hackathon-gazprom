import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { menuOptions } from '../../shared/mock/menu.ts';
import { Aside } from '../../widgets/aside';
import { Header } from '../../widgets/header';
import styles from './index.module.css';
import { LayoutProps } from './types.ts';

export const Layout = ({
  children,
}: LayoutProps): ReactElement => {
  return (
    <div className={ clsx(styles.page_wrapper) }>
      <Header className={ clsx(styles.page_header) } />
      <Aside options={ menuOptions } />
      <main className={ clsx(styles.page_content) }>
        { children }
      </main>
    </div>
  );
};
