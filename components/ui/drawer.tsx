import { useTheme } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width: number;
  open: boolean;
  alinement: "top" | "right" | "bottom" | "left" | undefined;
};

const DrawerWrapper = ({ children, width, open, alinement }: Props) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: open ? width : 0,
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
        transition: `margin 300ms cubic-bezier(0.4, 0, 0.2, 1), 
                  width 300ms cubic-bezier(0.4, 0, 0.2, 1)`,
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
