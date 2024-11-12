import { Icon } from "../ui/icon";
import Text from "../ui/text";

type Props = {
  cardName: string;
  value: string;
  change: number;
  cardColor: string;
};

const MetricCard = ({ cardName, value, change, cardColor }: Props) => {
  return (
    <div
      className={`${cardColor} min-w-[200px] rounded-2xl p-6 flex flex-col gap-2`}
    >
      <Text
        text={cardName}
        className={" text-14-semibold text-black-100"}
        padding="none"
      />
      <div className="flex justify-between items-center">
        <Text
          text={value}
          className={" text-24-semibold text-black-100"}
          padding="none"
        />
        <div className="flex justify-center items-center gap-1">
          <Text
            text={`${change > 0 ? "+" + change : change}%`}
            className={" text-12-regular text-black-100"}
            padding="none"
          />
          {change > 0 ? (
            <Icon iconName={"ArrowRise"} size={16} padding="p-0" />
          ) : (
            <Icon iconName={"ArrowFall"} size={16} padding="p-0" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
