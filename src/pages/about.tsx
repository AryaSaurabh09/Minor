import Heading from "../components/Heading";
import { Container, Typography } from "@mui/material";
import { Secondary } from "../design/color";

import AboutGrid from "../components/AboutCard";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Heading title="About" subTitle="OUR MOTTO" />
      <Typography mx={5} my={2} variant="body1" color={Secondary} fontSize={22}>
        What started out as a WhatsApp Group among students interested in
        finance, ProfNITT is now the finance and investments club of NIT Trichy,
        with more than 30 members. We aim to bring about financial literacy
        among students of NIT-Trichy, helping them make well-informed monetary
        decisions.
      </Typography>
      <Typography mx={5} my={7} variant="body1" color={Secondary} fontSize={22}>
        The club conducts several events throughout the year to engage with the student community such as
        decisions.
      </Typography>
      <AboutGrid />
      <Typography mx={5} my={10}   variant="body1" color={Secondary} fontSize={22}>
      The club also aims to empower its members by increasing their knowledge base in finance related domains, via various interactions, discussions and industry projects brought with the help of our strong alumni network.

      </Typography>
    </Container>
  );
};

export default About;
