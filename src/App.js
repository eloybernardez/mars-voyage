import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./containers/Main";
import Weather from "./pages/Weather";
import Ticket from "./pages/Ticket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route exact path="/ticket" element={<Ticket />} />

          <Route exact path="/weather" element={<Weather />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
