import {
    ChangeEvent,
    KeyboardEvent,
    FocusEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import {ChevronDownIcon, ChevronUpIcon} from "../../style/Icon";
import {FieldListBox, InputContent, FieldLayout} from "../../style/FiledStyle.ts";


interface SearchInputProps {
    searchKey: string;
    name: string;
    value: string;
    onChange: (item: string) => void;
    selectList: Record<string, any>[] | undefined;
    placeholder: string;
}

export const SearchInput = ({
                                searchKey,
                                name,
                                value,
                                onChange,
                                selectList,
                                placeholder,
                            }: SearchInputProps) => {
    const [hideList, setHideList] = useState<boolean>(true);
    const [dropList, setDropList] = useState(selectList ?? []);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setDropList(selectList || []);
    }, [selectList]);

    useEffect(() => {
        if (!hideList) {
            setFocusedIndex(-1);
        }
    }, [hideList]);

    const handleItemClick = (item: string) => {
        onChange(item);
        setHideList(true);
        inputRef.current?.focus();
    };

    const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
        // Close dropdown if focus is outside the component
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
            setHideList(true);
        }
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChange(inputValue);
        setHideList(false);
        if (inputValue === '') {
            setDropList(selectList || []);
        } else {
            const filteredList =
                selectList?.filter((item) =>
                    item[searchKey]?.toLowerCase().includes(inputValue.toLowerCase()),
                ) || [];
            setDropList(filteredList);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' && focusedIndex < dropList.length - 1) {
            setFocusedIndex(focusedIndex + 1);
            e.preventDefault();
        } else if (e.key === 'ArrowUp' && focusedIndex > 0) {
            setFocusedIndex(focusedIndex - 1);
            e.preventDefault();
        } else if (e.key === 'Enter' && focusedIndex >= 0) {
            handleItemClick(dropList[focusedIndex][searchKey]);
            e.preventDefault();
        }
    };

    return (
        <FieldLayout onBlur={handleBlur}>
            <InputContent position="relative">
                <InputGroup>
                    <Input
                        ref={inputRef}
                        name={name}
                        value={value}
                        fontSize="0.9rem"
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        variant="flushed"
                        borderColor="white"
                        focusBorderColor="gray.400"
                        errorBorderColor="red.300"
                        _placeholder={{ color: '#8b8e93' }}
                        height="30px"
                        autoComplete="off"
                    />
                    <InputRightElement
                        as={Button}
                        bgColor="transparent"
                        height="30px"
                        onClick={() => setHideList(!hideList)}
                    >
                        {hideList ? <ChevronDownIcon /> : <ChevronUpIcon />}
                    </InputRightElement>
                </InputGroup>
                <FieldListBox ref={listRef} display={hideList ? 'none' : 'flex'}>
                    {dropList.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => handleItemClick(item[searchKey])}
                            fontSize="0.9rem"
                            bgColor={focusedIndex === index ? '#CBD5E0' : 'transparent'}
                            textAlign="left"
                            textColor="black"
                            height="25px"
                            onMouseEnter={() => setFocusedIndex(index)}
                            _hover={{ bgColor: '#CBD5E0' }}
                        >
                            <Box textAlign="left" width="100%" fontWeight="100">
                                {item[searchKey]}
                            </Box>
                        </Button>
                    ))}
                </FieldListBox>
            </InputContent>
        </FieldLayout>
    );
};


