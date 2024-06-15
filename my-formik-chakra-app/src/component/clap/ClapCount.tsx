import React, {useContext} from 'react';
import {Text} from '@chakra-ui/react';
import {ClapContext} from "./Clap.tsx";


const ClapCount: React.FC = ({count, handleCount} : ClapCountProps) => {
    const context = useContext(ClapContext);

    return <Text fontSize="2xl">{context?.count}</Text>;
};

export default ClapCount;