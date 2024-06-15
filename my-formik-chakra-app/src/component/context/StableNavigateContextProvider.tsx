import {
    createContext,
    MutableRefObject,
    ReactElement,
    useContext,
    useRef,
} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

const StableNavigateContext =
    createContext<MutableRefObject<NavigateFunction> | null>(null);

const StableNavigateContextProvider = ({
                                           children,
                                       }: {
    children: ReactElement;
}) => {
    const navigate = useNavigate();
    const navigateRef = useRef(navigate);

    return (
        <StableNavigateContext.Provider value={navigateRef}>
            {children}
        </StableNavigateContext.Provider>
    );
};

const useStableNavigate = (): NavigateFunction => {
    const navigateRef = useContext(StableNavigateContext);
    if (navigateRef?.current === null)
        throw new Error('StableNavigate context is not initialized');

    return navigateRef?.current as NavigateFunction;
};

export {
    StableNavigateContext,
    StableNavigateContextProvider,
    useStableNavigate,
};
