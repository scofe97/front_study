import {
  FormErrorMessage,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import { useField } from 'formik';

interface FormikNumberInputProps {
  name: string;
  variant?: string;
  step?: number;
  min?: number;
  max?: number;
}

const FormikNumberInput = ({
  name,
  variant = 'flush',
  step = 1,
  min = 1,
  max = 99,
}: FormikNumberInputProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <NumberInput
        {...field}
        variant={variant}
        step={step}
        min={min}
        max={max}
        onChange={(valueAsNumber) => helpers.setValue(valueAsNumber)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
    </>
  );
};

export default FormikNumberInput;
