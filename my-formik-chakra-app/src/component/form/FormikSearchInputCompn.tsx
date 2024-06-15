
import {Box, Flex, FormLabel, ListItem} from '@chakra-ui/react';
import {useField} from 'formik';
import {SearchInput} from "./SearchInput.tsx";

interface WrkflwCompnSearchInputProps {
  name: string;
  label: string;
  required?: boolean;
  selectList: Record<string, any>[] | undefined;
  selectKey: string;
}

const FormikSearchInputCompn = ({
  name,
  label,
  required = false,
  selectList,
  selectKey,
}: WrkflwCompnSearchInputProps) => {
  const meta = useField(name)[1];
  const helpers = useField(name)[2];

  return (
    <ListItem>
      <FormLabel as="h4" size="sm">
        <Flex gap={2}>
          {label}
          {required ? <Box color={'red'}>*</Box> : null}
        </Flex>
      </FormLabel>
      <SearchInput
        searchKey={selectKey}
        name={name}
        value={meta.value}
        onChange={(value) => {
          helpers.setValue(value);
        }}
        selectList={selectList}
        placeholder={label + '를 입력해주세요.'}
      />
    </ListItem>
  );
};

export default FormikSearchInputCompn;
