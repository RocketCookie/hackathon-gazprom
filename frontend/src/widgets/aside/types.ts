import { ReactElement } from 'react';

export type AsideProps = {
  className?: string;
  options: Menu;
}

export type MenuItem = {
  title: string;
  key: string;
  link: string;
  icon: ReactElement;
}

export type Menu = MenuItem[];
