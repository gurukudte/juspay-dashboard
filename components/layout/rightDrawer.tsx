import { rightDrawerWidth } from "@/constants/widths";
import DrawerWrapper from "../ui/drawer";
import Notifications from "../sections/notifications";
import Activities from "../sections/activites";
import Contacts from "../sections/contacts";
import { useState } from "react";
type Props = {
  isRightDrawerOpen: boolean;
  setRightDrawerStatus: () => void;
};

const RightDrawer = ({ isRightDrawerOpen, setRightDrawerStatus }: Props) => {
  return (
    <DrawerWrapper
      width={rightDrawerWidth}
      open={isRightDrawerOpen}
      alinement={"right"}
      onClose={setRightDrawerStatus}
    >
      <Notifications />
      <Activities />
      <Contacts />
    </DrawerWrapper>
  );
};

export default RightDrawer;
