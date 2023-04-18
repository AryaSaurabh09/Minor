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
        <Heading title="Our Projects" subTitle="AN OVERVIEW" />
        <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, m: 1 }}>
          Error loading projects
        </Typography>
        </Box>
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