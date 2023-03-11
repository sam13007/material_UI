import { InputAdornment, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function TextfieldMui() {
  const [name, setName] = useState("");
  return (
    <Stack spacing={4} sx={{ padding: 4 }}>
      <Typography variant="h4">Text field variants</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          value={name}
          error={!name}
          onChange={(e) => setName(e.target.value)}
          helperText={!name ? "Please enter your name" : `Nice name ${name}`}
        />
        <TextField
          label="Name"
          type="text"
          variant="standard"
          focused
          color="secondary"
        />
        <TextField label="Name" type="text" variant="filled" color="error" />
      </Stack>
      <Typography variant="h4">Text field Props</Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" type="text" required />
        <TextField
          label="Password with helper text"
          type="password"
          required
          helperText="Password shouldn't be empty"
        />
        <TextField
          label="Email Disabled"
          type="email"
          required
          disabled
          value="email@example.com"
        />
        <TextField
          label="Name"
          InputProps={{ readOnly: true }}
          defaultValue="Shyam"
        />
        <TextField
          error
          label="Name"
          required
          defaultValue="Shyam"
          helperText="incorrect entry"
        />
      </Stack>
      <Typography variant="h4">Text field Multiline</Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          multiline
          rows={5}
          label="Multiine text field"
          color="success"
          focused
        />
        <TextField
          label="Name"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          focused
          color="warning"
        />
        <TextField
          label="Name"
          InputProps={{
            endAdornment: <InputAdornment position="end">$</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default TextfieldMui;
