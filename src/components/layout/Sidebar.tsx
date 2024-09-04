import { FC } from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { AccountBox, Article, Home, ModeNight, People, Person, Settings, Storefront } from "@mui/icons-material";

const Sidebar: FC = (): JSX.Element => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="sticky" top={80} height="fit-content">
        <List>
          {listItems.map(({ text, href, Icon, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton href={href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Change theme switch */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

const listItems = [
  {
    id: 0,
    text: "Home Page",
    href: "#home",
    Icon: Home,
  },
  {
    id: 1,
    text: "Pages",
    href: "#",
    Icon: Article,
  },
  {
    id: 2,
    text: "Groups",
    href: "#",
    Icon: People,
  },
  {
    id: 3,
    text: "Marketplace",
    href: "#",
    Icon: Storefront,
  },
  {
    id: 4,
    text: "Friends",
    href: "#",
    Icon: Person,
  },
  {
    id: 5,
    text: "Settings",
    href: "#",
    Icon: Settings,
  },
  {
    id: 6,
    text: "Profile",
    href: "#",
    Icon: AccountBox,
  },
];
