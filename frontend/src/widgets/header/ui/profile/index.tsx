import { clsx } from 'clsx';
import { ReactElement } from 'react';
import styles from './index.module.css';
import { ProfileProps } from './types.ts';

export const Profile = ({
  image,
  name,
  isBlack = false
}: ProfileProps): ReactElement => {
  return (
    <span className={ clsx(styles.profile, {[styles.color_black]: isBlack}) }>
      <img src={ image }
           alt=""
           className={ clsx(styles.profile_image) }
      />
      <span>{ name }</span>
    </span>
  );
};
