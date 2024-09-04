import { FC } from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import Image from "@/public/imgs/posts/01.jpg";

const PostItem: FC = (): JSX.Element => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Ali Shariatian"
        subheader="September 4, 2024"
      />
      <CardMedia component="img" image={Image.src} alt="Paella dish" />

      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostItem;
