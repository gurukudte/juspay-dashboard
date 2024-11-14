"use client";
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
        <Icon iconName={"GreaterArrow"} size={20} padding="p-0" />
      ) : (
        <Icon iconName={"DownArrow"} size={20} padding="p-0" />
      )}
      <Icon iconName={menuIcon} size={20} padding="p-0" />
      <TextBody
        text={menuName}
        className={"text-14-regular text-black-100"}
        padding="p-0"
      />
    </button>
  );
};

export default MenuHeader;
