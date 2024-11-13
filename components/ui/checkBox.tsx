import Checkbox from "@mui/material/Checkbox";
import { Icon } from "./icon";
type CustomCheckboxProps = {};
const CustomCheckbox = ({}: CustomCheckboxProps) => {
  return (
    <Checkbox
      sx={{
        "& .MuiSvgIcon-root": {
          fontSize: 16,
        },
        "&.Mui-checked": {
          color: "#4caf50", // Custom checked color
        },
        "&:hover": {
          backgroundColor: "rgba(76, 175, 80, 0.1)",
        },
      }}
      icon={<Icon iconName={"CheckBox"} />}
      checkedIcon={<Icon iconName={"SelectedCheckbox"} />}
      disableRipple
    />
  );
};

export default CustomCheckbox;
