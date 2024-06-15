import { Formik } from 'formik';
import * as Yup from 'yup';

interface TicketFormProps<T> {
  initData: T;
  validate: Yup.ObjectSchema<object>;
  onSubmit: (formData: T) => void;
  children: React.ReactNode;
}

const FormContext = <T extends object>({
  initData,
  validate,
  onSubmit,
  children,
}: TicketFormProps<T>) => {
  return (
    <Formik
      initialValues={initData}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      {children}
    </Formik>
  );
};

export default FormContext;
