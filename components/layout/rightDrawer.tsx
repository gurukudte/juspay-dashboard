import { rightDrawerWidth } from "@/constants/widths";
import DrawerWrapper from "../ui/drawer";
import Notifications from "../sections/notifications";
import Activities from "../sections/activites";
import Contacts from "../sections/contacts";
type Props = {
  isRightDrawerOpen: boolean;
};

const RightDrawer = ({ isRightDrawerOpen }: Props) => {
  return (
    <DrawerWrapper
      width={rightDrawerWidth}
      open={isRightDrawerOpen}
      alinement={"right"}
    >
      <Notifications />
      <Activities />
      <Contacts />
    </DrawerWrapper>
  );
};

export default RightDrawer;
