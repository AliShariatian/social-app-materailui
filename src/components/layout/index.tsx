import Providers from "@/providers";
import { Box, Stack } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Navbar, Rightbar, Sidebar, AddPost } from "@/components";

const MainLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <Providers>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />

        <Stack direction="row" spacing={{ xs: 0, sm: 2 }} justifyContent="space-between">
          <Sidebar />
          {children}
          <Rightbar />
        </Stack>

        <AddPost />
      </Box>
    </Providers>
  );
};

export default MainLayout;
