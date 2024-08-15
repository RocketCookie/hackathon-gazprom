import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { Select } from 'antd';
import { SelectFieldProps } from './types.ts';
import styles from './index.module.css';

export const SelectField = ({
  name,
  placeholder,
  error,
  onBlur,
  options,
  touched,
  setFieldValue,
  ...props
}: SelectFieldProps): ReactElement => {
  return (

    <label htmlFor={ name }
           className={ clsx(styles.form_label) }>
      <Select
        options={ options }
        id={ name }
        onChange={ (value) => setFieldValue(name, value) }
        onBlur={ onBlur }
        placeholder={ placeholder }
        className={ clsx(styles.form_select) }
        variant={ 'borderless' }
        { ...props }
      />
      { touched && <p className={ clsx(styles.form_error) }>{ error }</p> }
    </label>
  );
};

