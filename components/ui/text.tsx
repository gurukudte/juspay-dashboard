import { Typography } from "@mui/material";

type Props = {
  text: string;
  className: string;
  padding?: string;
};

const Text = ({ padding, text, className }: Props) => {
  return (
    <div className={`${padding ? padding : "py-1 px-2"} flex`}>
      <Typography component="h2" className={className} fontFamily={"inter"}>
        {text}
      </Typography>
    </div>
  );
};

export default Text;
