import { useEffect, useState } from "react";
import { Container, Box, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Secondary } from "../design/color";

import { Pagination } from "@mui/material";

import Heading from "../components/Heading";
import MemberCard from "../components/MemberCard";

import CircularProgress from '@mui/material/CircularProgress';

import { getMembers } from "../api/members";

interface Member {
  name: string;
  link: string;
  role: string;
  image: string;
}

interface Team {
  core: Member[];
  managers: Member[];
  coordinators: Member[];
}

const typeStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mx: 2,
  borderRadius: "7px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: "3px",
    left: "0",
    transform: "scaleX(0.2)",
    width: "100%",
    borderBottom: "5px solid " + Secondary,
    borderRadius: "20px",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover::before": {
    transform: "scaleX(1)",
  },
};

const Members: FC = () => {
  const [memberType, setMemberType] = useState("core");

  const [managersPage, setManagersPage] = useState(0);
  const [coordinatorsPage, setCoordinatorsPage] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [team, setTeam] = useState<Team>({
    core: [],
    managers: [],
    coordinators: [],
  });


  
  useEffect(() => {
    setLoading(true);
    getMembers()
      .then((res) => {
        setTeam(res[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);


  if (error) {
    return (
      <Container maxWidth="lg">    
        <Heading title="Meet the team" subTitle="2022 - 23 " />
        <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, m: 1 }}>
          Error loading members
        </Typography>
        </Box>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container maxWidth="lg">    
        <Heading title="Meet the team" subTitle="2022 - 23 " />
        <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
        <CircularProgress sx={{ color: Secondary, fontSize: "5rem" }} />
        </Box>
      </Container>
    );
  }

  if (team === undefined) {
    return (
      <Container maxWidth="lg">    
        <Heading title="Meet the team" subTitle="2022 - 23 " />
        <Box sx={{ display: "flex", justifyContent: "center", my: 20 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, m: 1 }}>
          No Data
        </Typography>
        </Box>
      </Container>
    );
  }    

  return (
    <Container maxWidth="lg">
      <Heading title="Meet the team" subTitle="2022 - 23 " />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 2,
        }}
      >
        <Box
          sx={{
            ...typeStyle,
            backgroundColor: memberType === "core" ? Secondary : "white",
            color: memberType === "core" ? "white" : Secondary,
          }}
          onClick={() => setMemberType("core")}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              m: 0.75,
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Core
          </Typography>
        </Box>
        <Box
          sx={{
            ...typeStyle,
            backgroundColor: memberType === "managers" ? Secondary : "white",
            color: memberType === "managers" ? "white" : Secondary,
          }}
          onClick={() => setMemberType("managers")}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              m: 0.75,
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Managers
          </Typography>
        </Box>
        <Box
          sx={{
            ...typeStyle,
            backgroundColor:
              memberType === "coordinators" ? Secondary : "white",
            color: memberType === "coordinators" ? "white" : Secondary,
          }}
          onClick={() => setMemberType("coordinators")}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              m: 0.75,
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            Coordinators
          </Typography>
        </Box>
      </Box>


      {memberType === "core" && (
        <Grid
          container
          spacing={4}
          sx={{ mt: 10, mb: 20 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {(team !== undefined) && team.core.map((member, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <MemberCard
                name={member.name}
                link={member.link}
                role={member.role}
                image={member.image}
              />
            </Grid>
          ))}
        </Grid>
      )}

      {memberType === "managers" && (
        <>
        <Grid
          container
          spacing={7}
          sx={{ mt: 5, mb: 10 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        > 
          {(team !== undefined) && team.managers.slice(managersPage * 6, managersPage * 6 + 6).map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <MemberCard
                name={member.name}
                link={member.link}
                role={member.role}
                image={member.image}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 10 }}>
          <Pagination count={ Math.ceil(team.managers.length / 6) } page={managersPage + 1} onChange={(e, page) => setManagersPage(page - 1)}  color="secondary" />
        </Box>
        </>
      )}

      {memberType === "coordinators" && (
        <>
        <Grid
          container
          spacing={7}
          sx={{ mt: 5, mb: 10 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {(team !== undefined) && team.coordinators.slice(coordinatorsPage * 6, coordinatorsPage * 6 + 6).map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <MemberCard
                name={member.name}
                link={member.link}
                role={member.role}
                image={member.image}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 10 }}>
          <Pagination count={ Math.ceil(team.coordinators.length / 6) } page={coordinatorsPage + 1} onChange={(e, page) => setCoordinatorsPage(page - 1)}  color="secondary" />
        </Box>
        </>
      )}
    </Container>
  );
};

export default Members;
