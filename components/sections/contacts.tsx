import React from "react";
import TextBody from "../ui/text";
import UserCard from "../custom/contactsCard";
import { useAppContext } from "@/context/app.context";
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
  const { themeText } = useAppContext();
  return (
    <div className="flex flex-col gap-2">
      <TextBody
        text={"Contacts"}
        className={"text-14-semibold"}
        padding="py-2 px-1"
        color={themeText.primary}
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
