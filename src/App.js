import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

function App() {
  return (
    <div>
      <Navbar /> {/* This is the navigation bar */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
