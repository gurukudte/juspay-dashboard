"use client";
import { usePathname } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type AppContextValue = {
  currentRoute: string;
};

const AppContext = createContext<AppContextValue | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext must be used within a Provider");
  }
  return context;
};

interface IAppProvider {
  children: ReactNode;
}

export const AppContextProvider: React.FC<IAppProvider> = ({
  children,
}: IAppProvider) => {
  const [currentRoute, setCurrentRoute] = useState("");
  const pathName = usePathname();
  useEffect(() => {
    setCurrentRoute(pathName);
  }, []);

  return (
    <AppContext.Provider value={{ currentRoute }}>
      {children}
    </AppContext.Provider>
  );
};
