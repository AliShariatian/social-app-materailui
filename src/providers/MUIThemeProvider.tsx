import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import useTheme from "@/hooks/useTheme";
import muiTheme from "@/styles/muiTheme";

const MUIThemeProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const { mode } = useTheme((state) => state);
  const { theme } = muiTheme(mode);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
