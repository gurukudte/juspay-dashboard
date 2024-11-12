import React from "react";
import Text from "../ui/text";
import UserCard from "../custom/contactsCard";
const contacts = [
  {
    userIcon: "User-1",
    userName: "Natali Craig",
  },
  {
    userIcon: "User-2",
    userName: "Drew Cano",
  },
  {
    userIcon: "User-3",
    userName: "Orlando Diggs",
  },
  {
    userIcon: "User-4",
    userName: "Andi Lane",
  },
  {
    userIcon: "User-5",
    userName: "Kate Morrison",
  },
  {
    userIcon: "User-6",
    userName: "Koray Okumus",
  },
];

type Props = {};

const Contacts = (props: Props) => {
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

export default Contacts;
