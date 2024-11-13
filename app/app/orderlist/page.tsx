import MainWrapper from "@/components/layout/main";
import Dashboard from "@/components/sections/dashboard";
import Text from "@/components/ui/text";

type Props = {};

const page = (props: Props) => {
  return (
    <MainWrapper>
      <Text text={"OrderList"} className={"text-14-semibold text-black-100"} />
      <Dashboard />
    </MainWrapper>
  );
};

export default page;
