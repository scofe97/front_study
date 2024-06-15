import * as Yup from 'yup';


// 인터페이스 정의: 폼의 초기값
export interface FormValues {
    compnNm: string;
    compnCn: string;
    ntcnPrcsYn: string;
    ntcnSe?: string[];
    ntcnCn?: string;
}

// 초기값
export const initialValues: FormValues = {
    compnNm: '', // 컴포넌트 명
    compnCn: '', // 컴포넌트 설명
    ntcnPrcsYn: '', // 알림처리여부
    ntcnSe: [], // 알림 구분
    ntcnCn: '' // 알림 내용
};

// 유효성 검사 스키마
export const validationSchema = Yup.object({
    compnNm: Yup.string()
        .required('컴포넌트 명은 필수 입력 사항입니다.'),
    compnCn: Yup.string()
        .max(2000, '컴포넌트 설명은 최대 2000자까지 입력 가능합니다.'),
    ntcnPrcsYn: Yup.string()
        .required('알림 처리 여부는 필수 선택 사항입니다.'),
    ntcnSe: Yup.array()
        .of(Yup.string())
        .required('알림 구분은 필수 선택 사항입니다.'),
    ntcnCn: Yup.string()
        .max(2000, '알림 내용은 최대 2000자까지 입력 가능합니다.')
});