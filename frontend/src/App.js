import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import HomeScreen from "./pages/home/HomeScreen";

import { Container } from "react-bootstrap";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
