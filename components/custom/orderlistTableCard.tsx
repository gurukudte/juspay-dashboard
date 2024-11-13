import React from "react";
import CustomCheckbox from "../ui/checkBox";
import TextBody from "../ui/text";

type Props = {
  order: {
    id: string;
    name: string;
    project: string;
    address: string;
    time: string;
    status: string;
  };
};

const OrderListCard = ({ order }: Props) => {
  return (
    <div className="flex border-solid border-b border-black-10 box-border">
      <ul className="min-w-5">
        <CustomCheckbox />
      </ul>
      {Object.values(order).map((orderItem, index) => (
        <ul
          key={orderItem}
          className={`flex justify-start items-center w-full min-w-20 min-h-10 ${
            index === 3 ? "max-w-[400px]" : "max-w-[220px]"
          } inline-block text-nowrap overflow-hidden text-ellipsis max-w-[198px]`}
        >
          <TextBody
            text={orderItem}
            className={"text-12-regular text-black-40"}
            padding="py-2 px-3"
          />
        </ul>
      ))}
    </div>
  );
};

export default OrderListCard;
