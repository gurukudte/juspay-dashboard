"use client";
import OrderListTable from "@/components/custom/orderlistTable";
import { Icon } from "@/components/ui/icon";
import CustomInput from "@/components/ui/input";
import { useAppContext } from "@/context/app.context";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";
import { IoIosAdd } from "react-icons/io";
import { PiFunnelSimpleBold } from "react-icons/pi";
import { LuArrowUpDown } from "react-icons/lu";
import React from "react";

const OrderList = () => {
  const { themeText } = useAppContext();
  const { darkMode } = useThemeContext();
  const props = { color: themeText.primary, size: 20 };
  return (
    <div>
      <div
        className={`${
          darkMode ? "bg-white-10" : "bg-primary-light"
        } rounded-lg p-2 flex justify-between items-center gap-3`}
      >
        <div className="flex gap-2 items-center justify-center">
          <IoIosAdd {...props} />
          <PiFunnelSimpleBold {...props} />
          <LuArrowUpDown {...props} />
        </div>
        <div>
          <CustomInput />
        </div>
      </div>
      <OrderListTable />
    </div>
  );
};

export default OrderList;
