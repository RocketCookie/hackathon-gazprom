import * as yup from 'yup';
import { RegistrationForm } from './types.ts';

export const validationSchema: yup.ObjectSchema<RegistrationForm> = yup.object({
  lastName: yup
    .string()
    .min(2, 'Нужно ввести минимум 2 символа')
    .required('Нужно ввести Фамилию'),
  firstName: yup
    .string()
    .min(2, 'Нужно ввести минимум 2 символа')
    .required('Нужно ввести имя'),
  secondName: yup
    .string()
    .min(2, 'Нужно ввести минимум 2 символа'),
  unit: yup
    .string()
    .required('Нужно выбрать подразделение'),
  position: yup
    .string()
    .required('Нужно выбрать должность'),
  email: yup
    .string()
    .email('Такого email не существует')
    .required('Нужно ввести email'),
  password: yup
    .string()
    .min(8, 'Пароль должен быть длиннее 8 символов')
    .required('Нужно ввести пароль'),
  confirmedPassword: yup
    .string()
    .min(8, 'Пароль должен быть длиннее 8 символов')
    .oneOf(
      [yup.ref('password')],
      'Пароли должны совпадать',
    )
    .required('Нужно ввести пароль'),
});
