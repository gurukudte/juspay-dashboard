"use client";
import NavBar from "./navbar";
import { ReactNode, useCallback, useEffect, useState } from "react";
import LeftDrawer from "./leftDrawer";
import RightDrawer from "./rightDrawer";
import { useAppContext } from "@/context/app.context";
import MainWrapper from "../ui/mainWrapper";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const { currentRoute } = useAppContext();
  const { isSmallScreen } = useThemeContext();
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(false);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  //function to set leftDrawerStatus
  const setLeftDrawerStatus = () => setIsLeftDrawerOpen(!isLeftDrawerOpen);
  //function to set rightDrawerStatus
  const setRightDrawerStatus = () => setIsRightDrawerOpen(!isRightDrawerOpen);

  //showing right-side-drawer in ecommerce route
  // useEffect(() => {
  //   if (!isSmallScreen) {
  //     setIsLeftDrawerOpen(true);
  //     if (currentRoute === "/app/ecommerce") {
  //       setIsRightDrawerOpen(true);
  //     } else {
  //       setIsRightDrawerOpen(false);
  //     }
  //   }
  // }, [currentRoute, isSmallScreen]);
  return (
    <div className="w-full flex justify-between">
      <LeftDrawer
        isLeftDrawerOpen={isLeftDrawerOpen}
        setLeftDrawerStatus={setLeftDrawerStatus}
      />
      <NavBar
        setLeftDrawerStatus={setLeftDrawerStatus}
        setRightDrawerStatus={setRightDrawerStatus}
        leftDrawerOpen={isLeftDrawerOpen}
        rightDrawerOpen={isRightDrawerOpen}
      />
      <MainWrapper>{children}</MainWrapper>
      <RightDrawer
        isRightDrawerOpen={isRightDrawerOpen}
        setRightDrawerStatus={setRightDrawerStatus}
      />
    </div>
  );
}
