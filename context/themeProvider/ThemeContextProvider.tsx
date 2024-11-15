// ThemeContextProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ThemeProvider, CssBaseline, Theme } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { useTheme } from "@emotion/react";

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
