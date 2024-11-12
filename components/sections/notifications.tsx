import Text from "../ui/text";
import NotificationCard from "../custom/notificationCard";
import notifications from "@/constants/notifications";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <Text
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
