import Heading from "../components/Heading";
import { Container, Typography } from "@mui/material";
import { Secondary } from "../design/color";

import AboutGrid from "../components/AboutCard";

const About = () => {
  return (
    <Container maxWidth="lg">
      <Heading title="About" subTitle="OBJECTIVES :" />
      <Typography mx={5} my={2} variant="body1" color={Secondary} fontSize={22}>
        To teach the children who are devoid of education and are socially deprived.
        To develop compassion and humaneness in the students.
        To organize collection campaigns and collaborate with other NGOs for helping society.
        To motivate the kids to aim for a better career and break the ‘poor circle’ legacy.
      </Typography>
      <Typography mx={5} my={7} variant="body1" color={Secondary} fontSize={22}>
      Prayaas has been in the forefront in all activities that can shape the future of these kids. Despite regular teaching round the year, we also focus upon inculcating the moral values amongst these kids. Prayaas has always believed in the overall development of the kids and hence we have various events like:-
      </Typography>
      <AboutGrid />
      <Typography mx={5} my={10}   variant="body1" color={Secondary} fontSize={22}>
      <b>SRIJAN : </b>     Srijan comprises of various competitions and games that comprises of teams involving. Prayaas kids and college students. This inculcates into them a competitive spirit as well allows their creativity to fly freely. <br /> <br />
      <b>PRAYAAS DAY : </b>Prayaas Day which is a Cumulative Birthday Celebration of all kids who are oblivious of their birth dates. There are various cultural performances. All in all it’s a day dedicated to the kids and their childhood. <br /> <br />
      <b>SURVEY : </b>Surveys are conducted time to time to know the problems of the locality and how they can be sorted out. Prime attention is laid at telling these underprivileged people about the importance of education and why they should send their children to Prayaas. <br /> <br />
      <b>AWARENESS : </b>Parents and Children are educated about Healthy surroundings/environment, Government policies and schemes (like Scholarships, Aadhar card) Including improvement and motivational programs, Harmful effect of alcohol and smoking.


      </Typography>
      
    </Container>
  );
};

export default About;
