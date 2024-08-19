import { MenuProps } from 'antd';
import { clsx } from 'clsx';
import { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../../shared/constants/paths.ts';
import { platform as mockPlatform } from '../../../shared/mock/platform.ts';
import { Platform } from '../../../shared/types/platform.ts';
import { ContentHeaderDetail } from '../../../widgets/content-header/detail';
import { EmployeesWidget } from '../../../widgets/employees';
import { HistoryWidget } from '../../../widgets/history';
import { LinksGrid } from '../../../widgets/links-grid';
import styles from './index.module.css';

const dropdownItems: MenuProps['items'] = [
  {
    label: 'one',
    key: '1',
  },
  {
    label: 'two',
    key: '0',
  },
  {
    label: 'three',
    key: '3',
  },
];

const breadcrumbs = [
  {
    title: <NavLink to={ paths.PLATFORM }>Платформы</NavLink>,
  },
  {
    title: mockPlatform.title,
  },
];

export const PlatformDetailPage = (): ReactElement => {
  const [platform] = useState<Platform | null>(mockPlatform);

  return (
    <>
      <ContentHeaderDetail
        title={ mockPlatform.title }
        description={ mockPlatform.description }
        date={ mockPlatform.date }
        goals={ mockPlatform.goals }
        breadcrumbs={ breadcrumbs }
      />
      <div className={ clsx(styles.page_content) }>
        {
          platform?.products &&
          <LinksGrid
            dropdownItems={ dropdownItems }
            cards={ platform?.products }
            cardLink={ paths.PRODUCTS }
            descriptionTitle={ 'Сервисов' }
          />
        }
        {
          platform?.history &&
          <HistoryWidget history={ platform?.history } />
        }
        {
          platform?.employees &&
          <EmployeesWidget employees={ platform?.employees } />
        }
      </div>
    </>
  );
};
