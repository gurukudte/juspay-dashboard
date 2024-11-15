// theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

// Define light theme options
const lightThemeOptions: any = {
  palette: {
    mode: "light",
    primary: {
      main: "rgba(28, 28, 28, 1)",
    },
    secondary: {
      main: "rgba(28, 28, 28, 0.4)",
    },
    text: {
      primary: "rgba(0, 0, 0, 1)", // Equivalent to "black-100"
      secondary: "rgba(0, 0, 0, 0.4)", // Equivalent to "black-40"
      disabled: "rgba(0, 0, 0, 0.2)", // Equivalent to "black-20"
      hint: "rgba(0, 0, 0, 0.1)", // Equivalent to "black-10"
      black5: "rgba(0, 0, 0, 0.05)", // Equivalent to "black-5" (custom)
    },
  },
  typography: {
    fontFamily: ["var(--font-inter)", "sans-serif"].join(","),
  },
};

// Define dark theme options
const darkThemeOptions: any = {
  palette: {
    mode: "dark",
    primary: {
      main: "rgba(255, 255, 255, 1)",
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.4)",
    },
    text: {
      primary: "rgba(255, 255, 255, 1)", // Equivalent to "black-100"
      secondary: "rgba(255, 255, 255, 0.4)", // Equivalent to "black-40"
      disabled: "rgba(255, 255, 255, 0.2)", // Equivalent to "black-20"
      hint: "rgba(255, 255, 255, 0.1)", // Equivalent to "black-10"
      black5: "rgba(255, 255, 255, 0.05)", // Equivalent to "black-5" (custom)
    },
  },
  typography: {
    fontFamily: ["var(--font-inter)", "sans-serif"].join(","),
  },
};

// Create light and dark themes
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
