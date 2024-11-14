"use client";
import { usePathnameChange } from "@/hooks/pathName.hook";
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

//creating app context
const AppContext = createContext<AppContextValue | null>(null);

//creating app context hook to use within our components
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

//creating app context Provider to adding to providers
export const AppContextProvider: React.FC<IAppProvider> = ({
  children,
}: IAppProvider) => {
  const currentRoute = usePathnameChange();

  return (
    <AppContext.Provider value={{ currentRoute }}>
      {children}
    </AppContext.Provider>
  );
};
