import { clsx } from 'clsx';
import { ReactElement } from 'react';
import styles from './index.module.css';
import { CardBodyProps } from './types.ts';

export const CardBody = ({
  title,
  quantity
}: CardBodyProps): ReactElement => {
  return (
    <p className={ clsx(styles.card_body) }>
      <span className={ clsx(styles.card_decription) }>{ title }</span>
      <span>{ quantity }</span>
    </p>
  );
};
