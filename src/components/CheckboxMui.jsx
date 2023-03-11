import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function CheckboxMui() {
  const [checked, setChecked] = useState([]);
  const handleChecked = (e) => {
    const index = checked.indexOf(e.target.value);
    if (index === -1) {
      setChecked([...checked, e.target.value]);
    } else {
      setChecked(checked.filter((check) => check !== e.target.value));
    }
  };
  return (
    <div>
      <FormControl>
        <FormLabel>Checkbox</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChecked}
                checked={checked.includes("One")}
              />
            }
            value="One"
            label="One"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChecked}
                checked={checked.includes("Two")}
              />
            }
            value="Two"
            label="Two"
          />
          <FormControlLabel
            control={
              <Checkbox
                onChange={handleChecked}
                checked={checked.includes("Three")}
              />
            }
            value="Three"
            label="Three"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxMui;
