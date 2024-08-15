import { SelectProps } from 'antd';
import { FormikErrors } from 'formik';
import { ChangeEventHandler } from 'react';
import { RegistrationForm } from '../../../pages/registration/types.ts';

export type SelectFieldProps = {
  name: string;
  error: string | undefined;
  touched: boolean | undefined;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) =>
    Promise<void | FormikErrors<RegistrationForm>>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
} & SelectProps;
