import {Button, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip, useDisclosure,} from '@chakra-ui/react';
import {useField} from 'formik';
import {ChevronDownIcon, ChevronUpIcon} from "../../style/Icon";


interface WrkflwCompnSelectItemProps {
  label: string;
  name: string;
  items: Record<string, string>;
  required?: boolean;
}

const FormikSelectItemCompn = ({
  label,
  name,
  items,
}: WrkflwCompnSelectItemProps) => {
  const [field, meta, helpers] = useField(name);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setValue } = helpers;

  const handleMenuItemClick = (key: string) => {
    setValue(key);
    onClose();
  };

  return (
      <Menu isOpen={isOpen} onClose={onClose} matchWidth={true}>
        <Tooltip label={meta.error ?? meta.error}>
          <MenuButton
            px={3}
            as={Button}
            w="100%"
            transition="all 0.2s"
            borderBottom="1px"
            bgColor="transparent"
            _hover={{ bg: 'transparent' }}
            _expanded={{ bg: 'transparent' }}
            textAlign="start"
            fontSize=".9rem"
            fontWeight="0"
            variant="flushed"
            borderColor={
              field.value === ''
                ? meta.error && meta.touched
                  ? '#FEB2B2'
                  : 'inherit'
                : 'black'
            }
            borderRadius={0}
            color={
              field.value === ''
                ? meta.error && meta.touched
                  ? '#FEB2B2'
                  : '#8b8e93'
                : 'black'
            }
            rightIcon={
              isOpen ? (
                <ChevronUpIcon boxSize={4} h="20px" />
              ) : (
                <ChevronDownIcon boxSize={4} h="20px" />
              )
            }
            onClick={isOpen ? onClose : onOpen}
          >
            {field.value === ''
              ? `${label}를 선택하세요`
              : items?.[field.value] ?? 'selectList key Mapping 오류'}
          </MenuButton>
        </Tooltip>

        <MenuList py={1}>
          {items ? (
            Object.entries(items).map(([key, value]) => (
              <MenuItem
                key={key}
                fontSize=".8rem"
                fontWeight="400"
                color="gray.600"
                py="0"
                onClick={() => handleMenuItemClick(key)}
              >
                {value.toString()}
              </MenuItem>
            ))
          ) : (
            <Text>목록 불러오기 오류</Text>
          )}
        </MenuList>
      </Menu>
  );
};

export default FormikSelectItemCompn;
