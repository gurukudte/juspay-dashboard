"use client";

import React, { useState } from "react";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@mui/material";

type Props = {};

const ThemeToggle = (props: Props) => {
  const { darkMode, toggleDarkMode } = useThemeContext();
  const [isdarkMode, setDarkMode] = useState(true);
  const theme = useTheme();
  return (
    <button
      onClick={() => {
        setDarkMode(!isdarkMode), toggleDarkMode();
      }}
      className="flex items-center justify-center"
    >
      {darkMode ? (
        <LightModeIcon
          sx={{ color: theme.palette.text.primary }}
          fontSize="small"
        />
      ) : (
        <DarkModeOutlinedIcon
          sx={{ color: theme.palette.text.primary }}
          fontSize="small"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
