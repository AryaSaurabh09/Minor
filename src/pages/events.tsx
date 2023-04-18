import * as React from "react";

import Heading from "../components/Heading";
import { Typography, Container, Grid } from "@mui/material";
import { Secondary, CardColor } from "../design/color";
import BasicCard from "../components/EventCard";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

import CircularProgress from "@mui/material/CircularProgress";


import { getEvents } from "../api/events";

type Event = {
  title: string;
  body: string;
  imageUrl: string;
  date: string;
};

function convertDate (date: string) {
  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const suffix = day % 10 === 1 ? 'st' : day % 10 === 2 ? 'nd' : day % 10 === 3 ? 'rd' : 'th';
  return `${day}${suffix} ${month} ${year}`;
}

const EventsPage = () => {
  const [viewMore, setViewMore] = React.useState(false);
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getEvents()
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  const handleViewMore = () => {
    if (viewMore) {
      setViewMore(false);
    } else {
      setViewMore(true);
    }
  };

  if (error) {
    return (
      <Container maxWidth="lg">
        <Heading title="DONATE" subTitle="Why should we Donate to PRAYAAS ?" />
        <Typography
          mx={5}
          variant="body1"
          color={Secondary}
          sx={{ fontSize: { xs: 15, sm: 15, md: 17.5 } }}
        >
          Since 2008, PRAYAAS has been striving hard to bring a change in the lives of the underprivileged kids by giving them the gift of Education. Presently, around <b>360 kids</b> are being regularly taught. <br />PRAYAAS believes on the motto- <b>“An hour a day keeps illiteracy away.”</b> <br />Hence, each volunteer of PRAYAAS, devotes time- each evening; dedicatedly at the THREE CENTRES of PRAYAAS. Many kids, who were unaware of the meaning of Education and hence lingered here and there, have been admitted to schools. There is a requirement of basic amenities like chalks, notebooks, pencils, pen, etc. on a daily basis in PRAYAAS. Hence, we shall urge you to Donate to PRAYAAS and help us in this noble cause. <br /><b>We shall be more than happy if you could devote your precious time & help us in teaching them.☺</b> 
        </Typography>
        <Heading title="" subTitle="Volunteers can Donate At : " />
        {/* <Typography
          mx={5}
          variant="body1"
          color={"black"}
          sx={{ fontSize: { xs: 25, sm: 25, md: 32 } }}
        >
          Volunteers can Donate At : <br />
        </Typography> */}
        <Typography
          mx={5}
          variant="body1"
          color={Secondary}
          sx={{ fontSize: { xs: 15, sm: 15, md: 17.5 } }}
        >
           <b>Bank Name:</b> Canara bank <br />
           <b>Account Holder:</b> Prayaas Society NIT Jalandhar <br />
           <b>A/c No:</b> 2945101002019 <br />
           <b>IFSC Code:</b> CNRB0002945 <br /> <br /> <br />
        </Typography>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Heading title="Events" subTitle="WHAT WE DO" />
        <Typography
          mx={5}
          variant="body1"
          color={Secondary}
          sx={{ fontSize: { xs: 20, sm: 20, md: 25 } }}
        >
          The Club Conducts various other events throughout the academic year,
          to engage with the student community and introduce them to important
          concepts and new advancements in finance.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 10 }}>
          <CircularProgress sx={{ color: Secondary, fontSize: "5rem" }} />
        </Box>
      </Container>
    );
  }

  return (
    <>
      <Container maxWidth="lg">
        <Heading title="Events" subTitle="WHAT WE DO" />

        <Typography
          mx={5}
          variant="body1"
          color={Secondary}
          sx={{ fontSize: { xs: 20, sm: 20, md: 25 } }}
        >
          The Club Conducts various other events throughout the academic year,
          to engage with the student community and introduce them to important
          concepts and new advancements in finance.
        </Typography>

        <Grid container spacing={5} sx={{ my: 5, px: 7, mb: 15 }}>
          {events.slice(0, 5).map((event) => (
            <BasicCard title={event.title} body={event.body} date={convertDate(event.date)} imageUrl={event.imageUrl} />
          ))}
          {viewMore &&
            events
              .slice(5, events.length)
              .map((event) => (
                <BasicCard title={event.title} body={event.body} date={convertDate(event.date)} imageUrl={event.imageUrl} />
              ))}
          {events.length > 5 && (
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  bgcolor: CardColor,
                  minHeight: "400px",
                  borderRadius: "10px",
                  transition: "0.5s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  "&:hover": {
                    bgcolor: "white",
                    boxShadow: "0px 0px 72px 15px rgba(0, 0, 0, 0.15)",
                  },
                }}
                onClick={handleViewMore}
                elevation={2}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    color={Secondary}
                    fontWeight="bold"
                    component="div"
                    gutterBottom
                  >
                    {viewMore ? "View Less" : "View More"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default EventsPage;
