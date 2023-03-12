import { Box, Divider, Stack, Grid } from "@mui/material";
import React from "react";

function BoxMui() {
  return (
    <div style={{ margin: "20px" }}>
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
      <Grid container bgcolor="primary.main" textAlign="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box>Item 1</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>Item 2</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>Item 3</Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box>Item 4</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default BoxMui;
