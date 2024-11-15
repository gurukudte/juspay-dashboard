import React from "react";
import { Icon } from "../ui/icon";
import TextBody from "../ui/text";
import { AppBar, IconButton, Toolbar, useTheme } from "@mui/material";
import CustomInput from "../ui/input";
import ThemeToggle from "../ui/themeToggle";
import {
  PiBellDuotone,
  PiSidebarDuotone,
  PiClockCounterClockwiseDuotone,
  PiStarDuotone,
} from "react-icons/pi";
import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";

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
  const leftDrawerWidthValue = leftDrawerOpen ? leftDrawerWidth : 0;
  const theme = useTheme();
  return (
    <AppBar
      position="fixed"
      sx={{
        background: theme.palette.background.default,
        width: `calc(100% - ${
          leftDrawerWidthValue + (rightDrawerOpen ? rightDrawerWidth : 0)
        }px)`,
        borderBottom: `1px solid ${theme.palette.text.disabled}`,
        boxShadow: "none",
        marginLeft: leftDrawerOpen ? `${leftDrawerWidthValue}px` : 0,
        marginRight: rightDrawerOpen ? `${rightDrawerWidth}px` : 0,
        transition: theme.transitions.create(["margin", "width"]),
        transitionDuration: theme.transitions.duration.enteringScreen,
        transitionBehavior: theme.transitions.easing.easeOut,
      }}
    >
      <nav className="w-full flex  items-center justify-between py-5 px-7 border-solid border-b border-black-10 box-border z-20">
        <div className="flex gap-2">
          <div className="flex gap-2 items-center justify-center">
            <IconButton
              onClick={setLeftDrawerStatus}
              aria-label="rightDrawer"
              className="p-0"
            >
              <PiSidebarDuotone
                color={theme.palette.text.primary}
                fontSize={20}
              />
            </IconButton>
            <PiStarDuotone color={theme.palette.text.primary} fontSize={20} />
          </div>
          <div className="flex">
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
        </div>
        <div className="flex items-center justify-center gap-2">
          <div>
            <CustomInput isGlobalSearch />
          </div>
          <div className="flex gap-2 items-center justify-center">
            <ThemeToggle />
            <PiClockCounterClockwiseDuotone
              color={theme.palette.text.primary}
              fontSize={20}
            />
            <PiBellDuotone color={theme.palette.text.primary} fontSize={20} />
            <IconButton
              onClick={setRightDrawerStatus}
              aria-label="rightDrawer"
              className="p-0"
            >
              <PiSidebarDuotone
                color={theme.palette.text.primary}
                fontSize={20}
              />
            </IconButton>
          </div>
        </div>
      </nav>
    </AppBar>
  );
};

export default NavBar;
