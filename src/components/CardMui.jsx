import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import React from "react";

function CardMui() {
  return (
    <Box sx={{ margin: "10px" }} width="300px">
      <Card>
        <CardMedia
          component="img"
          alt="Card image"
          image="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            React
          </Typography>
          <Typography variant="body1" color="text.secondary">
            One of the finest library by FB{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default CardMui;
