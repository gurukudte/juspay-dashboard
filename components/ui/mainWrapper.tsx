import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  isLeftDrawerOpen?: boolean;
  isRightDrawerOpen?: boolean;
}

const MainWrapper = ({
  children,
  isLeftDrawerOpen,
  isRightDrawerOpen,
}: MainProps) => {
  const { isSmallScreen } = useThemeContext();
  const theme = useTheme();
  const leftDrawerWidthValue = isLeftDrawerOpen ? leftDrawerWidth : 0;
  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        boxShadow: "none",
        width: isSmallScreen
          ? "100%"
          : `calc(100% - ${
              leftDrawerWidthValue + (isRightDrawerOpen ? rightDrawerWidth : 0)
            }px)`,
        marginLeft: isSmallScreen
          ? 0
          : isLeftDrawerOpen
          ? `${leftDrawerWidthValue}px`
          : 0,
        marginRight: isSmallScreen
          ? 0
          : isRightDrawerOpen
          ? `${rightDrawerWidth}px`
          : 0,
        transition: theme.transitions.create(["margin", "width"]),
        transitionDuration: theme.transitions.duration.enteringScreen,
        transitionBehavior: theme.transitions.easing.easeOut,
      }}
    >
      <main className="w-full min-h-max mt-24 px-7 flex flex-col gap-4 transition-all">
        {children}
      </main>
    </Box>
  );
};

export default MainWrapper;
