"use client";
import NavBar from "./navbar";
import { ReactNode, useEffect, useState } from "react";
import AppBar from "../ui/appbar";
import LeftDrawer from "./leftDrawer";
import RightDrawer from "./rightDrawer";
import { useAppContext } from "@/context/app.context";
import { useRouter } from "next/router";
import MainWrapper from "../ui/mainWrapper";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const { currentRoute } = useAppContext();
  const [isLeftDrawerOpen, setIsLeftDrawerOpen] = useState(true);
  const [isRightDrawerOpen, setIsRightDrawerOpen] = useState(false);

  //function to set leftDrawerStatus
  const setLeftDrawerStatus = () => {
    setIsLeftDrawerOpen(!isLeftDrawerOpen);
  };
  //function to set rightDrawerStatus
  const setRightDrawerStatus = () => {
    setIsRightDrawerOpen(!isRightDrawerOpen);
  };

  //hiding right-side-drawer in orderlist route
  useEffect(() => {
    if (currentRoute === "/app/ecommerce") {
      setIsRightDrawerOpen(true);
    }
  }, [currentRoute]);
  return (
    <div className="w-full flex justify-between">
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
      <MainWrapper>{children}</MainWrapper>
      <RightDrawer isRightDrawerOpen={isRightDrawerOpen} />
    </div>
  );
}