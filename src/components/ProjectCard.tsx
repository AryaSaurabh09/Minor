import { useState } from "react";
import { makeStyles } from '@mui/material';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Grid, Box } from "@mui/material";
import { FC } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Secondary, CardColor } from "../design/color";

interface projectProps {
  image?: string;
  projectName: string;
  description: string;
}



const ProjectCard: FC<projectProps> = ({ projectName, description, image }) => {

  const [loading, setLoading] = useState(true);
  const [showFull, setShowFull] = useState(false);

  const toggleShowFull = () => {
    setShowFull(!showFull);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          bgcolor: CardColor,
          height: "500px",
          width: "100%",
          minHeight: "500px",
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
          <LazyLoadImage src={image}
            placeholderSrc="https://img.freepik.com/free-photo/fading-blue-background_53876-88684.jpg"
            effect="blur"
            width="100%" style={{ height: "200px" }} height={200}
            alt="project-image"
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {projectName}
          </Typography>

          {description.length > 200 && !showFull && (
            <>
              <Typography sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 8,
                WebkitBoxOrient: 'vertical',
                cursor: 'pointer'
              }} onClick={toggleShowFull}>
                {description.substring(0, 200)}...
              </Typography>
              <Typography sx={{ cursor: 'pointer', color: 'blue' }} onClick={toggleShowFull}>
                View More
              </Typography>
            </>
          )}

          {description.length <= 200 && (
            <Typography sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 8,
              WebkitBoxOrient: 'vertical',
              cursor: 'pointer'
            }}>
              {description}
            </Typography>
          )}

          {description.length > 200 && showFull && (
            <Typography sx={{
              overflow: 'auto',
              maxHeight: '15em',
              '@media (min-width: 600px)': {
                maxHeight: '15em',
              },
            }}>
              {description}
              <Typography sx={{ cursor: 'pointer', color: 'blue' }} onClick={toggleShowFull}>
                View Less
              </Typography>
            </Typography>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProjectCard;
