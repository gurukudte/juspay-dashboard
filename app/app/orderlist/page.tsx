import MainWrapper from "@/components/ui/mainWrapper";
import TextBody from "@/components/ui/text";
import OrderList from "./orderlist";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <TextBody
        text={"OrderList"}
        className={"text-14-semibold text-black-100"}
      />
      <OrderList />
    </>
  );
};

export default page;
