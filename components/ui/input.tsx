import { OutlinedInput } from "@mui/material";
import React from "react";
import { Icon } from "./icon";

type Props = {};

const CustomInput = (props: Props) => {
  return (
    <OutlinedInput
      startAdornment={<Icon iconName={"Search"} size={16} />}
      sx={{
        height: "28px",
        width: "160px",
        padding: "4px 8px",
        background: "rgba(255, 255, 255, 0.4)",

        ".MuiOutlinedInput-input": {
          fontSize: "14px",
          height: "20px",
          padding: 0,
          background: "rgba(255, 255, 255, 0.4)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
        },
      }}
      placeholder="Search"
    />
  );
};

export default CustomInput;
