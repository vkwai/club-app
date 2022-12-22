import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import Container from "@mui/material/Container";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import { EventPage } from "./pages/EventPage";
import { Contact } from "./pages/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212529",
    },
    secondary: {
      main: orange[800],
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container maxWidth="lg" style={{ margin: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events">
            <Route index element={<Events />} />
            <Route path="/Events/:idParam" element={<EventPage />} />
          </Route>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

// export default App;
