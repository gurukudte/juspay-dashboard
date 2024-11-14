import { leftDrawerWidth } from "@/constants/widths";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "../ui/icon";
import TextBody from "../ui/text";
import DrawerWrapper from "../ui/drawer";
import { Collapse } from "@mui/material";
import MenuHeader from "../ui/menuHeader";
import { usePathname, useRouter } from "next/navigation";
import MenuButton from "../ui/menuButton";
import { usePathnameChange } from "@/hooks/pathName.hook";
import { useAppContext } from "@/context/app.context";

type Props = {
  isLeftDrawerOpen: boolean;
};

const LeftDrawer = ({ isLeftDrawerOpen }: Props) => {
  const [openMenu, setOpenMenu] = useState("");
  const { currentRoute } = useAppContext();
  const router = useRouter();

  //handler function to setmenu
  const handleOpenMenu = (menuName: string) => {
    openMenu === menuName ? setOpenMenu("") : setOpenMenu(menuName);
  };

  return (
    <DrawerWrapper
      width={leftDrawerWidth}
      open={isLeftDrawerOpen}
      alinement={"left"}
    >
      <div className="flex gap-2 justify-left items-center">
        <Icon iconName={"ByeWind"} size={24} />
        <TextBody
          text={"ByeWind"}
          className={"text-14-regular text-black-100"}
          padding={" "}
        />
      </div>
      <div className="flex flex-col gap-1 bottom-3">
        <div className="flex gap-2 justify-start items-center">
          <TextBody
            text={"Favorites"}
            className={"text-14-regular text-black-40"}
          />
          <TextBody
            text={"Recently"}
            className={"text-14-regular text-black-20"}
          />
        </div>
        <ul className="flex flex-col gap-1 justify-start items-left">
          <li className="flex gap-1 justify-start items-center px-2 py-1">
            <Icon iconName={"Dot"} size={16} padding="none" />
            <TextBody
              text={"Overview"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center px-2 py-1">
            <Icon iconName={"Dot"} size={16} padding="none" />
            <TextBody
              text={"Projects"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-1 bottom-3">
        <div className="flex gap-2 justify-start items-center">
          <TextBody
            text={"Dashboards"}
            className={"text-14-regular text-black-40"}
          />
        </div>
        <ul className="flex flex-col gap-1 justify-start items-left bottom-3">
          <MenuButton
            isActive={currentRoute === "/app/ecommerce"}
            buttonName={"Default"}
            routeOnClick={() => router.push("/app/ecommerce")}
            iconName={"Default"}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"eCommerce"}
            menuIcon={"Bag"}
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
            menuIcon={"FolderNotch"}
            onClick={() => handleOpenMenu("Projects")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Online Courses"}
            menuIcon={"Book"}
            onClick={() => handleOpenMenu("Online Courses")}
          />
        </ul>
      </div>
      <div className="flex flex-col gap-1 bottom-3">
        <div className="flex gap-2 justify-start items-center">
          <TextBody
            text={"Pages"}
            className={"text-14-regular text-black-40"}
          />
        </div>
        <ul className="flex flex-col gap-1 justify-start items-left bottom-3">
          <MenuHeader
            openMenu={openMenu}
            menuName={"Profile"}
            menuIcon={"Profile"}
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
              <li>
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
            menuIcon={"Account"}
            onClick={() => handleOpenMenu("Account")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Corporate"}
            menuIcon={"UsersThree"}
            onClick={() => handleOpenMenu("Corporate")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Blog"}
            menuIcon={"Blog"}
            onClick={() => handleOpenMenu("Blog")}
          />
          <MenuHeader
            openMenu={openMenu}
            menuName={"Social"}
            menuIcon={"Social"}
            onClick={() => handleOpenMenu("Social")}
          />
        </ul>
      </div>
    </DrawerWrapper>
  );
};

export default LeftDrawer;
