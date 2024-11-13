import TextBody from "../ui/text";
import NotificationCard from "../custom/notificationCard";
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
  return (
    <div className="flex flex-col gap-2">
      <TextBody
        text={"Notifications"}
        className={"text-14-semibold text-black-100"}
        padding="py-2 px-1"
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
