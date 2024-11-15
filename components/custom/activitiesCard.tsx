import React from "react";
import { AvatarIcon } from "../ui/icon";
import TextBody from "../ui/text";
import { useAppContext } from "@/context/app.context";

type Props = {
  avatarName: string;
  activity: string;
  timeStamp: string;
};

const ActivitiesCard = ({ avatarName, activity, timeStamp }: Props) => {
  const { themeText } = useAppContext();
  return (
    <div
      className="p-1 flex gap-1 justify-start items-start"
      key={activity + timeStamp + avatarName}
    >
      <AvatarIcon iconName={avatarName} />
      <div className="flex flex-col items-start">
        <TextBody
          text={activity}
          className={
            "text-14-regular inline-block text-nowrap overflow-hidden text-ellipsis max-w-[198px]"
          }
          padding="none"
          color={themeText.primary}
        />
        <TextBody
          text={timeStamp}
          className={"text-12-regular"}
          padding="none"
          color={themeText.secondary}
        />
      </div>
    </div>
  );
};

export default ActivitiesCard;
