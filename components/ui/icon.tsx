import Image from "next/image";

type IconProps = {
  iconName: string;
  size?: number;
  padding?: string;
};

const Icon = ({ iconName, size, padding }: IconProps) => {
  return (
    <div className={`${padding ? padding : "p-1"}`}>
      <Image
        src={`/svg/${iconName}.svg`}
        alt="icon"
        width={size ? size : 20}
        height={size ? size : 20}
      />
    </div>
  );
};

type FillerdIconProps = {
  iconName: string;
};
const FillerdIcon = ({ iconName }: FillerdIconProps) => {
  return (
    <div className="p-1 rounded-lg bg-primary-blue flex items-center justify-center">
      <Image
        src={`/svg/${iconName}.svg`}
        alt="filledIcon"
        width={16}
        height={16}
      />
    </div>
  );
};
type AvatarIconProps = {
  iconName: string;
};
const AvatarIcon = ({ iconName }: AvatarIconProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={`/svg/${iconName}.svg`}
        alt="avatarIcon"
        width={24}
        height={24}
      />
    </div>
  );
};

export { Icon, FillerdIcon, AvatarIcon };
