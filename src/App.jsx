import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Menu from "./pages/menu";
import OurStory from "./pages/ourStory";
import Reservations from "./pages/Reservation";
import Space from "./pages/space";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Button from "./components/button";
import ExploreCard from "./components/exploreCard";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/space" element={<Space />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
