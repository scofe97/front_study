import {ReactElement} from "react";
import {useLocation} from "react-router-dom";
import { Box, Button, Flex } from '@chakra-ui/react';
import {useStableNavigate} from "../context/StableNavigateContextProvider.tsx";

interface PageHeaderProps {
    title: string;
    description: string;
    createButton?: boolean;
    children?: ReactElement;
}

export const PageHeader = ({
                               title,
                               description,
                               createButton = false,
                               children,
                           }: PageHeaderProps) => {
    const navigate = useStableNavigate();
    const location = useLocation().pathname;
    const createHandler = () => {
        navigate(`${location}/create`);
    };

    return (
        <>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                pb={3}
                mb={4}
                borderBottom={'1px solid #ddd'}
                width="100%"
            >
                <Flex alignItems={'center'} gap={3}>
                    <Box fontWeight={'bold'}>{title}</Box>
                    <Box fontSize={'sm'}>{description}</Box>
                </Flex>
                {createButton && <Button onClick={createHandler}>신규 등록</Button>}
                {children}
            </Flex>
        </>
    );
};