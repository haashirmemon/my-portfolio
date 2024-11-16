import React from "react";
import { data } from "./data/skills";
// import skills from "./data/skills";
// import { Data } from "../components/data/skills";


const Skills = () => {
  return (
    <>
      <div className="container skills my-3" id="skills">
        <h1>SKILLS</h1>
        <div className="items p-3">
          {data.map((skill) => (
            <>
              <div
                className="text-center item"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img
                  src={`${skill.imageSrc}`}
                  alt=""
                  style={{ width: "70px", height: "70px" }}
                />
                <h4>{skill.title}</h4>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
