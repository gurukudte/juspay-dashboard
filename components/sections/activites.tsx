import React from "react";
import { AvatarIcon } from "../ui/icon";
import Text from "../ui/text";
import activities from "@/constants/activities";
import ActivitiesCard from "../custom/activitiesCard";

type Props = {};

const Activities = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Text
        text={"Activities"}
        className={"text-14-semibold text-black-100"}
        padding="py-2 px-1"
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
