import { leftDrawerWidth } from "@/constants/widths";
import React from "react";
import { Icon } from "../ui/icon";
import TextBody from "../ui/text";
import DrawerWrapper from "../ui/drawer";

type Props = {
  isLeftDrawerOpen: boolean;
};

const LeftDrawer = ({ isLeftDrawerOpen }: Props) => {
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
          <li className="flex gap-1 justify-start items-center py-1 bg-black-5 rounded-lg">
            <Icon iconName={"Group"} size={20} padding="none" />
            <Icon iconName={"Default"} size={20} padding="none" />
            <TextBody
              text={"Default"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"GreaterArrow"} size={20} padding="none" />
            <Icon iconName={"Bag"} size={20} padding="none" />
            <TextBody
              text={"eCommerce"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"GreaterArrow"} size={20} padding="none" />
            <Icon iconName={"Bag"} size={20} padding="none" />
            <TextBody
              text={"eCommerce"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"GreaterArrow"} size={20} padding="none" />
            <Icon iconName={"FolderNotch"} size={20} padding="none" />
            <TextBody
              text={"Projects"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"GreaterArrow"} size={20} padding="none" />
            <Icon iconName={"Book"} size={20} padding="none" />
            <TextBody
              text={"Online Courses"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
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
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"DownArrow"} size={20} padding="none" />
            <Icon iconName={"Profile"} size={20} padding="none" />
            <TextBody
              text={"User Profile"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ml-12">
            <TextBody
              text={"Projects"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ml-12">
            <TextBody
              text={"Campaigns"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ml-12">
            <TextBody
              text={"Documents"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ml-12">
            <TextBody
              text={"Followers"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"DownArrow"} size={20} padding="none" />
            <Icon iconName={"Account"} size={20} padding="none" />
            <TextBody
              text={"Account"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"DownArrow"} size={20} padding="none" />
            <Icon iconName={"UsersThree"} size={20} padding="none" />
            <TextBody
              text={"Corporate"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"DownArrow"} size={20} padding="none" />
            <Icon iconName={"Blog"} size={20} padding="none" />
            <TextBody
              text={"Blog"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
          <li className="flex gap-1 justify-start items-center py-1 ">
            <Icon iconName={"DownArrow"} size={20} padding="none" />
            <Icon iconName={"Social"} size={20} padding="none" />
            <TextBody
              text={"Social"}
              className={"text-14-regular text-black-100"}
              padding="none"
            />
          </li>
        </ul>
      </div>
    </DrawerWrapper>
  );
};

export default LeftDrawer;
