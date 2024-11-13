"use client";
import { AppContextProvider } from "@/context/app.context";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <AppContextProvider>{children}</AppContextProvider>;
};

export default Providers;
