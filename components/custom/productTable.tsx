import React from "react";
import Text from "../ui/text";
const topSellingProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];
type Props = {};

const ProductTable = (props: Props) => {
  return (
    <div className=" bg-primary-light rounded-2xl flex flex-col p-6 gap-1">
      <Text
        text={"Top Selling Products"}
        className={" text-14-semibold text-black-100"}
        padding="p-0"
      />
      <table className="flex flex-col">
        <thead className="border-solid border-b border-black-10 box-border">
          <tr className="grid grid-cols-[224px_130px_130px_130px] justify-start items-start">
            {["Name", "Price", "Quantity", "Amount"].map((item, index) => (
              <th
                className={`text-12-regular text-black-40 py-2 ${
                  index === 0 ? "pr-3" : "px-3"
                } flex justify-start`}
                key={item}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {topSellingProducts.map((product) => (
            <tr
              className="grid grid-cols-[224px_130px_130px_130px] justify-start items-start"
              key={product.name}
            >
              {Object.values(product).map((item, index) => (
                <td
                  className={`text-12-regular text-black-100 py-2 ${
                    index === 0 ? "pr-3" : "px-3"
                  } flex justify-start`}
                  key={`${item.toString() + index}`}
                >
                  {index === 1 || index === 3
                    ? "$" + item.toLocaleString()
                    : item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
