import { Rating, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function RatingMui() {
  const [rate, setRate] = useState(0);
  const rateLabel = {
    0.5: "sodhikadhinge daa",
    1.0: "kevalam",
    1.5: "Simply waste",
    2.0: "better",
    2.5: "2.5",
    3.0: "Paravale",
    3.5: "Sema twist",
    4.0: "Adadadadadadadadadadad",
    4.5: "Nearly perfect",
    5.0: "Thala Mass doi",
  };
  return (
    <div style={{ padding: "10px" }}>
      <Typography variant="h5"> Rating</Typography>
      <Stack spacing={2} direction="row">
        <Typography variant="body1">Your Rating</Typography>
        <Rating
          precision={0.5}
          value={rate}
          onChange={(e, val) => {
            setRate(val);
          }}
          size="large"
        />
        <Typography variant="body2">{rateLabel[rate]}</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="body1">Icon Rating System</Typography>
        <Rating
          precision={0.5}
          value={rate}
          onChange={(e, val) => {
            setRate(val);
          }}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography variant="body2">{rateLabel[rate]}</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="body1">Disabled Rating System</Typography>
        <Rating
          precision={0.5}
          value={rate}
          onChange={(e, val) => {
            setRate(val);
          }}
          disabled
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography variant="body2">{rateLabel[rate]}</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="body1">Readonly Rating System</Typography>
        <Rating
          precision={0.5}
          value={rate}
          onChange={(e, val) => {
            setRate(val);
          }}
          readOnly
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography variant="body2">{rateLabel[rate]}</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="body1">
          Highlight Selected only Rating System
        </Typography>
        <Rating
          precision={0.5}
          value={rate}
          onChange={(e, val) => {
            setRate(val);
          }}
          size="large"
          highlightSelectedOnly
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        <Typography variant="body2">{rateLabel[rate]}</Typography>
      </Stack>
    </div>
  );
}

export default RatingMui;
