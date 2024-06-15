import { Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { useField } from 'formik';

interface WrkFlwRadioProps {
  label: string;
  required?: boolean;

  name: string;
  items: Record<string, string>;
  isDisabled?: boolean;
}

const FormikRadioCompn = ({
  name,
  items,
  isDisabled = false,
}: WrkFlwRadioProps) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <RadioGroup
      id={name}
      name={name}
      onChange={(e) => {
        setValue(e);
      }}
      onBlur={field.onBlur}
      value={value}
      isDisabled={isDisabled}
    >
      <Stack direction="row">
        {Object.entries(items).map(([key, v]) => (
          <Radio key={key} value={key}>
            {v}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
};

export default FormikRadioCompn;
