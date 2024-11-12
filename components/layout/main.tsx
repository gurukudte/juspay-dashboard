import Dashboard from "../sections/dashboard";
import Text from "../ui/text";

interface MainProps {}

const MainWrapper = ({}: MainProps) => {
  return (
    <main className="w-full min-h-max mt-24 px-7 flex flex-col gap-4">
      <Text text={"eCommerce"} className={"text-14-semibold text-black-100"} />
      <Dashboard />
    </main>
  );
};

export default MainWrapper;
