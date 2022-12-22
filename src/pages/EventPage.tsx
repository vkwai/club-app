import { FC } from "react";
import { useParams } from "react-router-dom";
import EventData from "../data/events.json"

export const EventPage: FC<{}> = (props) => {
  const { idParam } = useParams();
  const data = EventData["events"].filter((event) => event.id.toString()===idParam)[0]

  console.log(data)
  return <div>EventPage{idParam}</div>;
};
