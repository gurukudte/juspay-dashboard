"use client";
import { AppContextProvider } from "@/context/app.context";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
//Adding appcontext provider to provider to use in our layout
const Providers = ({ children }: Props) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export default Providers;
