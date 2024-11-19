"use cllient";
import { leftDrawerWidth } from "@/constants/widths";
import React, { useState } from "react";
import { Icon } from "../ui/icon";
import TextBody from "../ui/text";
import DrawerWrapper from "../ui/drawer";
import { Collapse, useTheme } from "@mui/material";
import MenuHeader from "../ui/menuHeader";
import { useRouter } from "next/navigation";
import MenuButton from "../ui/menuButton";
import { useAppContext } from "@/context/app.context";
import { RxDotFilled } from "react-icons/rx";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { PiFolderOpenDuotone } from "react-icons/pi";
import { LuBookOpen } from "react-icons/lu";
import { BiSolidUserBadge } from "react-icons/bi";
import { BiSolidUserAccount } from "react-icons/bi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { PiNotebookDuotone } from "react-icons/pi";
import { PiChatsTeardropDuotone } from "react-icons/pi";

type Props = {
  isLeftDrawerOpen: boolean;
  setLeftDrawerStatus: () => void;
};

const LeftDrawer = ({ isLeftDrawerOpen, setLeftDrawerStatus }: Props) => {
  const [openMenu, setOpenMenu] = useState("");
  const { currentRoute } = useAppContext();
  const router = useRouter();
  const theme = useTheme();

  //handler function to setmenu
  const handleOpenMenu = (menuName: string) => {
    openMenu === menuName ? setOpenMenu("") : setOpenMenu(menuName);
  };

  const props = { color: theme.palette.text.primary, fontSize: 20 };

  return (
    <DrawerWrapper
      width={leftDrawerWidth}
      open={isLeftDrawerOpen}
      alinement={"left"}
      onClose={setLeftDrawerStatus}
    >
      <div className="flex gap-2 justify-left items-center">
        <Icon iconName={"ByeWind"} size={24} />
        <TextBody
          text={"ByeWind"}
          className={"text-14-regular"}
          color={theme.palette.text.primary}
        />
      </div>
      <div className="flex flex-col gap-1 bottom-3">
        <div className="flex gap-2 justify-start items-center">
          <TextBody
            text={"Favorites"}
            className={"text-14-regular "}
            color={theme.palette.text.secondary}
          />
          <TextBody
            text={"Recently"}
            className={"text-14-regular"}
            color={theme.palette.text.disabled}
          />
        </div>
        <ul className="flex flex-col gap-1 justify-start items-left">
          <li className="flex gap-1 justify-start items-center px-2 py-1">
            <RxDotFilled color={theme.palette.text.disabled} fontSize={16} />
            <TextBody
              text={"Overview"}
              className={"text-14-regular"}
              color={theme.palette.text.primary}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center px-2 py-1">
            <RxDotFilled color={theme.palette.text.disabled} fontSize={16} />
            <TextBody
              text={"Projects"}
              className={"text-14-regular "}
              color={theme.palette.text.primary}
              padding="none"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1 bottom-3">
        <div className="flex gap-2 justify-start items-center">
          <TextBody
            text={"Dashboards"}
            className={"text-14-regular"}
            color={theme.palette.text.secondary}
          />
        </div>
        <ul className="flex flex-col gap-1 justify-start items-left bottom-3">
          <MenuButton
            isActive={currentRoute === "/app/ecommerce"}
            buttonName={"Default"}
            routeOnClick={() => router.push("/app/ecommerce")}
            icon={<PiChartPieSliceDuotone {...props} />}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"eCommerce"}
            menuIcon={<PiShoppingBagOpenDuotone {...props} />}
            onClick={() => handleOpenMenu("eCommerce")}
          />
          <Collapse
            in={openMenu === "eCommerce"}
            timeout={"auto"}
            unmountOnExit
          >
            <MenuButton
              isActive={currentRoute === "/app/orderlist"}
              buttonName={"Order List"}
              className="pl-12"
              routeOnClick={() => {
                router.push("/app/orderlist"), setOpenMenu("eCommerce");
              }}
            />
          </Collapse>
          <MenuHeader
            openMenu={openMenu}
            menuName={"Projects"}
            menuIcon={<PiFolderOpenDuotone {...props} />}
            onClick={() => handleOpenMenu("Projects")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Online Courses"}
            menuIcon={<LuBookOpen {...props} />}
            onClick={() => handleOpenMenu("Online Courses")}
          />
        </ul>
      </div>
      <div className="flex flex-col gap-1 bottom-3">
        <div className="flex gap-2 justify-start items-center">
          <TextBody
            text={"Pages"}
            className={"text-14-regular"}
            color={theme.palette.text.secondary}
          />
        </div>
        <ul className="flex flex-col gap-1 justify-start items-left bottom-3">
          <MenuHeader
            openMenu={openMenu}
            menuName={"Profile"}
            menuIcon={<BiSolidUserBadge {...props} />}
            onClick={() => handleOpenMenu("Profile")}
          />
          <Collapse in={openMenu === "Profile"} timeout={"auto"} unmountOnExit>
            {[
              "Overview",
              "Projects",
              "Campaigns",
              "Documents",
              "Followers",
            ].map((item) => (
              <li key={item}>
                <MenuButton
                  isActive={false}
                  buttonName={item}
                  className="pl-12"
                  routeOnClick={() => {
                    router.push("/app/orderlist"), setOpenMenu("eCommerce");
                  }}
                />
              </li>
            ))}
          </Collapse>
          <MenuHeader
            openMenu={openMenu}
            menuName={"Account"}
            menuIcon={<BiSolidUserAccount {...props} />}
            onClick={() => handleOpenMenu("Account")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Corporate"}
            menuIcon={<PiUsersThreeDuotone {...props} />}
            onClick={() => handleOpenMenu("Corporate")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Blog"}
            menuIcon={<PiNotebookDuotone {...props} />}
            onClick={() => handleOpenMenu("Blog")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Social"}
            menuIcon={<PiChatsTeardropDuotone {...props} />}
            onClick={() => handleOpenMenu("Social")}
          />
        </ul>
      </div>
    </DrawerWrapper>
  );
};

export default LeftDrawer;
