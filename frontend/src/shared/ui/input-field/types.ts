import { InputProps } from 'antd';
import { ChangeEventHandler } from 'react';

export type InputFieldProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: ChangeEventHandler<HTMLInputElement>;
  inputValue: string | undefined;
  error: string | undefined;
  name: string;
  touched: boolean | undefined;
} & InputProps;
