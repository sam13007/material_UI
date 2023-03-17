import { Avatar, AvatarGroup, Badge, Stack } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

function AvatarMui() {
  return (
    <>
      <Stack direction="row" spacing={4} p="10px">
        <Avatar sx={{ bgcolor: "red" }}>DK</Avatar>
        <Avatar sx={{ bgcolor: "yellow", color: "black" }}>SK</Avatar>
        <Avatar
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
          sx={{ height: "48px", width: "48px" }}
          variant="rounded"
        >
          SK
        </Avatar>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "red" }}>DK</Avatar>
          <Avatar sx={{ bgcolor: "yellow", color: "black" }}>SK</Avatar>
          <Avatar sx={{ bgcolor: "yellow", color: "black" }}>SM</Avatar>
          <Avatar
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
            sx={{ height: "48px", width: "48px" }}
            variant="rounded"
          >
            SK
          </Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={4} p="10px">
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="success" variant="dot">
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} showZero color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={999} max={98} showZero color="primary">
          <MailIcon />
        </Badge>
      </Stack>
    </>
  );
}

export default AvatarMui;
