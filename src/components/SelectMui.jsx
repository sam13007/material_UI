import React, { useState } from "react";
import { Box, MenuItem, TextField, Typography } from "@mui/material";

function SelectMui() {
  const [selectVal, setSelectVal] = useState([]);
  const handleSelect = (e) => {
    const value = e.target.value;

    setSelectVal(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box sx={{ textAlign: "center" }} width="450px">
      <Typography variant="h4">Select using Text field</Typography>
      <TextField
        select
        label="Select your fav IPL team"
        fullWidth
        value={selectVal}
        onChange={handleSelect}
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="MI">MI</MenuItem>
        <MenuItem value="CSK">CSK</MenuItem>
        <MenuItem value="KKR">KKR</MenuItem>
      </TextField>
    </Box>
  );
}

export default SelectMui;
