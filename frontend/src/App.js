import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to CyberBoutique</h1>
        </Container>
      </main>
      <Footer/>
    </>
  );
}

export default App;
