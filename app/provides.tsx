"use client";
import { AppContextProvider } from "@/context/app.context";
import { ThemeContextProvider } from "@/context/themeProvider/ThemeContextProvider";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
//Adding appcontext provider to provider to use in our layout
const Providers = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </ThemeContextProvider>
  );
};

export default Providers;
