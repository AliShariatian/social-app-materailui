"use client";

import { FC, PropsWithChildren } from "react";
import MUIThemeProvider from "./MUIThemeProvider";

const Providers: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <MUIThemeProvider>{children}</MUIThemeProvider>;
};

export default Providers;
