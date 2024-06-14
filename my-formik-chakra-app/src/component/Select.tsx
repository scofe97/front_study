import React from 'react';
import { Select as ChakraSelect, SelectProps as ChakraSelectProps } from '@chakra-ui/react';
import { useField } from 'formik';

interface SelectProps extends ChakraSelectProps {
  name: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ name, options, placeholder, ...props }) => {
  const [field] = useField(name);
  return (
    <ChakraSelect {...field} {...props}>
      <option value="">{placeholder || 'Select an option'}</option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  );
};

export default Select;
