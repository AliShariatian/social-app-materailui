import { FC, PropsWithChildren } from "react";
import { Navbar, Rightbar, Sidebar } from "@/components";
import { Box, Stack } from "@mui/material";

const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <Box>
      <Navbar />

      <Stack direction="row" spacing={{ xs: 0, sm: 2 }} justifyContent="space-between">
        <Sidebar />
        {children}
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default MainLayout;
