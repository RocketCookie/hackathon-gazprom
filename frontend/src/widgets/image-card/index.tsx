import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { CardBody } from '../../shared/ui/card-body';
import styles from './index.module.css';
import { ImageCardProps } from './types.ts';

export const ImageCard = ({
  descriptionTitle,
  descriptionQuantity,
  image,
  id,
}: ImageCardProps): ReactElement => {
  return (
    <NavLink
      to={ `${ id }` }
      className={ clsx(styles.card_link) }
    >
      <article className={ clsx(styles.card) }>
        <img
          className={ clsx(styles.card_image) }
          src={ image }
          alt={ 'Логотип платформы' } />
        <CardBody
          quantity={ descriptionQuantity }
          title={ descriptionTitle }
        />
      </article>
    </NavLink>
  );
};
