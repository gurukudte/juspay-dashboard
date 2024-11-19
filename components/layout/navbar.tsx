"use client";
import React from "react";
import { Icon } from "../ui/icon";
import TextBody from "../ui/text";
import {
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CustomInput from "../ui/input";
import ThemeToggle from "../ui/themeToggle";
import {
  PiBellDuotone,
  PiSidebarDuotone,
  PiClockCounterClockwiseDuotone,
  PiStarDuotone,
} from "react-icons/pi";
import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";
import { TiThMenu } from "react-icons/ti";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";

type Props = {
  setLeftDrawerStatus: () => void;
  setRightDrawerStatus: () => void;
  leftDrawerOpen?: boolean;
  rightDrawerOpen?: boolean;
};

const NavBar = ({
  leftDrawerOpen,
  rightDrawerOpen,
  setLeftDrawerStatus,
  setRightDrawerStatus,
}: Props) => {
  const { isSmallScreen } = useThemeContext();
  const leftDrawerWidthValue = isSmallScreen
    ? 0
    : leftDrawerOpen
    ? leftDrawerWidth
    : 0;
  const theme = useTheme();
  const props = {
    color: theme.palette.text.primary,
    fontSize: 20,
  };
  console.log(
    "isSmallScreen",
    isSmallScreen
      ? "100%"
      : `calc(100% - ${
          leftDrawerWidthValue + (rightDrawerOpen ? rightDrawerWidth : 0)
        }px)`
  );
  return (
    <AppBar
      position="fixed"
      sx={{
        background: theme.palette.background.default,
        width: isSmallScreen
          ? "100%"
          : `calc(100% - ${
              leftDrawerWidthValue + (rightDrawerOpen ? rightDrawerWidth : 0)
            }px)`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        boxShadow: "none",
        padding: 0,
        marginLeft: isSmallScreen
          ? 0
          : leftDrawerOpen
          ? `${leftDrawerWidthValue}px`
          : 0,
        marginRight: isSmallScreen
          ? 0
          : rightDrawerOpen
          ? `${rightDrawerWidth}px`
          : 0,
        transition: theme.transitions.create(["margin", "width"]),
        transitionDuration: theme.transitions.duration.enteringScreen,
        transitionBehavior: theme.transitions.easing.easeOut,
      }}
    >
      <nav className="w-full flex  items-center justify-between  py-5 px-7 border-solid border-b border-black-10 box-border z-20">
        <div className="flex gap-2">
          <div className="hidden lg:flex gap-2 items-center justify-center">
            <IconButton
              onClick={setLeftDrawerStatus}
              aria-label="Toggle-Left-Drawer"
              className="p-0"
            >
              <PiSidebarDuotone {...props} />
            </IconButton>
            <PiStarDuotone {...props} />
          </div>
          <div className="hidden lg:flex">
            <TextBody
              text={"Dashboards"}
              className={" text-14-regular"}
              color={theme.palette.text.secondary}
            />
            <TextBody
              color={theme.palette.text.disabled}
              text={"/"}
              className={" text-14-regular "}
            />
            <TextBody
              color={theme.palette.text.primary}
              text={"Default"}
              className={" text-14-regular "}
            />
          </div>
          <IconButton
            onClick={setLeftDrawerStatus}
            aria-label="rightDrawer"
            className="lg:hidden flex items-center justify-center"
          >
            <TiThMenu {...props} />
          </IconButton>
        </div>
        <div className="lg:hidden flex">
          <CustomInput isGlobalSearch />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="hidden lg:flex">
            <CustomInput isGlobalSearch />
          </div>
          <div className="flex gap-2 items-center justify-center">
            <ThemeToggle />
            <PiClockCounterClockwiseDuotone
              {...props}
              className="hidden lg:flex"
            />
            <IconButton
              onClick={setRightDrawerStatus}
              aria-label="rightDrawer"
              className="p-0"
            >
              <PiBellDuotone {...props} />
            </IconButton>
            <IconButton
              onClick={setRightDrawerStatus}
              aria-label="Toggle-right-Drawer"
              className="p-0 hidden lg:flex"
            >
              <PiSidebarDuotone {...props} />
            </IconButton>
          </div>
        </div>
      </nav>
    </AppBar>
  );
};

export default NavBar;
