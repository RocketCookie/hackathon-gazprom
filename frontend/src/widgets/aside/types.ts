export type AsideProps = {
  className?: string;
  options: Menu;
}

export type MenuItem = {
  title: string;
  key: string;
  link: string;
}

export type Menu = MenuItem[];
