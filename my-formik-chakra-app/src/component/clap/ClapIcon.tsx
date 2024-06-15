import { Button } from '@chakra-ui/react';
import {useContext} from "react";
import {ClapContext} from "./Clap.tsx";

const ClapIcon = () => {
    const { increment } = useContext(ClapContext) || { increment: () => {} };

    return(
        <Button size="lg" colorScheme="teal" onClick={increment}>
            👏
        </Button>
    )
};

export default ClapIcon;