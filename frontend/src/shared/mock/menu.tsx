import {
  PartitionOutlined,
  ProfileOutlined,
  ProjectOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Menu } from '../../widgets/aside/types.ts';
import { paths } from '../constants/paths.ts';

export const menuOptions: Menu = [
  {
    title: 'Структура компании',
    key: 'structure',
    link: paths.STRUCTURE,
    icon: <PartitionOutlined />,
  },
  {
    title: 'Платформы',
    key: 'platform',
    link: paths.PLATFORM,
    icon: <ShopOutlined />,
  },
  {
    title: 'Продукты',
    key: 'product',
    link: paths.PRODUCTS,
    icon: <ProjectOutlined />,
  },
  {
    title: 'Сервис',
    key: 'service',
    link: paths.SERVICE,
    icon: <ProfileOutlined />,
  },
  {
    title: 'Команды',
    key: 'team',
    link: paths.TEAMS,
    icon: <TeamOutlined />,
  },
  {
    title: 'Сотрудники',
    key: 'employee',
    link: paths.EMPLOYEES,
    icon: <UserOutlined />,
  },
];
