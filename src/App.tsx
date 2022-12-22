import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import Container from "@mui/material/Container";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import { EventPage } from "./pages/EventPage";

//TODO: nested routing for events
export const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{ margin: "10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events">
            <Route index element={<Events />} />
            <Route path="/Events/:idParam" element={<EventPage />} />
          </Route>
          <Route path="/About" element={<About />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

// export default App;
