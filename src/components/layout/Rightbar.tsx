/* eslint-disable @next/next/no-img-element */
import { FC, Fragment } from "react";
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from "@mui/material";

const Rightbar: FC = (): JSX.Element => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Stack spacing={2} position="sticky" top={80} height="fit-content">
        {/* ---------------------- */}
        <Box>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>

          <AvatarGroup max={5} sx={{ justifyContent: "flex-end" }}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/6.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/7.jpg" />
            <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/8.jpg" />
          </AvatarGroup>
        </Box>

        {/* ---------------------- */}
        <Box>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Latest Photos
          </Typography>

          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img src="https://material-ui.com/static/images/image-list/breakfast.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://material-ui.com/static/images/image-list/burgers.jpg" alt="" />
            </ImageListItem>
            <ImageListItem>
              <img src="https://material-ui.com/static/images/image-list/camera.jpg" alt="" />
            </ImageListItem>
          </ImageList>
        </Box>

        {/* ---------------------- */}
        <Box>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Latest Conversations
          </Typography>

          <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {LatestConversationsItems.map((item, _, array) => (
              <Fragment key={item.id}>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.imgSrc} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={
                      <>
                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary">
                          {item.name}
                        </Typography>
                        {` — ${item.message}...`}
                      </>
                    }
                  />
                </ListItem>

                {item.id !== array.at(-1)?.id && <Divider variant="inset" component="li" />}
              </Fragment>
            ))}
          </List>
        </Box>
      </Stack>
    </Box>
  );
};

export default Rightbar;

const LatestConversationsItems = [
  { id: 0, title: "Brunch this weekend?", name: "Ali Connors", message: "I'll be in your neighborhood doing errands this", imgSrc: "https://material-ui.com/static/images/avatar/3.jpg" },
  { id: 1, title: "Summer BBQ", name: "to Scott, Alex, Jennifer", message: "Wish I could come, but I'm out of town this", imgSrc: "" },
  { id: 2, title: "Oui Oui", name: "Sandra Adams", message: "Do you have Paris recommendations? Have you ever", imgSrc: "" },
];
