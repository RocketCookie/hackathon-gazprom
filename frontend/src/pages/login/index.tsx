import { clsx } from 'clsx';
import { useFormik } from 'formik';
import { MouseEventHandler, ReactElement, useCallback, useState } from 'react';
import { colors } from '../../shared/constants/colors';
import { Logo } from '../../shared/ui/logo';
import { Footer } from '../../widgets/footer';
import styles from './index.module.css';
import { initialValues } from './initial-values.ts';
import { LoginForm } from './ui/login-form';
import { validationSchema } from './validationSchema.ts';

export const LoginPage = (): ReactElement => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
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
        <section className={ clsx(styles.page_section) }>
          <h1 className={ clsx(styles.page_title) }>Добро пожаловать!</h1>
          <LoginForm
            formik={ formik }
            handleForgotPasswordClick={ handleForgotPasswordClick }
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};
