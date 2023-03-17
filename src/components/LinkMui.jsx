import { Link, Stack } from "@mui/material";
import React from "react";

function LinkMui() {
  return (
    <Stack direction="row" m={4} spacing={2}>
      <Link href="*">Link comp</Link>
      <Link href="*" underline="hover">
        Underline on hover
      </Link>
      <Link href="*" underline="none">
        None
      </Link>
      <Link href="*" underline="always">
        Always
      </Link>
      <Link href="*" underline="hover" color="Brown" variant="h3">
        Success link
      </Link>
    </Stack>
  );
}

export default LinkMui;
