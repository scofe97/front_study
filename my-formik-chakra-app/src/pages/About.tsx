import React from 'react';
import {Box, Heading} from '@chakra-ui/react';
import ClapIcon from "../component/clap/ClapIcon.tsx";
import ClapCount from "../component/clap/ClapCount.tsx";
import ClapTotal from "../component/clap/ClapTotal.tsx";
import Clap from "../component/clap/Clap.tsx";
import TesetFormik from "./TesetFormik.tsx";
import FormContext from "../component/fomik/FormContext.tsx";
import {Form} from "formik";
import {initialValues, validationSchema} from "../component/fomik/formikUtil.ts";


const About: React.FC = () => {
    const handleClap = () => console.log('Clapped!');

    return (
        <Box p={4}>
            <Heading>About Page</Heading>

            <Clap onClap={handleClap}>
                <ClapIcon/>
                <ClapCount />
                <ClapTotal />
                <div>123</div>
            </Clap>

            <FormContext
                initData={initialValues}
                validate={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
            <Form>
                <TesetFormik />
            </Form>
            </FormContext>
        </Box>
    );
};

export default About;
