import { FC, useState } from "react";
import { EventType } from "../Types";
import { Event } from "../components/Event";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ButtonGroup, Button } from "@mui/material";
import EventData from "../data/events.json";

export const Events: FC<{}> = (props) => {
  const [events, setEvents] = useState<EventType[]>(EventData["events"]);
  const FILTER_MAP = {
    All: () => true,
    Past: (d: EventType) => new Date() > new Date(d.date),
    Upcoming: (d: EventType) => new Date() <= new Date(d.date),
  };
  const [filter, setFilter] = useState<string>("All");
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name: string) => (
    <Button
      key={name}
      color="secondary"
      onClick={() => {
        setFilter(name);
      }}
    >
      {name}
    </Button>
  ));

  const filteredEvents = events.filter((event) => {
    switch (filter) {
      case "Past":
        return new Date() > new Date(event.date);
      case "Upcoming":
        return new Date() <= new Date(event.date);
      default:
        return true;
    }
  });
  filteredEvents.sort(function (a, b) {
    // return new Date(b.date) - new Date(a.date);
    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
  });
  // filteredEvents.reverse();

  const formattedData = filteredEvents.map((event) => (
    <Event
      key={event.id}
      id={event.id}
      title={event.title}
      date={event.date}
      brief={event.brief}
      description={event.description}
      imageSource={event.imageSource}
      imageLabel={event.imageLabel}
    />
  ));
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {filterList}
      </ButtonGroup>
      <br />
      <br />
      <br />
      <Grid container spacing={4}>
        {formattedData}
      </Grid>
    </Container>
  );
};
