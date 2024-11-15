"use client";
import { ReactNode } from "react";
import { Icon } from "./icon";
import TextBody from "./text";
import { useTheme } from "@mui/material";

type Props = {
  isActive: boolean;
  buttonName: string;
  icon?: ReactNode;
  routeOnClick: () => void;
  className?: string;
};

const MenuButton = ({
  isActive,
  buttonName,
  routeOnClick,
  icon,
  className,
}: Props) => {
  const theme = useTheme();
  return (
    <button
      className={`relative w-full flex gap-1 justify-start items-center py-1 rounded-lg ${
        isActive && "bg-black-5"
      } ${!className && "pl-6"} hover:bg-primary-light hover:text-black-100`}
      onClick={routeOnClick}
    >
      {isActive && (
        <Icon iconName={"Group"} size={20} padding="absolute left-0" />
      )}
      {icon && icon}
      <TextBody
        text={buttonName}
        className={`text-14-regular hover:text-black-100`}
        padding={className}
        color={theme.palette.text.primary}
      />
    </button>
  );
};

export default MenuButton;
