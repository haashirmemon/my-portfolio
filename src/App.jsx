import React, { useEffect } from "react";


import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/contact";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
