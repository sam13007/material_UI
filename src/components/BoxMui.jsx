import { Box } from "@mui/material";
import React from "react";

function BoxMui() {
  return (
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
  );
}

export default BoxMui;
