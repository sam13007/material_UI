import { Box, Divider, Stack } from "@mui/material";
import React from "react";

function BoxMui() {
  return (
    <Stack
      sx={{ border: "1px  solid", margin: "10px" }}
      direction="row"
      divider={<Divider flexItem orientation="vertical" />}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "100px",
        }}
        height="200px"
        width="200px"
      >
        Content
      </Box>
      <Box
        sx={{
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "100px",
        }}
        height="200px"
        width="200px"
      >
        Content
      </Box>
    </Stack>
  );
}

export default BoxMui;
