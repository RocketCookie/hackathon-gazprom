import { Button, Table, TableColumnsType, TableProps } from 'antd';
import { ReactElement, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { paths } from '../../shared/constants/paths.ts';
import { ContentHeader } from '../../widgets/content-header';
import styles from './index.module.css';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
  key: string;
  fullName: string;
  position: string;
  division: string;
  status: string;
  phone: string;
  telegram: string;
  image: string;
}

const data: DataType[] = [
  {
    key: '1',
    fullName: 'Селиверстов Константин Александрович',
    position: 'Руководитель отдела',
    division: 'Маркетинг',
    status: 'В штате',
    phone: '+7 911 543 67 34',
    telegram: '@selistr',
    image: 'https://placehold.co/16',
  },
  {
    key: '2',
    fullName: 'Константинов Селиверстр Александрович',
    position: 'Дизайнер',
    division: 'Дизайн',
    status: 'В штате',
    phone: '+7 911 543 67 34',
    telegram: '@selistr',
    image: 'https://placehold.co/16',
  },
  {
    key: '3',
    fullName: 'Александров Константин Селиверстрович ',
    position: 'Аналитик',
    division: 'Маркетинг',
    status: 'В штате',
    phone: '+7 911 543 67 34',
    telegram: '@selistr',
    image: 'https://placehold.co/16',
  },
];

export const EmployeePage = (): ReactElement => {
  const navigator = useNavigate();
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const handleChange: OnChange = (pagination, sorter) => {
    console.log('Various parameters', pagination, sorter);
    setSortedInfo(sorter as Sorts);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: (image) => (
        <img
          src={ image }
          alt={ 'profile image' }
        />
      ),
      width: 32,
    },
    {
      title: 'ФИО',
      dataIndex: 'fullName',
      key: 'fullName',
      sorter: (a, b) => a.fullName.length - b.fullName.length,
      sortOrder: sortedInfo.columnKey === 'fullName' ? sortedInfo.order : null,
      width: 305,
    },
    {
      title: 'Должность',
      dataIndex: 'position',
      key: 'position',
      sorter: (a, b) => a.position.length - b.position.length,
      sortOrder: sortedInfo.columnKey === 'position' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Подразделение',
      dataIndex: 'division',
      key: 'division',
      sorter: (a, b) => a.division.length - b.division.length,
      sortOrder: sortedInfo.columnKey === 'division' ? sortedInfo.order : null,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.length - b.status.length,
      sortOrder: sortedInfo.columnKey === 'status' ? sortedInfo.order : null,
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
      sorter: (a, b) => a.phone.length - b.phone.length,
      sortOrder: sortedInfo.columnKey === 'phone' ? sortedInfo.order : null,
    },
    {
      title: 'Telegram',
      dataIndex: 'telegram',
      key: 'telegram',
      sorter: (a, b) => a.telegram.length - b.telegram.length,
      sortOrder: sortedInfo.columnKey === 'telegram' ? sortedInfo.order : null,
      render: (telegram) => (
        <Link to={ `https://t.me/${ telegram.replace('@', '') }` }>{ telegram }</Link>
      ),
    },

  ];

  return (
    <>
      <ContentHeader
        title={ 'Команды' }
        quantity={ 150 }
      />
      <section className={ styles.content }>
        <div className={ styles.table_header }>
          <h2 className={ styles.table_title }>Поисковая таблица</h2>
          <div className={ styles.table_buttons }>
            <Button>Сортировка</Button>
            <Button>Фильтр</Button>
          </div>
        </div>
        <Table columns={ columns }
               dataSource={ data }
               onChange={ handleChange }
               size={ 'middle' }
               onRow={ (record) => {
                 return {
                   onClick: () => navigator(`${ paths.EMPLOYEES }/${ record.key }`),
                 };
               } }
        />
      </section>
    </>
  );
};
