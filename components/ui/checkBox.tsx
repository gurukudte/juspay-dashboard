import Checkbox from "@mui/material/Checkbox";
import { Icon } from "./icon";
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { useAppContext } from "@/context/app.context";
import { useThemeContext } from "@/context/themeProvider/ThemeContextProvider";

type CustomCheckboxProps = {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const CustomCheckbox = ({ isChecked, onChange }: CustomCheckboxProps) => {
  const { themeText } = useAppContext();
  const { darkMode } = useThemeContext();
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
        icon={
          darkMode ? (
            <Icon iconName={"Checkbox-black"} size={16} />
          ) : (
            <Icon iconName={"UnselectedCheckbox"} size={16} />
          )
        }
        checkedIcon={
          <TbSquareRoundedCheckFilled color={themeText.primary} size={16} />
        }
        disableRipple
      />
    </div>
  );
};

export default CustomCheckbox;
