import { clsx } from 'clsx';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../shared/constants/colors.ts';
import { links } from '../../shared/constants/links.ts';
import { Github } from '../../shared/icons/github';
import styles from './index.module.css';

export type FooterProps = {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={ clsx(styles.footer, styles.footer_text) }>
      <section className={ clsx(styles.links) }>
        <p className={ clsx(styles.legend) }>Ant Design Pro</p>
        <Link to={ links.antDesign }
              preventScrollReset={ true }
              target={ '_blank' }
              className={ clsx(styles.link) }
        >
          <Github
            size={ 14 }
            fill={ colors.BLACK }
          />
        </Link>
        <p className={ clsx(styles.legend) }>Ant Design</p>
      </section>
      <p className={ clsx(styles.copyrights) }>
        Copyright ©2020 Produced by Ant Finance Experience
        Technology Department
      </p>
    </footer>
  );
};
