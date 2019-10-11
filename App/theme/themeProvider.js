import React, { useContext, useState, useEffect } from 'react';

export const ThemeContext = React.createContext();

import storageService from '../utils/storageService';


import Themes from './themes.json';



export const ThemeContextProvider = ({ children }) => {
    const [themeID, setThemeID] = useState();
    
    useEffect(() => {
      (async () => {
        const storedThemeID = await storageService.getThemeId();
        if (storedThemeID) setThemeID(storedThemeID);
        else setThemeID(Themes[0].key);
      })();
    }, []);
    return (
      <ThemeContext.Provider value={{ themeID, setThemeID }}>
        {!!themeID ? children : null}
      </ThemeContext.Provider>
    );
  };
  
  export function wrapTheme(Component) {
    return props => {
      const { themeID, setThemeID } = useContext(ThemeContext);
      const getTheme = themeID => Themes.find(theme => theme.key === themeID);
      const setTheme = themeID => setThemeID(themeID);

      return <Component {...props} themes={Themes} theme={getTheme(themeID)}
        setTheme={setTheme}/>;
    };
  }