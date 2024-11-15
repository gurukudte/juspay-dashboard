import React from "react";
import { FillerdIcon } from "../ui/icon";
import TextBody from "../ui/text";
import { useTheme } from "@mui/material";
import { useAppContext } from "@/context/app.context";

type Props = {
  iconName: string;
  notification: string;
  timeStamp: string;
};

const NotificationCard = ({ iconName, notification, timeStamp }: Props) => {
  const { themeText } = useAppContext();
  return (
    <div
      className="p-1 flex gap-1 justify-start items-start"
      key={notification + timeStamp}
    >
      <FillerdIcon iconName={iconName} />
      <div className="flex flex-col items-start">
        <TextBody
          text={notification}
          className={
            "text-14-regular inline-block text-nowrap overflow-hidden text-ellipsis max-w-[198px]"
          }
          padding="p-0"
          color={themeText.primary}
        />
        <TextBody
          text={timeStamp}
          className={"text-12-regular "}
          padding="p-0"
          color={themeText.secondary}
        />
      </div>
    </div>
  );
};

export default NotificationCard;
