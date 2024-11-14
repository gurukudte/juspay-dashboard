import React from "react";
import { Icon } from "./icon";
import TextBody from "./text";

type Props = {
  isActive: boolean;
  buttonName: string;
  iconName?: string;
  routeOnClick: () => void;
  className?: string;
};

const MenuButton = ({
  isActive,
  buttonName,
  routeOnClick,
  iconName,
  className,
}: Props) => {
  return (
    <button
      className={`relative w-full flex gap-1 justify-start items-center py-1 rounded-lg ${
        isActive && "bg-black-5"
      } ${!className && "pl-6"} hover:bg-primary-light`}
      onClick={routeOnClick}
    >
      {isActive && (
        <Icon iconName={"Group"} size={20} padding="absolute left-0" />
      )}
      {iconName && <Icon iconName={iconName} size={20} padding="p-0" />}
      <TextBody
        text={buttonName}
        className={"text-14-regular text-black-100"}
        padding={className}
      />
    </button>
  );
};

export default MenuButton;
