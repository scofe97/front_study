import {Text} from '@chakra-ui/react';
import {useContext} from "react";
import {ClapContext} from "./Clap.tsx";


const ClapTotal = () => {
    const context = useContext(ClapContext);
    const total = 100 + (context?.count ?? 0);

    return <Text fontSize="md">Total claps: {total}</Text>;
};

export default ClapTotal