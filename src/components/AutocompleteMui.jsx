import React, { useState } from "react";
import { Autocomplete, Stack, TextField, Typography } from "@mui/material";

function AutocompleteMui() {
  const skills = ["html", "CSS", "JS", "React", "Python"];
  const [skillSet, setSkillSet] = useState(null);

  return (
    <div>
      <Stack spacing={2} width="250px">
        <Typography variant="h5">Auto complete with textfield</Typography>
        <Autocomplete
          options={skills}
          value={skillSet}
          onChange={(e, val) => setSkillSet(val)}
          renderInput={(params) => <TextField label="Skills" {...params} />}
          freeSolo
        />
      </Stack>
    </div>
  );
}

export default AutocompleteMui;
