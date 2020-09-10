import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

// Here goes all states, functions etc. that need to be part of the global scope.
const [loginData, setLoginData] = useState([])


  // Navbar options
  const navOptions = {
    height: "50px",
    navlinks : [
      {main:"HOME"}, 
      {main:"COMPONENTS", sub:["GRIDBOX", "BASKET", "IMAGEBOX", "CAROUSEL", "MODAL", "ACCORDION", "FORM"]}, 
      {main: "FUNCTIONS", sub:["SORT", "TIME"]}, 
      {main:"LOGIN"},
    ],
    search: false,
  }

  // useEffect der gemmer logindata fra sessionStorage
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setLoginData(JSON.parse(sessionStorage.getItem("token")))
    }
  }, [setLoginData])

  // Funktion til at lave fetch - sendes med ind i de komponenter der skal fetche
  async function doFetch(url) {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
    catch (error) {
      console.log(error)
    }
  }
// Return AppContext.Provider with value={ALL THE VALUES}
    return (
        <AppContext.Provider value={{doFetch, loginData, setLoginData, navOptions}}>
            {children}
        </AppContext.Provider>
    );
}

// Now import {AppContextProvider} from './context/ContextProvider'; in Top Hierachi (index.js)
// Then import { AppContext } from "../../context/ContextProvider" inside component that subscribes &  declare it with: const {testState, setTestState } = useContext(AppContext);

export { AppContext, AppContextProvider } 