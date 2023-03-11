import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

function RadioMui() {
  const [radioVal, setRadioVal] = useState("");
  return (
    <div>
      <FormControl>
        <FormLabel>Years of exp</FormLabel>
        <RadioGroup
          value={radioVal}
          onChange={(e) => setRadioVal(e.target.value)}
        >
          <FormControlLabel
            value="0-2"
            control={<Radio color="success" size="small" />}
            label="0-2"
          />
          <FormControlLabel value="2-4" control={<Radio />} label="2-4" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default RadioMui;
