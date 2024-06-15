import {ListItem, UnorderedList} from '@chakra-ui/react';
import {Children, isValidElement, ReactElement, ReactNode} from 'react';
import FormLabelCompn from "../form/FormLabelCompn.tsx";

interface WrkflwCompnFormProps {
  children: ReactNode;
}

const UnderListFormContext = ({ children }: WrkflwCompnFormProps) => {

  const validChildren = Children.toArray(children)
      .filter(isValidElement)

  const wrappedChildren = validChildren.map((child: ReactElement) => {
    const label = child.props.label ? child.props.label : null;
    const required = child.props.required ? child.props.required : null;
    const isNested = child.type === UnderListFormContext;

    const content = (
        <>
          {label && <FormLabelCompn label={label} required={required} />}
          {child}
        </>
    );


    return isNested ? content : <ListItem key={child.key}>{content}</ListItem>;
  })

  return <UnorderedList spacing={3}>{wrappedChildren}</UnorderedList>;
};

export default UnderListFormContext;
