import React from "react";
import { AvatarIcon } from "../ui/icon";
import TextBody from "../ui/text";

type Props = {
  userIcon: string;
  userName: string;
};

const UserCard = ({ userIcon, userName }: Props) => {
  return (
    <div className="p-1 flex gap-1 justify-start items-start" key={userName}>
      <AvatarIcon iconName={userIcon} />
      <div className="flex items-start">
        <TextBody
          text={userName}
          className={
            "text-14-regular text-black-100 inline-block text-nowrap overflow-hidden text-ellipsis max-w-[198px]"
          }
          padding="none"
        />
      </div>
    </div>
  );
};

export default UserCard;
