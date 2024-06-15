import { Box, Flex, FormErrorMessage, Textarea } from '@chakra-ui/react';
import { useField } from 'formik';
import { useState } from 'react';

interface FormikTextAreaProps {
  label: string;
  required?: boolean;

  name: string;
  placeholder?: string;
  size?: string;
  maxLength?: number;
  isDisabled?: boolean;
}
const FormikTextArea = ({
  name,
  placeholder = '값을 입력해주세요',
  size = 'sm',
  maxLength = 300,
  isDisabled = true,
}: FormikTextAreaProps) => {
  const [field, meta] = useField(name);
  const [charCount, setCharCount] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    field.onChange(e);
  };

  return (
    <>
      <Textarea
        {...field}
        placeholder={placeholder}
        size={size}
        maxLength={maxLength}
        onChange={handleChange}
        isDisabled={isDisabled}
      />
      {meta.touched && meta.error && (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      )}
      <Flex justify="flex-end">
        <Box>
          {charCount}/{maxLength}
        </Box>
      </Flex>
    </>
  );
};

export default FormikTextArea;
