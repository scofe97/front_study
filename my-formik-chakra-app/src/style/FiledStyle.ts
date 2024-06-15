import { chakra, Flex } from '@chakra-ui/react';

export const FieldLayout = chakra(Flex, {
    baseStyle: {
        flexDirection: 'row',
        height: '40px',
    },
});

export const FieldLabel = chakra(Flex, {
    baseStyle: {
        flexDirection: 'row',
        width: '30%',
        border: '1px solid #dbe2ec',
        alignItems: 'center',
        gap: '2',
        px: '3',
        bgColor: '#e9eff5',
        borderTopLeftRadius: 'lg',
        borderBottomLeftRadius: 'lg',
    },
});

export const FieldContent = chakra(Flex, {
    baseStyle: {
        flexDirection: 'row',
        px: '3',
        py: '2',
        width: '70%',
        border: '1px solid #dbe2ec',
        justifyContent: 'center',
        borderTopRightRadius: 'lg',
        borderBottomRightRadius: 'lg',
        alignItems: 'center',
    },
});

export const FieldListBox = chakra(Flex, {
    baseStyle: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '200px',
        overflowY: 'auto',
        position: 'absolute',
        top: '40px',
        left: '0',
        backgroundColor: 'white',
        width: '100%',
        zIndex: 30,
        borderRadius: 'md',
        borderWidth: '1px',
    },
});

export const InputContent = chakra(Flex, {
    baseStyle: {
        flexDirection: 'row',
        px: '1',
        py: '2',
        width: '100%',
        borderBottom: '1px solid #dbe2ec',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
