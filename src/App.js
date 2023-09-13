import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import {Link, Element} from 'react-scroll';

function App() {
  return(
    <div>
      <Navbar />
      <Element name="home"><Home /></Element>
      <Element name="about"><About /></Element>
      <Element name="projets"><Projects /></Element>
      <Element name="contact"><Contact /></Element>
    </div>
  );
}


export default App;