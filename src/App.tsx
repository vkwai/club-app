import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import Container from "@mui/material/Container";
import { Events } from "./pages/Events";
import { About } from "./pages/About";

export const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" style={{margin:"10px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/About" element={<About />} />
        </Routes>
        {/* <EventList />
        <Executives /> */}
      </Container>
      <Footer />
    </>
  );
};

// export default App;
