import { FC } from "react";
import { Stack } from "@mui/material";
import { PostItem } from "@/components";

const Feed: FC = (): JSX.Element => {
  return (
    <Stack spacing={4} flex={4} p={2}>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </Stack>
  );
};

export default Feed;
