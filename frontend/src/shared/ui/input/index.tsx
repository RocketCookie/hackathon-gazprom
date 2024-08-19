import { Input } from 'antd';
import { clsx } from 'clsx';
import { ReactElement } from 'react';
import styles from './index.module.css';
import { InputElementProps } from './types.ts';

export const InputElement = ({
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
}: InputElementProps): ReactElement => {
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
