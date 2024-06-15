import {Button, ButtonProps as ChakraButtonProps,} from "@chakra-ui/react";

type AdditionalButtonProps = Omit<ChakraButtonProps, 'onClick' | 'type'>;

interface ButtonProps extends AdditionalButtonProps {
    btnText: string;
    onClick?: () => void;
    valid?: boolean;
    actionType?: 'submit' | 'reset' | 'button';
}

export const DefaultButton = ({
                           btnText,
                           onClick,
                           valid = true,
                           actionType = 'button',
                           ...rest
                       }: ButtonProps) => (
    <Button
        {...rest}
        colorScheme="gray"
        size="sm"
        onClick={onClick}
        isDisabled={!valid}
        type={actionType as any}
    >
        {btnText}
    </Button>
);

export const CancelButton = ({
                          btnText,
                          onClick,
                          valid = true,
                          actionType = 'button',
                          ...rest
                      }: ButtonProps) => (
    <Button
        {...rest}
        size="sm"
        onClick={onClick}
        isDisabled={!valid}
        type={actionType as any}
        variant="cancel"
    >
        {btnText}
    </Button>
);

export const CreateButton = ({
                          btnText,
                          onClick,
                          valid = true,
                          actionType = 'button',
                          ...rest
                      }: ButtonProps) => (
    <Button
        {...rest}
        size="sm"
        onClick={onClick}
        isDisabled={!valid}
        type={actionType as any}
        variant="submit"
    >
        {btnText}
    </Button>
);

interface BtnType {
    type: 'default' | 'cancel' | 'create';
    actionType?: 'submit' | 'reset' | 'button';
}

export interface BtnList
    extends BtnType,
        Omit<ChakraButtonProps, 'type' | 'onClick'> {
    btnText: string;
    onClick?: () => void;
    valid?: boolean;
}
