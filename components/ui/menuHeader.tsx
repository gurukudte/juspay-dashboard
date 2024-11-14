import React from "react";
import { Icon } from "./icon";
import TextBody from "./text";

type Props = {
  openMenu: string;
  menuName: string;
  menuIcon: string;
  onClick: () => void;
};

const MenuHeader = ({ openMenu, menuName, menuIcon, onClick }: Props) => {
  return (
    <button
      className="flex gap-1 justify-start items-center py-1"
      onClick={onClick}
    >
      {openMenu !== menuName ? (
        <Icon iconName={"GreaterArrow"} size={20} padding="none" />
      ) : (
        <Icon iconName={"DownArrow"} size={20} padding="none" />
      )}
      <Icon iconName={menuIcon} size={20} padding="none" />
      <TextBody
        text={menuName}
        className={"text-14-regular text-black-100"}
        padding="none"
      />
    </button>
  );
};

export default MenuHeader;
