import { Typography } from "@mui/material";

type Props = {
  text: string;
  className: string;
};

const Text = ({ text, className }: Props) => {
  return (
    <div className="py-1 px-2">
      <Typography component="h2" className={className}>
        {text}
      </Typography>
    </div>
  );
};

export default Text;
