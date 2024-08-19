import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { ContentHeaderProps } from './types.ts';
import styles from './index.module.css';

export const ContentHeader = ({
  title,
  quantity,
}: ContentHeaderProps): ReactElement => {
  return (
    <header className={ clsx(styles.content_header) }>
      <h1 className={ clsx(styles.content_header_title) }>{ title }</h1>
      <section className={ clsx(styles.content_header_info) }>
        <span className={ clsx(styles.content_header_quantity) }>
          { quantity } платформ
        </span>
      </section>
    </header>
  );
};
