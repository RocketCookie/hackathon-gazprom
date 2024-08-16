import { Menu } from '../../widgets/aside/types.ts';
import { paths } from '../constants/paths.ts';

export const menuOptions: Menu = [
  {
    title: 'Структура компании',
    key: 'structure',
    link: paths.STRUCTURE
  },
  {
    title: 'Платформы',
    key: 'platform',
    link: paths.PLATFORM
  },
  {
    title: 'Продукты',
    key: 'product',
    link: paths.PRODUCTS
  },
  {
    title: 'Сервис',
    key: 'service',
    link: paths.SERVICE
  },
  {
    title: 'Команды',
    key: 'team',
    link: paths.TEAMS
  },
  {
    title: 'Сотрудники',
    key: 'employee',
    link: paths.EMPLOYEES
  },
];
