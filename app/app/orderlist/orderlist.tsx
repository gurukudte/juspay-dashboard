import OrderListTable from "@/components/custom/orderlistTable";
import { Icon } from "@/components/ui/icon";
import CustomInput from "@/components/ui/input";
import { FormControl, OutlinedInput } from "@mui/material";
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
        <div>
          <CustomInput />
        </div>
      </div>
      <OrderListTable />
    </div>
  );
};

export default OrderList;
