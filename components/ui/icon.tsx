import Image from "next/image";

type Props = {
  iconName: string;
  size?: number;
  padding?: string;
};

const Icon = ({ iconName, size, padding }: Props) => {
  return (
    <div className={`${padding ? padding : "p-1"}`}>
      <Image
        src={`/svg/${iconName}.svg`}
        alt="filter"
        width={size ? size : 20}
        height={size ? size : 20}
      />
    </div>
  );
};

export default Icon;
