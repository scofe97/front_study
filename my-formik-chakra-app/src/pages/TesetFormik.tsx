import React from 'react';

import FormikInputCompn from "../component/form/FormikInputCompn.tsx";
import FormikTextArea from "../component/form/FormikTextArea.tsx";
import FormikRadioCompn from "../component/form/FormikRadioCompn.tsx";
import UnderListFormContext from "../component/context/UnderListFormContext.tsx";
import {useFormikContext} from "formik";
import {FormValues} from "../component/fomik/formikUtil.ts";
import FormikCheckBoxCompn from "../component/form/FormikCheckBoxCompn.tsx";


const About: React.FC = () => {
    const {
        values
    } = useFormikContext<FormValues>();


    const isDisabled = false

    const ntcnPrcsYnItems: Record<string, string> = {
        Y: '여',
        N: '부',
    };

    const ntcnSeItems: Record<string, string>[] = [
        {
            key: '테스트1',
            value: '테스트1'
        },
        {
            key: '테스트2',
            value: '테스트2',
        },
    ];

    const defaultValue = ntcnSeItems.filter(item => item.value === 'Test 1').map(item => item.value);

    return (
        <>
            <UnderListFormContext>
                <FormikInputCompn
                    label={'컴포넌트 명'}
                    required={true}
                    name={'compnNm'}
                    isDisabled={isDisabled}
                />

                <FormikTextArea
                    label={'컴포넌트 설명'}
                    isDisabled={isDisabled}
                    name={'compnCn'}
                    maxLength={2000}
                />

                <FormikRadioCompn
                    label={'알림처리여부'}
                    items={ntcnPrcsYnItems}
                    name={'ntcnPrcsYn'}
                    isDisabled={isDisabled}
                />
                {values.ntcnPrcsYn === 'Y' && (
                    <UnderListFormContext>
                        <FormikCheckBoxCompn
                            label={'알림 구분'}
                            name={'ntcnSe'}
                            values={ntcnSeItems}
                            defaultValue={defaultValue}
                            isDisabled={isDisabled}
                        />
                        <FormikTextArea
                            maxLength={2000}
                            label={'알림 내용'}
                            name={'ntcnCn'}
                            isDisabled={isDisabled}
                        />
                    </UnderListFormContext>
                )}
            </UnderListFormContext>
        </>
    );
};

export default About;
