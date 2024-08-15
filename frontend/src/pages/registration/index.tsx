import { clsx } from 'clsx';
import { useFormik } from 'formik';
import { colors } from '../../shared/constants/colors.ts';
import { Logo } from '../../shared/ui/logo';
import { Footer } from '../../widgets/footer';
import styles from './index.module.css';
import { initialValues } from './initial-values.ts';
import { RegistrationForm } from './ui/registration-form';
import { validationSchema } from './validationSchema.ts';

export const RegistrationPage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <div className={ clsx(styles.page_wrapper) }>
      <main className={ clsx(styles.page_content) }>
        <Logo
          fill={ colors.BLACK }
          logoSize={ 32 }
        />
        <section className={ clsx(styles.page_section) }>
          <h1 className={ clsx(styles.page_title) }>Регистрация</h1>
          <RegistrationForm
            formik={ formik }
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};
