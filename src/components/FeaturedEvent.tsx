import { FC } from "react";
import { EventType } from "../Types";
import Link from "@mui/material/Link/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export const FeaturedEvent: FC<EventType> = (props) => {
  const { id, title, date, brief, description, imageSource, imageLabel } =
    props;
  return (
    <Grid key={id} item xs={12} md={6}>
      <CardActionArea component="a" href={`Events/${id}`}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {brief}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={imageSource}
            alt={imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};
