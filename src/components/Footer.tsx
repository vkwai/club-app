import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import { Instagram, Facebook, GitHub, Twitter } from "@mui/icons-material";
import logo from "../static/LCS_Transparent.png";

const socialMediaLinks = [
  {
    platform: "Instagram",
    link: "",
    icon: <Instagram />,
  },
  {
    platform: "Tiktok",
    link: "",
    icon: <GitHub />,
  },
  {
    platform: "Facebook",
    link: "",
    icon: <Facebook />,
  },
  {
    platform: "Twitter",
    link: "",
    icon: <Twitter />,
  },
];

const pages = ["Events", "About", "Contact"];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"© "}
      {/* <Link color="inherit"> */}
      <Link color="inherit" href="https://mui.com/">
        {new Date().getFullYear()}
        {"  "}
        Langara Computer Science Club
      </Link>
    </Typography>
  );
}

export const Footer: FC<{}> = (props) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={10}>
          <Grid item xs={7}>
            <Container maxWidth="sm">
              <Typography variant="body1">
                <img src={logo} style={{ height: "50px", width: "50px" }}></img>
              </Typography>
              <Copyright />
            </Container>
          </Grid>
          {/* <Grid item xs={6}> */}
          <Grid item xs={3}>
            <Item>
              <Box display="flex" justifyContent="flex-end">
                {socialMediaLinks.map((social) => (
                  <a key={social.platform} href={social.link}>
                    <Icon color="secondary">{social.icon}</Icon>
                  </a>
                ))}
              </Box>
              <div>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  // sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                >
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{ my: 2, color: "black", display: "block" }}
                      component={RouterLink}
                      to={`/${page}`}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
