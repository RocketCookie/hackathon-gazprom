import { Tag } from 'antd';
import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { CardBody } from '../../shared/ui/card-body';
import styles from './index.module.css';
import { TitleCardProps } from './types.ts';

export const TitleCard = ({
  id,
  title,
  descriptionQuantity,
  descriptionTitle,
  tags,
  isColored = false,
}: TitleCardProps): ReactElement => {
  return (
    <NavLink
      to={ `${ id }` }
      key={ id }
      className={ clsx(styles.card_link) }
    >
      <article className={ clsx(styles.card) }>
        <header className={ clsx(styles.card_header) }>
          <h2 className={ clsx(styles.card_title) }>{ title }</h2>
          <span className={ clsx(styles.card_tags) }>
            {
              tags.map(tag => (
                <Tag
                  key={ tag.id }
                  color={ isColored ? tag.color : 'default' }
                  className={ clsx(styles.card_tag) }
                >
                  { tag.title }
                </Tag>
              ))
            }
          </span>
        </header>
        <CardBody
          quantity={ descriptionQuantity }
          title={ descriptionTitle }
        />
      </article>
    </NavLink>
  );
};
