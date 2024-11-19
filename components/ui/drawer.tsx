import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";
import { Drawer, useMediaQuery } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  width: number;
  open: boolean;
  alinement: "top" | "right" | "bottom" | "left" | undefined;
  onClose?: () => void;
};

//Creating custom drawer with needed styles
const DrawerWrapper = ({
  children,
  width,
  open,
  alinement,
  onClose,
}: Props) => {
  const { isSmallScreen } = useThemeContext();
  return (
    <Drawer
      sx={{
        width: open ? width : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? width : 0,
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
      variant={isSmallScreen ? "temporary" : "persistent"}
      anchor={alinement}
      open={open}
      onClose={onClose}
    >
      {children}
    </Drawer>
  );
};

export default DrawerWrapper;
