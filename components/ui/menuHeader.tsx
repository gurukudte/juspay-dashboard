"use client";
import { useTheme } from "@mui/material";
import TextBody from "./text";
import { FaAngleRight, FaChevronDown } from "react-icons/fa6";
import { ReactNode } from "react";

type Props = {
  openMenu: string;
  menuName: string;
  menuIcon: ReactNode;
  onClick: () => void;
};

const MenuHeader = ({ openMenu, menuName, menuIcon, onClick }: Props) => {
  const theme = useTheme();
  return (
    <button
      className="flex gap-1 justify-start items-center py-1"
      onClick={onClick}
    >
      {openMenu !== menuName ? (
        <FaAngleRight color={theme.palette.text.secondary} fontSize={16} />
      ) : (
        <FaChevronDown color={theme.palette.text.secondary} fontSize={16} />
      )}
      {menuIcon}
      <TextBody
        text={menuName}
        className={"text-14-regular "}
        color={theme.palette.text.primary}
        padding="p-0"
      />
    </button>
  );
};

export default MenuHeader;
