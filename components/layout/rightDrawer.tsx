import { rightDrawerWidth } from "@/constants/widths";
import DrawerWrapper from "../ui/drawer";
import Notifications from "../sections/notifications";
import Activities from "../sections/activites";
import Users from "../sections/users";
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
      <Users />
    </DrawerWrapper>
  );
};

export default RightDrawer;
