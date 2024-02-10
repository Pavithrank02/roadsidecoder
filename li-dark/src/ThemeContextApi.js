import { Children } from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState)
  }

  const theme = isDarkMode ? 'dark': 'light';

  return (
    <ThemeProvider value={{theme, toggleTheme}}>
      {children}
    </ThemeProvider>
  )
}