"use client";
import TextBody from "../ui/text";
import CustomCheckbox from "../ui/checkBox";
import OrderListCard from "./orderlistTableCard";
import { useState } from "react";
const data = [
  {
    id: "#CM9801",
    name: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    time: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    name: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    time: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    name: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    time: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    name: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    time: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    name: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    time: "Feb 2, 2023",
    status: "Rejected",
  },
];

type Props = {};

const OrderListTable = (props: Props) => {
  const [isSelectAll, seIsSelectAll] = useState<boolean>(false);
  const tableHeaders = [
    "Order ID",
    "User",
    "Project",
    "Address",
    "Date",
    "Status",
  ];
  const handleIsSelectedAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    seIsSelectAll(event.target.checked);
  };

  return (
    <div className="flex flex-col">
      <div className="flex border-solid border-b border-black-10 box-border">
        <ul className="min-w-5">
          <CustomCheckbox
            isChecked={isSelectAll}
            onChange={handleIsSelectedAll}
          />
        </ul>
        {tableHeaders.map((header) => (
          <ul
            key={header}
            className={`flex justify-start items-center w-full min-w-20 min-h-10 ${
              header === "Address" ? "max-w-[400px]" : "max-w-[220px]"
            }`}
          >
            <TextBody
              text={header}
              className={"text-12-regular text-black-40"}
              padding="py-2 px-3"
            />
          </ul>
        ))}
      </div>
      {data.map((item, index) => (
        <ul key={item.id + index}>
          <OrderListCard order={item} isSelectAll={isSelectAll} />
        </ul>
      ))}
    </div>
  );
};

export default OrderListTable;
