import React from "react";
import { AvatarIcon } from "../ui/icon";
import TextBody from "../ui/text";
import ActivitiesCard from "../custom/activitiesCard";
import { useAppContext } from "@/context/app.context";
const activities = [
  {
    avatarName: "Activities-1",
    activity: "You have a bug that needs to be fixed.",
    timeStamp: "JustNow",
  },
  {
    avatarName: "Activities-2",
    activity: "Released a new version",
    timeStamp: "59 minutes ago",
  },
  {
    avatarName: "Activities-3",
    activity: "Submitted a bug",
    timeStamp: "12 hours ago",
  },
  {
    avatarName: "Activities-4",
    activity: "Modified A data in Page X",
    timeStamp: "Today, 11:59AM",
  },
  {
    avatarName: "Activities-5",
    activity: "Deleted a page in Project X",
    timeStamp: "Feb 2, 2023",
  },
];

type Props = {};

const Activities = (props: Props) => {
  const { themeText } = useAppContext();
  return (
    <div className="flex flex-col gap-2">
      <TextBody
        text={"Activities"}
        className={"text-14-semibold "}
        padding="py-2 px-1"
        color={themeText.primary}
      />

      {activities?.map((activity, index) => (
        <ul key={activity?.avatarName + index}>
          <ActivitiesCard
            avatarName={activity?.avatarName}
            activity={activity?.activity}
            timeStamp={activity?.timeStamp}
          />
        </ul>
      ))}
    </div>
  );
};

export default Activities;
