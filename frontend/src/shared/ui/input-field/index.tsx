import { Input } from 'antd';
import { clsx } from 'clsx';
import { ReactElement } from 'react';
import styles from './index.module.css';
import { InputFieldProps } from './types.ts';

export const InputField = ({
  onChange,
  onBlur,
  inputValue,
  error,
  type,
  name,
  touched,
  placeholder,
  allowClear,
  autoComplete,
  ...props
}: InputFieldProps): ReactElement => {
  return (
    <label htmlFor={ name }
           className={ clsx(styles.form_label) }>
      <Input
        name={ name }
        id={ name }
        onChange={ onChange }
        onBlur={ onBlur }
        value={ inputValue }
        type={ type }
        placeholder={ placeholder }
        allowClear={ allowClear }
        autoComplete={ autoComplete }
        className={ clsx(styles.form_input) }
        { ...props }
      />
      { touched && <p className={ clsx(styles.form_error) }>{ error }</p> }
    </label>
  );
};
