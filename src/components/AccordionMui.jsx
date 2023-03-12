import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function AccordionMui() {
  return (
    <Box width="300px">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          Accordion
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          quibusdam quia, quos natus ducimus amet et veniam? Debitis, maiores.
          Voluptates aspernatur alias eius, consectetur nesciunt nihil unde
          neque a reprehenderit.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default AccordionMui;
