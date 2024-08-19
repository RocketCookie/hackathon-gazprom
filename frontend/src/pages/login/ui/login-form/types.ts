import { FormikProps } from 'formik';
import { MouseEventHandler } from 'react';
import { LoginForm } from '../../types.ts';

export type LoginFormProps = {
  formik: FormikProps<LoginForm>;
  handleForgotPasswordClick: MouseEventHandler;
}
