import { rightDrawerWidth } from "@/constants/widths";
import { Drawer } from "@mui/material";

type Props = {
  isRightDrawerOpen: boolean;
};

const RightDrawer = ({ isRightDrawerOpen }: Props) => {
  return (
    <Drawer
      sx={{
        width: rightDrawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: rightDrawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="right"
      open={isRightDrawerOpen}
    ></Drawer>
  );
};

export default RightDrawer;
