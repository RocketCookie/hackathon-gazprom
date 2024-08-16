import { Button } from 'antd';
import { clsx } from 'clsx';
import { ReactElement } from 'react';
import { ButtonElementProps } from './types.ts';
import styles from './index.module.css';

enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

export const ButtonElement = ({
  htmlType,
  children,
  className,
}: ButtonElementProps): ReactElement => {
  return (
    <Button
      htmlType={ htmlType ?? ButtonType.BUTTON }
      className={
        clsx(
          styles.button,
          { [styles.button_type_reset]: htmlType === ButtonType.RESET },
          { [styles.button_type_submit]: htmlType === ButtonType.SUBMIT || htmlType === ButtonType.BUTTON },
          { [className]: className },
        )
      }
    >
      { children }
    </Button>
  );
};
