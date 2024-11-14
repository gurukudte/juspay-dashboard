import { OutlinedInput } from "@mui/material";
import React from "react";
import { Icon } from "./icon";

type Props = {
  isGlobalSearch?: boolean;
};

const CustomInput = ({ isGlobalSearch }: Props) => {
  return (
    <OutlinedInput
      startAdornment={<Icon iconName={"Search"} size={16} />}
      endAdornment={isGlobalSearch ? <Icon iconName={"Cmd"} size={20} /> : null}
      sx={{
        height: "28px",
        width: "160px",
        padding: "4px 8px",
        background: isGlobalSearch
          ? "rgba(28, 28, 28, 0.05)"
          : "rgba(255, 255, 255, 0.4)",

        ".MuiOutlinedInput-input": {
          fontSize: "14px",
          height: "20px",
          padding: 0,
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: isGlobalSearch ? 0 : "1px solid rgba(28, 28, 28, 0.1)",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: isGlobalSearch
            ? "1px solid rgba(28, 28, 28, 0.4)"
            : "1px solid rgba(28, 28, 28, 0.5)",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: isGlobalSearch
            ? "1px solid rgba(28, 28, 28, 0.2)"
            : "1px solid rgba(28, 28, 28, 0.3)",
        },
      }}
      placeholder="Search"
    />
  );
};

export default CustomInput;
