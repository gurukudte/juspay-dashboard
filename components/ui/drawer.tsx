import { leftDrawerWidth } from "@/constants/widths";
import { Drawer } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width: number;
  open: boolean;
  alinement: "left" | "right";
};

const DrawerWrapper = ({ children, width, open, alinement }: Props) => {
  return (
    <Drawer
      sx={{
        width: width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          padding: `${alinement === "left" ? "20px 16px" : "20px"}`,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflow: "hidden",
        },
      }}
      variant="persistent"
      anchor={alinement}
      open={open}
    >
      {children}
    </Drawer>
  );
};

export default DrawerWrapper;
