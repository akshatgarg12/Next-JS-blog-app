import {createContext, useState} from 'react'
import {THEME} from '../../config/constants';

export const ThemeContext = createContext<any>(null);

const ThemeContextProvider: React.FC = (props) => {

  const [isLight, setIsLight] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{
      isLight,
      setIsLight,
      theme:isLight?THEME.light:THEME.dark
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
 
export default ThemeContextProvider;