import { Input } from '@chakra-ui/react';
import { useField } from 'formik';
import { useState } from 'react';

interface WrkFlwInputProps {
  label: string;
  name: string;
  validMessage?: string;
  required?: boolean;
  isDisabled?: boolean;
}

const FormikInputCompn = ({
  label,
  name,
  required = false,
  isDisabled = false,
}: WrkFlwInputProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [field, meta] = useField(name);
  const { error } = meta;

  return (
    <Input
      {...field}
      onBlur={() => {
        field.onBlur;
        if (required) {
          setIsValid(typeof meta.error === 'undefined');
        }
      }}
      variant="flushed"
      borderColor={isValid ? 'inherit' : '#FEB2B2'}
      focusBorderColor={isValid ? '#CBD5E0' : '#FEB2B2'}
      placeholder={isValid ? `${label}를 입력해주세요.` : error}
      _placeholder={{
        color: isValid ? '#8b8e93' : '#FEB2B2',
      }}
      isDisabled={isDisabled}
    />
  );
};

export default FormikInputCompn;
