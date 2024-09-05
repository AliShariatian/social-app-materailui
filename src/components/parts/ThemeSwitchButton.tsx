"use client";

import { FC } from "react";
import { Switch } from "@mui/material";
import useTheme from "@/hooks/useTheme";

const ThemeSwitchButton: FC = (): JSX.Element => {
  const { toggleMode, mode } = useTheme((state) => state);

  return <Switch onChange={toggleMode} checked={mode === "dark"} />;
};

export default ThemeSwitchButton;
