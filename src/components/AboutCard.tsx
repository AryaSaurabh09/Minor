import { Container, Box, Grid, Typography, Card } from "@mui/material";
import { Secondary } from "../design/color";
import CardContent from "@mui/material/CardContent";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CelebrationIcon from '@mui/icons-material/Celebration';
import PollIcon from '@mui/icons-material/Poll';
import CampaignIcon from '@mui/icons-material/Campaign';

const AboutGrid = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                maxWidth: 300,
                bgcolor: Secondary,
                borderRadius: "10px",
                transition: "0.7s",
                height: 200,
                "&:hover": {
                  boxShadow: "0px 4px 20px 5px #2F3980",
                },
              }}
              elevation={5}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF1CE",
                  height: "100%",
                }}
              >
                <Typography gutterBottom>
                  <Diversity2Icon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={11}
                >
                  SRIJAN                
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                maxWidth: 300,
                bgcolor: Secondary,
                borderRadius: "10px",
                transition: "0.7s",
                height: "200px",
                "&:hover": {
                  boxShadow: "0px 4px 20px 5px #2F3980",
                },
              }}
              elevation={5}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                  color: "#FFF1CE",
                }}
              >
                <Typography gutterBottom>
                  <CelebrationIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={9.5}
                >
                  PRAYAAS DAY
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                maxWidth: 300,
                bgcolor: Secondary,
                borderRadius: "10px",
                transition: "0.7s",
                height: "200px",
                "&:hover": {
                  boxShadow: "0px 4px 20px 5px #2F3980",
                },
              }}
              elevation={5}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 200,
                  color: "#FFF1CE",
                }}
              >
                <Typography gutterBottom>
                  <PollIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={11}
                >
                  SURVEY
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card
              sx={{
                maxWidth: 300,
                bgcolor: Secondary,
                borderRadius: "10px",
                transition: "0.7s",
                height: 200,
                "&:hover": {
                  boxShadow: "0px 4px 20px 5px #2F3980",
                },
              }}
              elevation={5}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF1CE",
                  height: 200,
                }}
              >
                <Typography gutterBottom>
                  <CampaignIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={11}
                >
                  AWARENESS
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutGrid;
