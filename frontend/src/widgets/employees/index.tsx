import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { paths } from '../../shared/constants/paths.ts';
import styles from './index.module.css';
import { EmployeesWidgetProps } from './types.ts';

export const EmployeesWidget = ({
  employees,
}: EmployeesWidgetProps): ReactElement => {
  return (
    <section className={ clsx(styles.employees) }>
      <header className={ clsx(styles.employees_header) }>
        <h3 className={ clsx(styles.employees_title) }>Сотрудники</h3>
      </header>
      <ul className={ clsx(styles.employees_list) }>
        {
          employees.map(employee => (
            <li
              key={ uuid() }
            >
              <NavLink to={ `${ paths.EMPLOYEES }/${ employee.id }` }
                       className={ clsx(styles.employees_item) }
              >
                <img
                  className={ clsx(styles.employee_image) }
                  src={ employee.image }
                  alt="Изображение профиля"
                />
                <span className={ clsx(styles.employee_name) }>
                    { employee.full_name }
                </span>
                <span className={ clsx(styles.employee_position) }>
                    { employee.position }
                </span>
              </NavLink>
            </li>
          ))
        }
      </ul>
    </section>
  );
};
