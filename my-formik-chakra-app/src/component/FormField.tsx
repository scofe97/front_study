import { ReactNode } from 'react';
import { useField } from 'formik';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

interface FormFieldProps {
  label?: string;
  name: string;
  children: ReactNode;
}

const FormField = ({ label, name, children } : FormFieldProps) => {
  const [, meta] = useField(name);

  return (
    <FormControl isInvalid={meta.touched && !!meta.error}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      {children}
      {meta.touched && meta.error ? <FormErrorMessage>{meta.error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default FormField;
