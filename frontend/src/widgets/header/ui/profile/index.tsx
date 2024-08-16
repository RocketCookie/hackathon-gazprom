import { clsx } from 'clsx';
import { ReactElement } from 'react';
import styles from './index.module.css';
import { ProfileProps } from './types.ts';

export const Profile = ({
  image,
  name,
}: ProfileProps): ReactElement => {
  return (
    <section className={ clsx(styles.profile) }>
      <img src={ image }
           alt=""
           className={ clsx(styles.profile_image) }
      />
      <span>{ name }</span>
    </section>
  );
};
