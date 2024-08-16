import { clsx } from 'clsx';
import { FC } from 'react';
import { colors } from '../../constants/colors.ts';
import { Logo as LogoIcon } from '../../icons/logo';
import styles from './index.module.css';

type colorsEnum = typeof colors[keyof typeof colors];

type LogoProps = {
  fill: colorsEnum;
  logoSize: number;
  className?: string;
}

export const Logo: FC<LogoProps> = ({
  fill,
  logoSize,
  className,
}) => {
  return (
    <section className={ clsx(styles.logo, className ?? '') }>
      <LogoIcon
        fill={ fill }
        size={ logoSize }
      />
      <span className={ clsx(styles.logo_title)}>
        BOARD
      </span>
    </section>
  );
};
