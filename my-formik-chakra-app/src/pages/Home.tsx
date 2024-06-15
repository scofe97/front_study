import React from 'react';
import {Box, Button, Heading, VStack} from '@chakra-ui/react';
import {Form, Formik, FormikHelpers} from "formik";
import FormField from "../component/FormField.tsx";
import Input from "../component/Input.tsx";
import Select from "../component/Select.tsx";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    favoriteColor: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    agreeToTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

const Home: React.FC = () => {

    const initialValues = {
        name: '',
        email: '',
        favoriteColor: '',
        description: '',
        agreeToTerms: false,
    };

    const handleSubmit = (values: any, actions: FormikHelpers<any>) => {
        console.log('Form Values:', values);
        actions.setSubmitting(false);
    };


  return (
    <Box p={4}>
      <Heading>Home Page</Heading>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {() => (
                <Form>
                    <VStack spacing={4} p={4}>
                        <FormField name="name" label="Name">
                            <Input name="name" />
                        </FormField>

                        <FormField name="email" label="Email">
                            <Input name="email" type="email" />
                        </FormField>

                        <FormField name="favoriteColor" label="Favorite Color">
                            <Select
                                name="favoriteColor"
                                options={[
                                    { value: 'red', label: 'Red' },
                                    { value: 'green', label: 'Green' },
                                    { value: 'blue', label: 'Blue' },
                                ]}
                                placeholder="Select your favorite color"
                            />
                        </FormField>

                        <Button type="submit" colorScheme="teal" mt={4}>
                            Submit
                        </Button>
                    </VStack>
                </Form>
            )}
        </Formik>
    </Box>
  );
};

export default Home;
