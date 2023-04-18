import React from "react";
import { FC } from "react";

import { Typography, Container, Box } from "@mui/material";

import { Secondary } from "../design/color";

interface HeadingProps {
  title: string;
  subTitle: string;
}


const dashStyle = {
  letterSpacing: "-10px",
  color: Secondary,
};

const Heading: FC<HeadingProps> = ({ title, subTitle }) => {
  return (
    <Container sx={{ marginTop:"6rem"}} maxWidth="lg">
      <Box my={6}>
        <Typography variant="h2" color={Secondary} fontWeight={"bold"} sx={ {fontSize: { xs:40 ,sm: 50, md:60 }} }> 
          {title}
        </Typography>
        <Typography variant="h6" gutterBottom sx={ {fontSize: { xs:15 ,sm: 25, md:30 }} }>
          {subTitle}{" "}
          <span style={dashStyle}>
            &#x2015;&#x2015;&#x2015;&#x2015;&#x2015;
          </span>
        </Typography>
      </Box>
    </Container>
  );
};

export default Heading;
