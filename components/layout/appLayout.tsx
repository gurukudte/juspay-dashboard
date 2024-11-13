"use client";
import NavBar from "./navbar";
import { ReactNode, useState } from "react";
import AppBar from "../ui/appbar";
import LeftDrawer from "./leftDrawer";
import RightDrawer from "./rightDrawer";
import MainWrapper from "./main";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(true);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(true);

  //function to set leftDrawerStatus
  const setLeftDrawerStatus = () => {
    setIsLeftDrawerOpen(!isLeftDrawerOpen);
  };
  //function to set rightDrawerStatus
  const setRightDrawerStatus = () => {
    setIsRightDrawerOpen(!isRightDrawerOpen);
  };

  return (
    <div className="w-full h-screen flex justify-between">
      <LeftDrawer isLeftDrawerOpen={isLeftDrawerOpen} />
      <AppBar
        position="fixed"
        leftDrawerOpen={isLeftDrawerOpen}
        rightDrawerOpen={isRightDrawerOpen}
      >
        <NavBar
          setLeftDrawerStatus={setLeftDrawerStatus}
          setRightDrawerStatus={setRightDrawerStatus}
        />
      </AppBar>
      {children}
      <RightDrawer isRightDrawerOpen={isRightDrawerOpen} />
    </div>
  );
}
