import { clsx } from 'clsx';
import { useFormik } from 'formik';
import { MouseEventHandler, useCallback, useState } from 'react';
import { Logo } from '../../shared/ui/logo';
import { Footer } from '../../widgets/footer';
import { LoginForm } from '../../widgets/login-form';
import styles from './index.module.css';
import { colors } from '../../shared/constants/colors';
import { initialValues } from './initial-values.ts';
import { validationSchema } from './validationSchema.ts';

export const Login = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (): void => {},
  });

  const [isPasswordForgot, setIsPasswordForgot] = useState<boolean>(false);

  const handleForgotPasswordClick: MouseEventHandler = useCallback(() => {
    setIsPasswordForgot(!isPasswordForgot);
  }, [isPasswordForgot]);

  return (
    <div className={ clsx(styles.page_wrapper) }>
      <main className={ clsx(styles.page_content) }>
        <Logo
          fill={ colors.BLACK }
          logoSize={ 32 }
        />
        <h1 className={ clsx(styles.page_title) }>Добро пожаловать!</h1>
        <LoginForm
          formik={ formik }
          handleForgotPasswordClick={ handleForgotPasswordClick }
        />
      </main>
      <Footer />
    </div>
  );
};
