import { FC, useState } from "react";
import { EventType } from "../Types";
import { FeaturedEvent } from "../components/FeaturedEvent";
import EventData from "../data/events.json";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

type splashType = {
  title: string;
  description: string;
  image: string;
  imageText: string;
  linkText: string;
};

export const Home: FC<{}> = (props) => {
  //note splash is inferred
  const splash: splashType = {
    title: "Langara Computer Science Club",
    description:
      "Welcome! The Langara Computer Science Club is officially back! We are a student-run club dedicated to providing a space for students interested in computer science at Langara to learn, network, help each other out, and have fun! This year, we plan to host workshops, programming competitions, and meetups. ",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Join Our Discord to Learn More",
  };
  const [events, setEvents] = useState<EventType[]>(EventData["events"]);
  const upcomingEvents = events.filter((x) => new Date(x.date) > new Date());
  upcomingEvents.sort(function (a, b) {
    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
  });

  const featuredEvents: EventType[] = [];
  for (let i = 0; i < 4; i++) {
    //incase of < 4 events in collection
    if (upcomingEvents[i]) {
      featuredEvents.push(upcomingEvents[i]);
    }
  }

  return (
    <>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${splash.image})`,
        }}
      >
        {
          <img
            style={{ display: "none" }}
            src={splash.linkText}
            alt={splash.imageText}
          />
        }
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={7}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="primary"
                gutterBottom
              >
                {splash.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {splash.description}
              </Typography>
              <Link
                variant="subtitle1"
                color="secondary"
                href="https://discord.gg/VgKxme4"
              >
                {splash.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4}>
        {featuredEvents.map((event: EventType) => (
          <FeaturedEvent
            // props={event}
            key={event.id}
            id={event.id}
            title={event.title}
            date={event.date}
            brief={event.brief}
            description={event.description}
            imageLabel={event.imageLabel}
            imageSource={event.imageSource}
          />
        ))}
      </Grid>
    </>
  );
};
