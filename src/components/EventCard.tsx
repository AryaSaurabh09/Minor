import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Grid } from "@mui/material";
import { FC } from "react";
import { Secondary, CardColor } from "../design/color";
import CardMedia from '@mui/material/CardMedia';

import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

interface cardProps {
  title: string;
  body: string;
  imageUrl: string,
  date: string,
}

const BasicCard: FC<cardProps> = ({ title, body, date, imageUrl }) => {

  const [viewMore, setViewMore] = React.useState(false);

  const togggleViewMore = () => {
    if (viewMore) {
      setViewMore(false);
    } else {
      setViewMore(true);
    }
  };


  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          bgcolor: CardColor,
          width: "100%",
          height: "100%",
          minHeight: "400px",
          borderRadius: "10px",
          transition: "0.5s",
          "&:hover": {
            bgcolor: "white",
            boxShadow: "0px 0px 72px 15px rgba(0, 0, 0, 0.15)",
          },
        }}
        elevation={5}
      >
        <CardMedia>
          <LazyLoadImage src={imageUrl}
            placeholderSrc="https://img.freepik.com/free-photo/fading-blue-background_53876-88684.jpg"
            effect="blur"
            width="100%" style={{ height: "200px" }} height={200}
            alt="event-image"
          />
        </CardMedia>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color={Secondary} gutterBottom>
            <MonetizationOnIcon fontSize="large" />
          </Typography>
          <Typography
            variant="h5"
            color={Secondary}
            fontWeight="bold"
            component="div"
            gutterBottom
          >
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color={Secondary}>
            {date}
          </Typography>
           {body.length <= 400 && (
            <Typography variant="body1" color={Secondary}>
              {body}
            </Typography>
          )}

          {body.length > 400 && viewMore && (
            <>
            <Typography variant="body1" color={Secondary} sx={{ overflowY: 'scroll', maxHeight: '310px' }}>
              {body}
            </Typography>
            <Typography sx={{ cursor: 'pointer', color: 'blue' }} onClick={togggleViewMore}>
              View Less
            </Typography>
            </>
          )}

          {body.length > 400 && !viewMore && (
            <>
            <Typography variant="body1" color={Secondary}>
              {body.substring(0, 400) + "..."}
            </Typography>
            <Typography sx={{ cursor: 'pointer', color: 'blue' }} onClick={togggleViewMore}>
              View More
            </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BasicCard;
