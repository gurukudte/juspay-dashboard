import Checkbox from "@mui/material/Checkbox";
import { Icon } from "./icon";
type CustomCheckboxProps = {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const CustomCheckbox = ({ isChecked, onChange }: CustomCheckboxProps) => {
  return (
    <div className=" min-h-10 min-w-6 flex items-center justify-center">
      <Checkbox
        sx={{
          minHeight: 20,
          minWidth: 20,
          padding: 0,
          "& .MuiSvgIcon-root": {
            fontSize: 16,
          },
          "&:hover": {
            backgroundColor: "rgba(76, 175, 80, 0.1)",
          },
        }}
        checked={isChecked}
        onChange={onChange}
        icon={<Icon iconName={"UnselectedCheckbox"} size={16} />}
        checkedIcon={<Icon iconName={"SelectedCheckbox"} size={16} />}
        disableRipple
      />
    </div>
  );
};

export default CustomCheckbox;
