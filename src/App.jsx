import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/index";
import Hero from "./pages/home/hero";
import About from "./pages/home/about";
import Services from "./pages/home/services";
import Products from "./pages/home/products";
import Contact from "./pages/home/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
