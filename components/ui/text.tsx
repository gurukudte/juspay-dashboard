import { Typography } from "@mui/material";

type Props = {
  text: string;
  className: string;
  padding?: string;
};

const TextBody = ({ padding, text, className }: Props) => {
  return (
    <div className={`${padding ? padding : "py-1 px-2"} flex`}>
      <Typography variant="body1" className={className} fontFamily={"inter"}>
        {text}
      </Typography>
    </div>
  );
};

export default TextBody;
