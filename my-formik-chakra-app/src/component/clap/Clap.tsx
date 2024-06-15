import {Children, createContext, isValidElement, ReactElement, ReactNode, useState} from 'react';
import {Box} from '@chakra-ui/react';
import ClapIcon from "./ClapIcon.tsx";
import ClapCount from "./ClapCount.tsx";
import ClapTotal from "./ClapTotal.tsx";


interface ClapContextType {
    count: number;
    increment: () => void;
}

export const ClapContext = createContext<ClapContextType | undefined>(undefined);

interface ClapProps {
    children: ReactNode;
    onClap: () => void
};

const Clap = ({children, onClap}: ClapProps) => {

    const [count, setCount] = useState(0);
    const increment = () =>{
        onClap();
        setCount(count + 1);
    }

    const filteredChildren = Children.toArray(children).filter(
        child => isValidElement(child)
    ) as ReactElement[];

    const icon = filteredChildren.find(child => child.type === ClapIcon);
    const countDisplay = filteredChildren.find(child => child.type === ClapCount);
    const totalDisplay = filteredChildren.find(child => child.type === ClapTotal);
    const otherChildren = filteredChildren.filter(child => ![icon, countDisplay, totalDisplay].includes(child));

    return (
        <ClapContext.Provider value={{count, increment}}>
            <div>
                {icon}
                {countDisplay}
                {totalDisplay}
            </div>

            <Box>{otherChildren}</Box>
        </ClapContext.Provider>
    );
};

export default Clap