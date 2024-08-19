import * as yup from 'yup';
import { LoginForm } from './types.ts';

export const validationSchema: yup.ObjectSchema<LoginForm> = yup.object({
  email: yup
    .string()
    .email('Такого email не существует')
    .required('Нужно ввести email'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть длиннее 8 символов')
    .required('Нужно ввести пароль'),
});
