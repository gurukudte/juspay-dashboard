import React from "react";
import { AvatarIcon } from "../ui/icon";
import Text from "../ui/text";
import activities from "@/constants/activities";
import ActivitiesCard from "../custom/activitiesCard";
import contacts from "@/constants/contacts";
import UserCard from "../custom/userCard";

type Props = {};

const Users = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Text
        text={"Contacts"}
        className={"text-14-semibold text-black-100"}
        padding="py-2 px-1"
      />

      {contacts?.map((user, index) => (
        <ul key={user?.userIcon + index}>
          <UserCard userIcon={user?.userIcon} userName={user?.userName} />
        </ul>
      ))}
    </div>
  );
};

export default Users;
