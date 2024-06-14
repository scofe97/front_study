import React from 'react';
import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import { useField } from 'formik';

interface CustomInputProps extends InputProps {
  name: string;
}

const Input: React.FC<CustomInputProps> = ({ name, ...props }) => {
  const [field] = useField(name);
  return <ChakraInput {...field} {...props} />;
};

export default Input;
