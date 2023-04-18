import { Container, Box, Grid, Typography, Card } from "@mui/material";
import { Secondary } from "../design/color";
import CardContent from "@mui/material/CardContent";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import MicIcon from "@mui/icons-material/Mic";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

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
                  <ConnectWithoutContactIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={3}
                >
                  Knowledge Sharing Sessions
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
                  <MicIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={3}
                >
                  Guest Lectures and Webinars
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
                  <WorkspacesIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={11}
                >
                  Workshops
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
                  <WorkspacePremiumIcon sx={{ fontSize: 50 }} />
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  component="div"
                  gutterBottom
                  textAlign={"center"}
                  px={3}
                >
                  Case Solving Competitions
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
  