import {
  Form,
  FormikContextType,
  FormikErrors,
  useFormikContext,
} from 'formik';

import {ContentLayout} from "../../style/MainStyle.ts";
import {BtnList} from "../ButtonCompn.tsx";
import {CrumbHeader} from "../layout/CrumbHeader.tsx";
import {PageHeader} from "../layout/PageHeader.tsx";

interface TicketMainProps<T> {
  headerTitle: string;
  headerSubTitle: string;
  createBtnList: (
    errors: FormikErrors<T>,
    handleSubmit: FormikContextType<T>['handleSubmit'],
    dirty?: boolean,
  ) => BtnList[];
  children: React.ReactNode;
}

const FormMain = <T,>({
  headerTitle,
  headerSubTitle,
  createBtnList,
  children,
}: TicketMainProps<T>) => {
  const { errors, handleSubmit, dirty } = useFormikContext<T>(); // 제네릭 타입 T 사용

  return (
    <>
      <CrumbHeader btnList={createBtnList(errors, handleSubmit, dirty)} />
      <ContentLayout>
        <PageHeader title={headerTitle} description={headerSubTitle} />
        <Form>{children}</Form>
      </ContentLayout>
    </>
  );
};

export default FormMain;
