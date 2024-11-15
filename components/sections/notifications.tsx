import TextBody from "../ui/text";
import NotificationCard from "../custom/notificationCard";
import { useTheme } from "@mui/material";
import { useAppContext } from "@/context/app.context";
const notifications = [
  {
    iconName: "BugBeetle",
    notification: "You have a bug that needs to be fixed.",
    timeStamp: "JustNow",
  },
  {
    iconName: "User",
    notification: "New user registered",
    timeStamp: "59 minutes ago",
  },
  {
    iconName: "BugBeetle",
    notification: "You have a bug that needs to be fixed.",
    timeStamp: "12 hours ago",
  },
  {
    iconName: "Broadcast",
    notification: "Andi Lane subscribed to you",
    timeStamp: "Today, 11:59AM",
  },
];

type Props = {};

const Notifications = (props: Props) => {
  const { themeText } = useAppContext();
  return (
    <div className="flex flex-col gap-2">
      <TextBody
        text={"Notifications"}
        className={"text-14-semibold"}
        padding="py-2 px-1"
        color={themeText.primary}
      />

      {notifications?.map((notification, index) => (
        <ul key={notification?.iconName + index}>
          <NotificationCard
            iconName={notification?.iconName}
            notification={notification?.notification}
            timeStamp={notification?.timeStamp}
          />
        </ul>
      ))}
    </div>
  );
};

export default Notifications;
