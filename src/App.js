import "./App.css";
import AccordionMui from "./components/AccordionMui";

import BoxMui from "./components/BoxMui";
import AutocompleteMui from "./components/AutocompleteMui";
import SwitchMui from "./components/SwitchMui";
import ButtonMui from "./components/ButtonMui";
import SelectMui from "./components/SelectMui";
import TypographyMui from "./components/TypographyMui";
import TextfieldMui from "./components/TextfieldMui";
import RadioMui from "./components/RadioMui";
import CheckboxMui from "./components/CheckboxMui";
import RatingMui from "./components/RatingMui";
import { Typography } from "@mui/material";
import CardMui from "./components/CardMui";
function App() {
  return (
    <div>
      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Input Components
      </Typography>
      <TypographyMui />
      <ButtonMui />
      <TextfieldMui />
      <SelectMui />
      <RadioMui />
      <CheckboxMui />
      <SwitchMui />
      <RatingMui />
      <AutocompleteMui />

      <Typography variant="h1" sx={{ textAlign: "center" }}>
        Layout Components
      </Typography>
      <BoxMui />
      <CardMui />
      <AccordionMui />
    </div>
  );
}

export default App;
