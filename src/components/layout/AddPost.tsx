"use client";

import { FC, useState } from "react";
import { Add, DateRange, EmojiEmotions, Image as ImageIcon, PersonAdd, VideoCameraBack } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";

const AddPost: FC = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <Tooltip title="Add Post" onClick={() => setIsModalOpen(true)} sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
        <Fab color="primary">
          <Add />
        </Fab>
      </Tooltip>

      {/* Modal */}
      <StyledModal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Box width={400} height={300} p={3} borderRadius={5} bgcolor="background.default" color="text.primary">
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>

          <UserBox>
            <Avatar sx={{ width: 30, height: 30 }} src="" />
            <Typography fontWeight={500} component="span">
              Ali Shariatian
            </Typography>
          </UserBox>

          <TextField multiline rows={3} variant="standard" sx={{ width: "100%" }} placeholder="What's on your mind?" />

          <Stack direction="row" gap={1} mt={1} mb={3}>
            <EmojiEmotions color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup variant="contained" fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
