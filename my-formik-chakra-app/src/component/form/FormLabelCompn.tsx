import { Box, Flex, FormLabel } from '@chakra-ui/react';

interface WrkflwCompnFormLabelProps {
    label: string;
    required?: boolean;
}

const FormLabelCompn = ({
                            label,
                            required = false,
                        }: WrkflwCompnFormLabelProps) => {
    return (
        <FormLabel as="h4" size="sm">
            <Flex gap={2}>
                {label}
                {required ? <Box color={'red'}>*</Box> : null}
            </Flex>
        </FormLabel>
    );
};

export default FormLabelCompn;