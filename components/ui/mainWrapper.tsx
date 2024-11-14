import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";
import { styled } from "@mui/material";
import MuiBox, { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";

interface CustomBoxProps extends BoxProps {
  isLeftDrawerOpen?: boolean;
  isRightDrawerOpen?: boolean;
}

//creating custom main wrapper whose width is calculated on left & right drawer status
const CustomBox = styled(MuiBox, {
  shouldForwardProp: (prop) =>
    prop !== "isLeftDrawerOpen" && prop !== "isRightDrawerOpen",
})<CustomBoxProps>(
  ({ theme, isLeftDrawerOpen = false, isRightDrawerOpen = false }) => {
    // Setting leftDrawerWidth based on leftDrawerOpen state
    const leftDrawerWidthValue = isLeftDrawerOpen ? leftDrawerWidth : 0;

    return {
      background: "white",
      boxShadow: "none",

      // Applying conditional styles
      width: `calc(100% - ${
        leftDrawerWidthValue + (isRightDrawerOpen ? rightDrawerWidth : 0)
      }px)`,
      marginLeft: isLeftDrawerOpen ? `${leftDrawerWidthValue}px` : 0,
      marginRight: isRightDrawerOpen ? `${rightDrawerWidth}px` : 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    };
  }
);

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
  return (
    <CustomBox
      isLeftDrawerOpen={isLeftDrawerOpen}
      isRightDrawerOpen={isRightDrawerOpen}
    >
      <main className="w-full min-h-max mt-24 px-7 flex flex-col gap-4 transition-all">
        {children}
      </main>
    </CustomBox>
  );
};

export default MainWrapper;
