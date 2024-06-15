import {Flex} from "@chakra-ui/react";
import {BreadcrumbComponent} from "./Breadcrumb.tsx";
import {BtnList, CancelButton, CreateButton, DefaultButton} from "../ButtonCompn.tsx";

interface CrumbHeaderProps {
    isBreadCrumb?: boolean;
    btnList?: BtnList[];
}

export const CrumbHeader = ({
                                isBreadCrumb = true,
                                btnList = [],
                            }: CrumbHeaderProps) => (
    <Flex
        width="100%"
        height="50px"
        alignItems="center"
        justifyContent="space-between"
        px="2%"
        borderBottom="1px solid #ccc"
    >
        {isBreadCrumb ? <BreadcrumbComponent /> : <div></div>}
        <Flex direction="row" gap="3">
            {btnList.map((btn, index) => {
                switch (btn.type) {
                    case 'cancel':
                        return <CancelButton key={index} {...btn} />;
                    case 'create':
                        return <CreateButton key={index} {...btn} />;
                    default:
                        return <DefaultButton key={index} {...btn} />;
                }
            })}
        </Flex>
    </Flex>
);