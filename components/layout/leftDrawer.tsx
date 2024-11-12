import { leftDrawerWidth } from "@/constants/widths";
import { Drawer } from "@mui/material";
import React from "react";

type Props = {
  leftDrawer: boolean;
};

const LeftDrawer = ({ leftDrawer }: Props) => {
  return (
    <Drawer
      sx={{
        width: leftDrawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: leftDrawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={leftDrawer}
    ></Drawer>
  );
};

export default LeftDrawer;
