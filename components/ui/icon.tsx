import Image from "next/image";

type Props = {
  iconName: string;
};

const Icon = ({ iconName }: Props) => {
  return (
    <div className="p-1">
      <Image src={`/svg/${iconName}.svg`} alt="filter" width={20} height={20} />
    </div>
  );
};

export default Icon;
