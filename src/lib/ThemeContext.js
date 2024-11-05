import React, { createContext, useState, useContext } from 'react';
import { theme } from './theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const updateTheme = (newTheme) => {
    setCurrentTheme((prevTheme) => ({ ...prevTheme, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
