"use client";
import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";
import { styled } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";

interface AppBarProps extends MuiAppBarProps {
  leftDrawerOpen?: boolean;
  rightDrawerOpen?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "leftDrawerOpen" && prop !== "rightDrawerOpen",
})<AppBarProps>(
  ({ theme, leftDrawerOpen = false, rightDrawerOpen = false }) => {
    // Set leftDrawerWidth based on leftDrawerOpen state
    const leftDrawerWidthValue = leftDrawerOpen ? leftDrawerWidth : 0;

    return {
      background: "white",
      boxShadow: "none",

      // Apply conditional styles
      width: `calc(100% - ${
        leftDrawerWidthValue + (rightDrawerOpen ? rightDrawerWidth : 0)
      }px)`,
      marginLeft: leftDrawerOpen ? `${leftDrawerWidthValue}px` : 0,
      marginRight: rightDrawerOpen ? `${rightDrawerWidth}px` : 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    };
  }
);

export default AppBar;
