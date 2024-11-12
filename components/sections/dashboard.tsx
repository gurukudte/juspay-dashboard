import Metrics from "../custom/metrics";
import ProductTable from "../custom/productTable";

const Dashboard = () => {
  return (
    <div className="w-[892px] h-[970px] grid grid-cols-8 grid-rows-[252px_318px_336px] gap-x-7 gap-y-7">
      <div className="row-span-1 col-span-4">
        <Metrics />
      </div>
      <div className=" row-span-1 col-span-4">
        <img src="/images/BarChart.png" alt="barchart" />
      </div>
      <div className=" row-span-1 col-span-6">
        <img src="/images/Graph.jpg" alt="graph" />
      </div>
      <div className="row-span-1 col-span-2">
        <img src="/images/world.jpg" alt="world" />
      </div>
      <div className="row-span-1 col-span-6">
        <ProductTable />
      </div>
      <div className=" row-span-1 col-span-2">
        <img src="/images/PieChart.jpg" alt="pieChart" />
      </div>
    </div>
  );
};

export default Dashboard;
