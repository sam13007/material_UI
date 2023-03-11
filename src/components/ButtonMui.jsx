import React, { useState } from "react";
import {
  Button,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

function ButtonMui() {
  const [format, setFormat] = useState(["bold"]);
  const handleFormat = (e, formatValue) => {
    setFormat(formatValue);
  };
  return (
    <Stack spacing={2} sx={{ padding: 4 }}>
      <Typography variant="h4">Button variants</Typography>
      <Stack spacing={4} direction="row" justifyContent="center">
        <Button variant="text">Text Button</Button>
        <Button variant="contained">Contained Button</Button>
        <Button variant="outlined">Outline Button</Button>
        <Button variant="outlined" startIcon={<SendIcon />}>
          Outline Button
        </Button>
        <Button variant="outlined" endIcon={<SendIcon />}>
          Outline Button
        </Button>
      </Stack>

      <Typography variant="h4">Button size</Typography>
      <Stack
        display="block"
        spacing={4}
        direction="row"
        justifyContent="center"
      >
        <Button variant="contained" size="small">
          Small Button
        </Button>
        <Button variant="contained" size="medium">
          Medium Button
        </Button>
        <Button variant="contained" size="large">
          Large Button
        </Button>
      </Stack>

      <Typography variant="h4">Button Colors</Typography>
      <Stack spacing={4} direction="row" justifyContent="center">
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button variant="contained" color="error">
          Error Button
        </Button>
        <Button variant="contained" color="warning">
          Warning Button
        </Button>
        <Button variant="contained" color="info">
          Info Button
        </Button>
        <Button variant="contained" color="success">
          Success Button
        </Button>
      </Stack>
      <Typography variant="h4">Icons Colors</Typography>
      <Stack spacing={4} direction="row" justifyContent="center">
        <IconButton
          color="primary"
          variant="contained"
          onClick={() => alert("Icon button clicked")}
        >
          <SendIcon />
        </IconButton>
      </Stack>
      <ButtonGroup variant="contained">
        <Button>Left</Button>
        <Button>Right</Button>
        <Button>center</Button>
      </ButtonGroup>
      <Typography variant="h4">Toggle Button</Typography>
      <ToggleButtonGroup value={format} color="primary" onChange={handleFormat}>
        <ToggleButton value="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underline">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ButtonMui;
