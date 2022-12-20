import { EventList } from "./components/EventList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import Container from "@mui/material/Container";
import { Executives } from "./components/Executives";

export const App = () => {
  return (
    <div>
      <Header />
      {/* <main></main> */}
      <Container maxWidth="lg">
        <EventList />
        <Home />
        <Executives/>
      </Container>
      <Footer />
    </div>
  );
};

// export default App;
