"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import NavBar from "./navbar";
import { useState } from "react";
import { leftDrawerWidth, rightDrawerWidth } from "@/constants/widths";
import AppBar from "../ui/appbar";
import LeftDrawer from "./leftDrawer";
import RightDrawer from "./rightDrawer";

export default function AppLayout() {
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
    <Box sx={{ display: "flex" }}>
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
      <LeftDrawer isLeftDrawerOpen={isLeftDrawerOpen} />
      <RightDrawer isRightDrawerOpen={isRightDrawerOpen} />
      {/* <MainWrapper leftDrawerOpen={leftDrawer} rightDrawerOpen={rightDrawer} /> */}
    </Box>
  );
}
