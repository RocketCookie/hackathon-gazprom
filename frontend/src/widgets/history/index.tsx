import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './index.module.css';
import { HistoryWidgetProps } from './types.ts';

export const HistoryWidget = ({
  history,
}: HistoryWidgetProps): ReactElement => {
  return (
    <section className={ clsx(styles.history) }>
      <header className={ clsx(styles.history_header) }>
        <h3 className={ clsx(styles.history_title) }>Последние изменения</h3>
      </header>
      <ul className={ clsx(styles.history_list) }>
        {
          history.map(item => (
            <li
              className={ clsx(styles.history_item) }
              key={ uuid() }
            >
              <img
                className={ clsx(styles.user_image) }
                src={ item.author.image }
                alt="Изображение профиля"
              />
              <p className={ clsx(styles.history_activity) }>
                    <span className={ clsx(styles.user_name) }>
                      { item.author.first_name } { item.author.last_name }
                    </span>
                { item.title }
              </p>
              <p className={ clsx(styles.history_timestamp) }>{ new Date(item.timestamp).toLocaleString() }</p>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
