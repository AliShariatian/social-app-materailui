"use client";

import { FC, PropsWithChildren } from "react";
import { Button, styled, useTheme } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";

const CustomButton: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "red",
    borderWidth: "5px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    color: "white",
    padding: "1rem",
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: "blue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  }));

  const theme = useTheme() as Theme;

  return (
    <div className="flex items-center gap-4">
      {/* Or */}
      <BlueButton variant="contained" startIcon={<Settings />} endIcon={<Add />}>
        {children}
      </BlueButton>

      {/* Or */}
      <Button variant="contained" startIcon={<Settings />} endIcon={<Add />} color="secondary">
        {children}
      </Button>

      {/* Or */}
      <Button variant="contained" startIcon={<Settings />} endIcon={<Add />} style={{ backgroundColor: theme.palette.primary.main }}>
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
