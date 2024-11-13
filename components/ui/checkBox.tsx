import Checkbox from "@mui/material/Checkbox";
import { Icon } from "./icon";
type CustomCheckboxProps = {};
const CustomCheckbox = ({}: CustomCheckboxProps) => {
  return (
    <Checkbox
      sx={{
        minHeight: 40,
        minWidth: 24,
        padding: 0,
        "& .MuiSvgIcon-root": {
          fontSize: 16,
        },
        "&:hover": {
          backgroundColor: "rgba(76, 175, 80, 0.1)",
        },
      }}
      icon={<Icon iconName={"CheckBox"} size={16} />}
      checkedIcon={<Icon iconName={"SelectedCheckbox"} size={16} />}
      disableRipple
    />
  );
};

export default CustomCheckbox;
