import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";
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
  const theme = useTheme();
  const leftDrawerWidthValue = isLeftDrawerOpen ? leftDrawerWidth : 0;
  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        boxShadow: "none",
        width: `calc(100% - ${
          leftDrawerWidthValue + (isRightDrawerOpen ? rightDrawerWidth : 0)
        }px)`,
        marginLeft: isLeftDrawerOpen ? `${leftDrawerWidthValue}px` : 0,
        marginRight: isRightDrawerOpen ? `${rightDrawerWidth}px` : 0,
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
