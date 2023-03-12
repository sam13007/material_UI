import {
  FormControlLabel,
  FormGroup,
  FormLabel,
  Switch,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function SwitchMui() {
  const [dark, setDark] = useState(false);
  return (
    <div
      style={
        dark
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white", color: "black" }
      }
    >
      <Typography variant="h4">Switch Toggle </Typography>
      <FormGroup>
        <FormLabel style={dark ? { color: "white" } : { color: "black" }}>
          Switch
        </FormLabel>
        <FormControlLabel
          control={<Switch checked={dark} onChange={(e) => setDark(!dark)} />}
          label="Dark mode"
        />
        <FormControlLabel control={<Switch disabled />} label="Dark mode" />
      </FormGroup>
    </div>
  );
}

export default SwitchMui;
