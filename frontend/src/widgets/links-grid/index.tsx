import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';
import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './index.module.css';
import { TitleCard } from '../title-card';
import { LinksGridProps } from './types.ts';

export const LinksGrid = ({
  dropdownItems,
  cards,
  cardLink,
  descriptionTitle
}: LinksGridProps): ReactElement => {
  return (
    <section className={ clsx(styles.products) }>
      <header className={ clsx(styles.products_header) }>
        <h3 className={ clsx(styles.products_title) }>Продукты на платформе</h3>
        <div className={ clsx(styles.products_buttons) }>
          <button type={ 'button' }
                  className={ clsx(styles.products_filter) }>
            <Dropdown menu={ { items: dropdownItems } }
                      trigger={ ['click'] }>
              <Space>
                Фильтры
                <DownOutlined />
              </Space>
            </Dropdown>
          </button>
          <Button className={ clsx(styles.products_add) }>
            <PlusOutlined />
            Создать продукт
          </Button>
        </div>
      </header>
      <div className={ clsx(styles.products_grid) }>
        {
          cards.map(card => (
            <TitleCard
              link={ `${ cardLink }/${ card.id }` }
              id={ card.id }
              title={ card.title }
              descriptionQuantity={ card.quantity }
              descriptionTitle={ descriptionTitle }
              key={ uuid() }
            />
          ))
        }
      </div>
    </section>
  );
};
