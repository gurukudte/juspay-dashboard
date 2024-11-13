import OrderListTable from "@/components/custom/orderlistTable";
import { Icon } from "@/components/ui/icon";
import React from "react";

type Props = {};

const OrderList = (props: Props) => {
  return (
    <div>
      <div className="bg-primary-light rounded-lg p-2 flex justify-between items-center gap-3">
        <div className="flex gap-2">
          <Icon iconName={"Add"} />
          <Icon iconName={"FunnelSimple"} />
          <Icon iconName={"ArrowsDownUp"} />
        </div>
        <div>search</div>
      </div>
      <OrderListTable />
    </div>
  );
};

export default OrderList;
