import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { paths } from '../../../../shared/constants/paths.ts';
import { ButtonElement } from '../../../../shared/ui/button';
import { InputElement } from '../../../../shared/ui/input';
import styles from './index.module.css';
import { LoginFormProps } from './types.ts';

export const LoginForm = ({
  formik,
  handleForgotPasswordClick,
}: LoginFormProps): ReactElement => {
  return (
    <form
      className={ clsx(styles.form) }
      onSubmit={ formik.handleSubmit }
    >
      <fieldset className={ clsx(styles.form_fieldset) }>
        <h2 className={ clsx(styles.form_title) }>Введите данные для входа</h2>

        <InputElement
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          inputValue={ formik.values.email }
          error={ formik.errors.email }
          type={ 'email' }
          name={ 'email' }
          placeholder={ 'Email *' }
          allowClear={ true }
          autoComplete={ 'true' }
          touched={ formik.touched.email }
          aria-required={ 'true' }
        />

        {
          (!Boolean(formik.errors.email) && formik.touched.email) && (
            <InputElement
              onChange={ formik.handleChange }
              onBlur={ formik.handleBlur }
              inputValue={ formik.values.password }
              error={ formik.errors.password }
              type={ 'password' }
              name={ 'password' }
              placeholder={ 'Пароль *' }
              allowClear={ true }
              autoComplete={ 'true' }
              touched={ formik.touched.password }
              aria-required={ 'true' }
            />
          )
        }
        <p
          className={ clsx(styles.form_forgot_text) }
          onClick={ handleForgotPasswordClick }
        >
          Забыли пароль?
        </p>
      </fieldset>
      <fieldset className={ clsx(styles.form_fieldset_gap_xl) }>
        <ButtonElement
          className={ clsx(styles.form_submit) }
          htmlType={ 'submit' }
          disabled={ !(formik.isValid && formik.touched.email) }
        >
          Войти
        </ButtonElement>

        <NavLink
          to={ paths.REGISTER }
          className={ clsx(styles.form_register) }
          onClick={ handleForgotPasswordClick }
        >
          Зарегистрироваться
        </NavLink>
      </fieldset>
    </form>
  );
};
