import { Button, Input } from 'antd';
import { clsx } from 'clsx';
import { FC } from 'react';
import styles from './index.module.css';
import { LoginFormProps } from './types.ts';

export const LoginForm: FC<LoginFormProps> = ({
  formik,
  handleForgotPasswordClick,
}) => {
  return (
    <form
      className={ clsx(styles.form) }
      onSubmit={ formik.handleSubmit }
    >
      <fieldset className={ clsx(styles.form_fieldset) }>
        <h2 className={ clsx(styles.form_title) }>Введите данные для входа</h2>

        <label htmlFor={ 'email' }
               className={ clsx(styles.form_label) }>
          <Input
            name={ 'email' }
            id={ 'email' }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            value={ formik.values.email }
            type={ 'email' }
            placeholder={ 'Почта' }
            allowClear={ true }
            autoComplete={ 'true' }
            className={ clsx(styles.form_input) }
          />
          <p className={ clsx(styles.form_error) }>{ formik.errors.email }</p>
        </label>

        {
          (!Boolean(formik.errors.email) && formik.touched.email) && (
            <label htmlFor={ 'password' }
                   className={ clsx(styles.form_label) }>
              <Input
                name={ 'password' }
                id={ 'password' }
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.password }
                status={ formik.touched.password && Boolean(formik.errors.password) ?
                  'error' :
                  '' }
                type={ 'password' }
                placeholder={ 'Пароль' }
                allowClear={ true }
                className={ clsx(styles.form_input) }
              />
              <p className={ clsx(styles.form_error) }>{ formik.errors.password }</p>
            </label>
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
        <Button
          className={ clsx(styles.form_submit) }
          htmlType={ 'submit' }
          disabled={ !(formik.isValid && formik.touched.email) }
        >
          Войти
        </Button>

        <
          className={ clsx(styles.form_register) }
          onClick={ handleForgotPasswordClick }
        >
          Зарегистрироваться
        </>
      </fieldset>
    </form>
  );
};
