import React from "react";
import { FillerdIcon } from "../ui/icon";
import Text from "../ui/text";

type Props = {
  iconName: string;
  notification: string;
  timeStamp: string;
};

const NotificationCard = ({ iconName, notification, timeStamp }: Props) => {
  return (
    <div
      className="p-1 flex gap-1 justify-start items-start"
      key={notification + timeStamp}
    >
      <FillerdIcon iconName={iconName} />
      <div className="flex flex-col items-start">
        <Text
          text={notification}
          className={
            "text-14-regular text-black-100 inline-block text-nowrap overflow-hidden text-ellipsis max-w-[198px]"
          }
          padding="p-0"
        />
        <Text
          text={timeStamp}
          className={"text-12-regular text-black-40"}
          padding="p-0"
        />
      </div>
    </div>
  );
};

export default NotificationCard;
