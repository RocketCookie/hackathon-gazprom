import { SettingOutlined } from '@ant-design/icons';
import { Breadcrumb, Button } from 'antd';
import { clsx } from 'clsx';
import { ReactElement, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './index.module.css';
import { ActiveBarVariants, ContentHeaderDetailProps } from './types.ts';

export const ContentHeaderDetail = ({
  title,
  description,
  date,
  goals,
  breadcrumbs
}: ContentHeaderDetailProps): ReactElement => {
  const [activeBar, setActiveBar] = useState<ActiveBarVariants>('general');

  return (
    <header className={ clsx(styles.header) }>
      <Breadcrumb
        items={ breadcrumbs }
      />
      <div className={ clsx(styles.header_wrapper) }>
        <h1 className={ clsx(styles.header_title) }>{ title }</h1>
        <Button className={ clsx(styles.edit) }>
          <SettingOutlined />
          Редактировать
        </Button>
      </div>
      <div className={ clsx(styles.header_description) }>
        <ul className={ clsx(styles.header_toggle) }>
          <li className={ clsx(
            styles.header_toggle_item,
            { [styles.header_toggle_item_active]: activeBar === 'general' },
          ) }
              onClick={ () => setActiveBar('general') }
          >
            Общие сведения
          </li>
          <li className={ clsx(
            styles.header_toggle_item,
            { [styles.header_toggle_item_active]: activeBar === 'metric' },
          ) }
              onClick={ () => setActiveBar('metric') }
          >Метрики
          </li>
        </ul>
        {
          activeBar === 'general'
            ? (
              <div className={ clsx(styles.general) }>
                <ul className={ clsx(styles.types) }>
                  <li className={ clsx(styles.types_item) }>
                    <span className={ clsx(styles.types_legend) }>Дата создания</span>
                    <span className={ clsx(styles.types_content) }>{ date }</span>
                  </li>

                </ul>
                <p className={ clsx(styles.content) }>
                  { description }
                </p>
                <div className={ clsx(styles.goals) }>
                  <h3 className={ clsx(styles.subtitle) }>Цели</h3>
                  <ul className={ clsx(styles.goals_content) }>
                    {
                      goals.map(goal => (
                        <li
                          className={ clsx(styles.goals_item) }
                          key={ uuid() }
                        >
                          { goal }
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            )
            : (
              <div className={ clsx(styles.header_description_metric) }>
                metrics
              </div>
            )
        }
      </div>
    </header>
  );
};
