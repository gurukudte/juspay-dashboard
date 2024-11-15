import React from "react";
import { AvatarIcon } from "../ui/icon";
import TextBody from "../ui/text";
import { useAppContext } from "@/context/app.context";

type Props = {
  userIcon: string;
  userName: string;
};

const UserCard = ({ userIcon, userName }: Props) => {
  const { themeText } = useAppContext();
  return (
    <div className="p-1 flex gap-1 justify-start items-start" key={userName}>
      <AvatarIcon iconName={userIcon} />
      <div className="flex items-start">
        <TextBody
          text={userName}
          className={
            "text-14-regular inline-block text-nowrap overflow-hidden text-ellipsis max-w-[198px]"
          }
          padding="none"
          color={themeText.primary}
        />
      </div>
    </div>
  );
};

export default UserCard;
