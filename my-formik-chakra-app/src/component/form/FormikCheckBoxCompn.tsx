import {Checkbox, CheckboxGroup, Stack} from '@chakra-ui/react';
import {useField} from 'formik';

interface CheckBoxProps<T> {
    label: string;
    name: string;
    values: T[]
    defaultValue: string[];
    isDisabled?: boolean;
}


const FormikCheckBoxCompn = <T extends Record<string, string>>({
                                 name,
                                 values,
                                 defaultValue,
                                 isDisabled = false,
                             }: CheckBoxProps<T>) => {
    const helpers = useField(name)[2];

    return (
        <CheckboxGroup
            colorScheme="blue"
            onChange={helpers.setValue}
            isDisabled={isDisabled}
            defaultValue={defaultValue}
        >
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                {values.map((value) => (
                    <Checkbox value={value.cd} key={value.cd}>
                        {value.cdNm}
                    </Checkbox>
                ))}
            </Stack>
        </CheckboxGroup>
    );
};

export default FormikCheckBoxCompn;