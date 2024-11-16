
import React from "react";

import Typed from "typed.js";
import pdf from "../portfoliopdf/my mern resume.pdf";
import { useEffect, useRef } from "react";
// import heroImg from ''
import hero from "./data/hero";


const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my portfolio",
        "my name is Haashir shakeel",
        "I'm Mern Stack Developer",
        "Android Developer (React Native)",
      ], // Array of strings to display
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      loop: true, // Whether to loop the animation
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup function to destroy Typed instance
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      {/* <div data-aos="fade-up" data-aos-duration="1000"> */}
      <div className="main_section p-3" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}></h1>

          <a
            href={pdf}
            download="../portfoliopdf/my mern resume.pdf"
            className="btn btn-outline-warning btn-lg my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="1000">
          {/* <div className="img d-flex justify-content-center align-items-center">
            <img
             
              src={`${hero.imgSrc}`}
              alt="alt"
            />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
