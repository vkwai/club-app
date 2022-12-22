import { FC } from "react";
import { EventType } from "../Types";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


export const Home: FC<{}> = (props) => {
  //note splash is inferred
  const splash = {
    title: "Title of a longer featured blog post",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: "https://source.unsplash.com/random",
    imageText: "main image description",
    linkText: "Continue reading…",
  };
  const featuredPosts: EventType[] = [
    {
      id: 1,
      title: "Featured post",
      date: new Date().toISOString(),
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      imageSource: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
    {
      id: 2,
      title: "Post title",
      date: new Date().toISOString(),
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      imageSource: "https://source.unsplash.com/random",
      imageLabel: "Image Text",
    },
  ];

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
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: "none" }}
            src={splash.image}
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
          <Grid item md={6}>
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
                color="inherit"
                gutterBottom
              >
                {splash.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {splash.description}
              </Typography>
              <Link variant="subtitle1" href="#">
                {splash.linkText}
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={4}>
        {featuredPosts.map((post: EventType) => (
          <Grid key={post.id} item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date.toString()}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                  image={post.imageSource}
                  alt={post.imageLabel}
                />
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
