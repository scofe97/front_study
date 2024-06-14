import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, VStack, Button } from '@chakra-ui/react';
import { Formik, Form as FormikForm, FormikHelpers } from 'formik';
import { QueryClientProvider } from '@tanstack/react-query';
import * as Yup from 'yup';
import Home from './pages/Home';
import About from './pages/About';
import queryClient from './queryClient';
import FormField from './component/FormField';
import Input from './component/Input';
import Select from './component/Select';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  favoriteColor: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  agreeToTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

function App() {

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
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <FormikForm>
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
              </FormikForm>
            )}
          </Formik>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
