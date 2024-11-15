"use client";
import React, { useEffect, useState } from "react";
import CustomCheckbox from "../ui/checkBox";
import TextBody from "../ui/text";
import { Icon } from "../ui/icon";
import { useAppContext } from "@/context/app.context";
import { CiCalendar } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";

type Props = {
  order: {
    id: string;
    name: string;
    project: string;
    address: string;
    time: string;
    status: string;
  };
  isSelectAll: boolean;
};

const OrderListCard = ({ order, isSelectAll }: Props) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const { themeText } = useAppContext();
  const { darkMode } = useThemeContext();
  const userIconNames = [
    "User-1",
    "User-2",
    "User-3",
    "User-4",
    "User-5",
    "User-6",
  ];

  //select handler
  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSelected(event.target.checked);
  };

  const UserCard = ({ userName }: { userName: string }) => {
    return (
      <>
        <Icon
          iconName={
            userIconNames[Math.floor(Math.random() * userIconNames.length)]
          }
          padding={"mr-1"}
          size={24}
        />
        <TextBody
          text={userName}
          className={"text-12-regular "}
          color={themeText.primary}
          padding="p-0"
        />
      </>
    );
  };

  const DateCard = ({ date }: { date: string }) => {
    return (
      <>
        <CiCalendar color={themeText.primary} size={16} />
        <TextBody
          text={date}
          className={"text-12-regular "}
          color={themeText.primary}
          padding="p-0"
        />
      </>
    );
  };

  //Status card to show status of the order
  const StatusCard = ({ status }: { status: any }) => {
    switch (status) {
      case "In Progress":
        return (
          <>
            <span
              className={`w-[6px] h-[6px] rounded-full bg-secondary-Indigo mr-1`}
            ></span>
            <TextBody
              text={status}
              className={`text-12-regular text-status-inProcess`}
              padding="p-0"
            />
          </>
        );
      case "Complete":
        return (
          <>
            <span
              className={`w-[6px] h-[6px] rounded-full bg-secondary-green mr-1`}
            ></span>
            <TextBody
              text={status}
              className={`text-12-regular text-status-complete`}
              padding="p-0"
            />
          </>
        );
      case "Approved":
        return (
          <>
            <span
              className={`w-[6px] h-[6px] rounded-full bg-secondary-yellow mr-1`}
            ></span>
            <TextBody
              text={status}
              className={`text-12-regular text-status-approved`}
              padding="p-0"
            />
          </>
        );
      case "Rejected":
        return (
          <>
            <span
              className={`w-[6px] h-[6px] rounded-full bg-white-40 mr-1`}
            ></span>
            <TextBody
              text={status}
              className={`text-12-regular text-[${
                darkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)"
              }]`}
              padding="p-0"
            />
          </>
        );
      case "Pending":
        return (
          <>
            <span
              className={`w-[6px] h-[6px] rounded-full bg-secondary-blue mr-1`}
            ></span>
            <TextBody
              text={status}
              className={`text-12-regular text-status-pending`}
              padding="p-0"
            />
          </>
        );
    }
    return <></>;
  };

  //logic to update checkbox status , if all are selected or unselected
  useEffect(() => {
    setIsSelected(isSelectAll);
  }, [isSelectAll]);

  return (
    <div
      className={`flex border-solid border-b border-[${themeText.disabled}] box-border`}
    >
      <ul className="min-w-5">
        <CustomCheckbox isChecked={isSelected} onChange={handleSelect} />
      </ul>
      {Object.values(order).map((orderItem, index) => (
        <ul
          key={orderItem}
          className={`py-2 px-3 flex justify-start items-center w-full min-h-10 ${
            index === 3 ? "max-w-[400px]" : "max-w-[220px]"
          } inline-block text-nowrap overflow-hidden text-ellipsis`}
        >
          {index === 1 && <UserCard userName={orderItem} />}
          {index === 4 && <DateCard date={orderItem} />}
          {index === 5 && <StatusCard status={orderItem} />}
          {(index === 0 || index === 2 || index === 3) && (
            <TextBody
              text={orderItem}
              className={"text-12-regular "}
              color={themeText.primary}
              padding="p-0"
            />
          )}
        </ul>
      ))}
      <ul className="min-w-12 flex items-center justify-center">
        {Object.values(order).includes("Rejected") && (
          <BsThreeDots color={themeText.primary} size={16} />
        )}
      </ul>
    </div>
  );
};

export default OrderListCard;
