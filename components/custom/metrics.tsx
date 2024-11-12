import React, { useCallback } from "react";
import MetricCard from "../custom/mertricCard";
const metrics = [
  {
    cardName: "Customers",
    value: "3,781",
    change: 11.01,
  },
  {
    cardName: "Orders",
    value: "1,219",
    change: -0.03,
  },
  {
    cardName: "Revenue",
    value: "$695",
    change: 15.03,
  },
  {
    cardName: "Growth",
    value: "30.1%",
    change: 6.08,
  },
];

type Props = {};

const Metrics = (props: Props) => {
  const cardColors = [
    "bg-primary-blue",
    "bg-primary-light",
    "bg-primary-light",
    "bg-primary-purple",
  ];

  return (
    <div className="flex flex-wrap gap-7">
      {metrics?.map((metric, index) => (
        <ul key={metric.cardName}>
          <MetricCard
            cardName={metric.cardName}
            value={metric.value}
            change={metric.change}
            cardColor={cardColors[index]}
          />
        </ul>
      ))}
    </div>
  );
};

export default Metrics;
