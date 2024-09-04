"use client";

import { FC, useState } from "react";
import { AppBar, Avatar, Badge, Box, Divider, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { DataObject, Mail, Notifications } from "@mui/icons-material";

const Navbar: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ marginBottom: 4 }}>
      <StyledToolbar>
        <Typography variant="h6" component="h2" display={{ xs: "none", sm: "block" }}>
          Ali Dev
        </Typography>

        <DataObject sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase placeholder="Search..." />
        </Search>

        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={3} color="error">
            <Notifications />
          </Badge>

          <Avatar src="" sx={{ width: 30, height: 30, cursor: "pointer" }} onClick={() => setIsMenuOpen(true)} />
        </Icons>

        <UserBox>
          <Avatar src="" sx={{ width: 30, height: 30 }} onClick={() => setIsMenuOpen(true)} />
          <Typography component="span">Ali shariatian</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>

        <Divider />

        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;

// For use styled, must be use "use client";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
