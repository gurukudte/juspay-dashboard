import MainWrapper from "@/components/ui/mainWrapper";
import Dashboard from "@/app/app/ecommerce/dashboard";
import TextBody from "@/components/ui/text";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <TextBody
        text={"eCommerce"}
        className={"text-14-semibold text-black-100"}
      />
      <Dashboard />
    </>
  );
};

export default page;
