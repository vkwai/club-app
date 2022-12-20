import { FC } from "react";
import { Event } from "./Event";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ButtonGroup, Button } from "@mui/material";
//this will only be used as a template. will be deleted eventually

export const EventList: FC<{}> = (props) => {
  const data = [
    { title: "e1", date: new Date() },
    { title: "e2", date: new Date() },
    { title: "e3", date: new Date() },
  ];
  //   {events} = props
  const formattedData = data.map((d) => (
    <Event key={d.title} title={d.title} date={d.date} />
  ));
  return (
    <>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {formattedData}
        </Grid>
      </Container>
    </>
  );
};
