import React from "react";
import { Icon } from "../ui/icon";
import TextBody from "../ui/text";
import { IconButton } from "@mui/material";
import CustomInput from "../ui/input";

type Props = {
  setLeftDrawerStatus: () => void;
  setRightDrawerStatus: () => void;
};

const NavBar = ({ setLeftDrawerStatus, setRightDrawerStatus }: Props) => {
  return (
    <nav className="w-full flex  items-center justify-between py-5 px-7 border-solid border-b border-black-10 box-border">
      <div className="flex gap-2">
        <div className="flex gap-2">
          <IconButton
            onClick={setLeftDrawerStatus}
            aria-label="rightDrawer"
            className="p-0"
          >
            <Icon iconName="Sidebar" />
          </IconButton>
          <Icon iconName="Star" />
        </div>
        <div className="flex">
          <TextBody
            text={"Dashboards"}
            className={" text-14-regular text-black-40"}
          />
          <TextBody text={"/"} className={" text-14-regular text-black-20"} />
          <TextBody
            text={"Default"}
            className={" text-14-regular text-black-100"}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div>
          <CustomInput isGlobalSearch />
        </div>
        <div className="flex gap-2">
          <Icon iconName="IconSet" />
          <Icon iconName="ClockCounterClockwise" />
          <Icon iconName="Bell" />
          <IconButton
            onClick={setRightDrawerStatus}
            aria-label="rightDrawer"
            className="p-0"
          >
            <Icon iconName="Sidebar" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
