"use client";
import NavBar from "./navbar";
import { ReactNode, useEffect, useState } from "react";
import LeftDrawer from "./leftDrawer";
import RightDrawer from "./rightDrawer";
import { useAppContext } from "@/context/app.context";
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

  //showing right-side-drawer in ecommerce route
  useEffect(() => {
    if (currentRoute === "/app/ecommerce") {
      setIsRightDrawerOpen(true);
    } else {
      setIsRightDrawerOpen(false);
    }
  }, [currentRoute]);
  return (
    <div className="w-full flex justify-between">
      <LeftDrawer isLeftDrawerOpen={isLeftDrawerOpen} />
      <NavBar
        setLeftDrawerStatus={setLeftDrawerStatus}
        setRightDrawerStatus={setRightDrawerStatus}
        leftDrawerOpen={isLeftDrawerOpen}
        rightDrawerOpen={isRightDrawerOpen}
      />
      <MainWrapper>{children}</MainWrapper>
      <RightDrawer isRightDrawerOpen={isRightDrawerOpen} />
    </div>
  );
}
