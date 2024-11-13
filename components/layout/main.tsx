import { ReactNode } from "react";
import Dashboard from "../sections/dashboard";
import Text from "../ui/text";

interface MainProps {
  children: ReactNode;
}

const MainWrapper = ({ children }: MainProps) => {
  return (
    <main className="w-full min-h-max mt-24 px-7 flex flex-col gap-4">
      {children}
    </main>
  );
};

export default MainWrapper;
