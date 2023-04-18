import React from "react";
import Heading from "../components/Heading";
import { Typography, Container, Grid, Card, CardContent, Box } from "@mui/material";
import { Secondary, CardColor } from "../design/color";
import ProjectCard from "../components/ProjectCard";
import { useState } from 'react';

import CircularProgress from '@mui/material/CircularProgress';

import { getProjects } from "../api/projects";

import Pagination  from '@mui/material/Pagination'

type Project = {
    title: string;
    info: string;
    url?: string;
};

const Projects = () => {

    
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    React.useEffect(() => {
        setLoading(true);
        getProjects()
          .then((data) => {
            setProjects(data);
            setLoading(false);
          }) 
          .catch((err) => {
            setError(true);
            setLoading(false);
          });
      }, []);



    if (loading) {
      return (
        <Container maxWidth = "lg">
        <Heading title="Our Projects" subTitle="AN OVERVIEW" />
        <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
        <CircularProgress sx={{ color: Secondary, fontSize: "5rem" }} />
        </Box>
      </Container>
      );
    }

    if (error) {
      return (
        <Container maxWidth = "lg">
        {/* <Heading title="Our Achievements" subTitle="" /> */}
        <Typography
          marginTop={7}
          variant="h1"
          color={Secondary}
          fontWeight={700}
          sx={{ fontSize: { xs: 45, sm: 45, md: 65 } }}
        >
         Our Achievements
        </Typography>
        <Typography
          mx={3}
          my={3}
          variant="h4"
          color={"black"}
          sx={{ fontSize: { xs: 25, sm: 25, md: 32 } }}
        >
         Academics
        </Typography>
        <Typography
          mx={5}
          variant="body1"
          color={Secondary}
          sx={{ fontSize: { xs: 15, sm: 15, md: 17.5 } }}
        >
          <ul>
            <li><b>NAVODAYA VIDYALAYA SELECTION : </b>You would be delighted to know that 10 students of Prayaas got admission into prestigious Navodaya Vidyalaya School. Navodaya schools aim to provide good quality modern education to the talented children predominantly from the rural areas without regard to their economic conditions. </li>
            <li><b>MERITORIOUS SCHOOL SELECTION : </b> <br />  ➢ Happy to share that 2 students of Prayaas got admission into prestigious <br />   ➢ Meritorious School.Meritorious schools’ is a project initiated by honorable Punjab chief minister Parkash Singh Badal on lines of ‘Super 30’, aimed at nurturing bright matriculates from government schools, preparing them for admission to top professional courses after Class 12.</li>
            <li><b>SUCCESS IN JEE MAINS EXAM : </b> <br />  ➢ Last year 3  of Prayaas students have cleared JEE MAINS exam. Now ,They are studying at our prestigious institute NIT Jalandhar. <br />➢ Prayaas helped them in their preparation, counselling process and admission process. <br />➢ Prayaas also paid admission fees for one of the students.</li>
          </ul>
        </Typography>
        {/* <Heading title="" subTitle="General" /> */}
        <Typography
          mx={3}
          my={3}
          variant="h4"
          color={"black"}
          sx={{ fontSize: { xs: 25, sm: 25, md: 32 } }}
        >
         General
        </Typography>
        
        <Typography
          mx={5}
          variant="body1"
          color={Secondary}
          sx={{ fontSize: { xs: 15, sm: 15, md: 17.5 } }}
        >

        <ul>
          <li>Various children have been admitted to schools. </li>
          <li>Prayaas provides stationary and admission fees to these children.</li>
          <li>Prayaas is successfully running three centers : </li>
        </ul>
       ⮚VInside the Campus - Science Block <br /> ⮚Maqsudan - Arya Samaj Mandir <br /> ⮚Amanatpur <br /> <br />

         
        </Typography>
      </Container>
      );
    }


    return (
      <>
      <Container maxWidth = "lg">
          <Heading title="Our Projects" subTitle="AN OVERVIEW" />
          <Grid container spacing = {5} sx={{ my: 5, px: 7, mb: 15 }}>
          {projects.slice(currentPage * 6, currentPage * 6 + 6 ).map((project) => (
            
              <ProjectCard projectName= {project.title} description = {project.info} image= {project.url} />

              ))}</Grid>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 10 }}>
            <Pagination count={ Math.ceil(projects.length / 6) } page={currentPage + 1} onChange={(event, page) => setCurrentPage(page - 1)}  color="secondary" />
          </Box>
              
          </Container>
          </>
      )

    
}

export default Projects;