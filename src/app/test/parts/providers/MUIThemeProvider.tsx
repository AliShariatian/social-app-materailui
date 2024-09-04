"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import muiTheme from "@/app/test/parts/styles/theme";

const MUIThemeProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
