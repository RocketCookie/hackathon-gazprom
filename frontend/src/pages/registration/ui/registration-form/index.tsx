import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { ButtonElement } from '../../../../shared/ui/button';
import { InputElement } from '../../../../shared/ui/input';
import { SelectElement } from '../../../../shared/ui/select';
import styles from './index.module.css';
import { RegistrationFormProps } from './types.ts';

export const RegistrationForm = ({
  formik,
}: RegistrationFormProps): ReactElement => {

  return (
    <form
      className={ clsx(styles.form) }
      onSubmit={ formik.handleSubmit }
    >
      <fieldset className={ clsx(styles.form_fieldset, styles.form_fieldset_gap_l) }>

        <InputElement
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          inputValue={ formik.values.lastName }
          error={ formik.errors.lastName }
          type={ 'text' }
          name={ 'lastName' }
          placeholder={ 'Фамилия *' }
          allowClear={ true }
          autoComplete={ 'true' }
          aria-required={ 'true' }
          touched={ formik.touched.lastName }
        />

        <InputElement
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          inputValue={ formik.values.firstName }
          error={ formik.errors.firstName }
          type={ 'text' }
          name={ 'firstName' }
          placeholder={ 'Имя *' }
          allowClear={ true }
          autoComplete={ 'true' }
          aria-required={ 'true' }
          touched={ formik.touched.firstName }
        />

        <InputElement
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          inputValue={ formik.values.secondName }
          error={ formik.errors.secondName }
          type={ 'text' }
          name={ 'secondName' }
          placeholder={ 'Отчество' }
          allowClear={ true }
          autoComplete={ 'true' }
          touched={ formik.touched.secondName }
        />

        <SelectElement
          name={ 'unit' }
          onBlur={ formik.handleBlur }
          error={ formik.errors.unit }
          touched={ formik.touched.unit }
          placeholder={ 'Выбор подразделения *' }
          setFieldValue={ formik.setFieldValue }
          aria-required={ 'true' }
          options={ [
            { value: 'lorem1', label: 'lorem1' },
            { value: 'lorem2', label: 'lorem2' },
            { value: 'lorem3', label: 'lorem3' },
          ] }
        />

        <SelectElement
          name={ 'position' }
          onBlur={ formik.handleBlur }
          setFieldValue={ formik.setFieldValue }
          error={ formik.errors.position }
          touched={ formik.touched.position }
          placeholder={ 'Выбор должности *' }
          aria-required={ 'true' }
          options={ [
            { value: 'lorem1', label: 'lorem1' },
            { value: 'lorem2', label: 'lorem2' },
            { value: 'lorem3', label: 'lorem3' },
          ] }
        />

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

        <InputElement
          onChange={ formik.handleChange }
          onBlur={ formik.handleBlur }
          inputValue={ formik.values.confirmedPassword }
          error={ formik.errors.confirmedPassword }
          type={ 'password' }
          name={ 'confirmedPassword' }
          placeholder={ 'Повтор пароля *' }
          allowClear={ true }
          autoComplete={ 'true' }
          aria-required={ 'true' }
          touched={ formik.touched.confirmedPassword }
        />
        <div className={ clsx(styles.form_buttons_wrapper) }>
          <ButtonElement
            className={ clsx(styles.form_button, styles.form_submit) }
            htmlType={ 'submit' }
            disabled={ !formik.isValid }
          >
            Регистрация
          </ButtonElement>
          <ButtonElement
            className={ clsx(styles.form_button, styles.form_reset) }
            htmlType={ 'reset' }
            disabled={ !formik.dirty }
            onClick={ formik.handleReset }
          >
            Отмена
          </ButtonElement>
        </div>
      </fieldset>
    </form>
  );
};
