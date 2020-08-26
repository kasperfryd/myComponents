import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

// Here goes all states, functions etc. that need to be part of the global scope.
const [testState, setTestState] = useState()


// Return AppContext.Provider with value={ALL THE VALUES}
    return (
        <AppContext.Provider value={{testState, setTestState}}>
            {children}
        </AppContext.Provider>
    );
}

// Now import {AppContextProvider} from './context/ContextProvider'; in Top Hierachi (index.js)
// Then import { AppContext } from "../../context/ContextProvider" inside component that subscribes &  declare it with: const {testState, setTestState } = useContext(AppContext);

export { AppContext, AppContextProvider } 