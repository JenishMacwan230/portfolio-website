import React, { useState, useEffect, useRef } from "react";

export default function Skills() {
  
  const [activeButton, setActiveButton] = useState(0);
  const mainRef = useRef(null);

  const buttons = ["Frontend", "Backend", "Languages"];

  const frontend = [
    {tag:<i class="fa-brands fa-html5"></i>, title: "HTML", num: 80 },
    { tag:<i class="fa-solid fa-file-code"></i>, title: "CSS", num: 75 },
    {tag:<i class="fa-brands fa-js"></i>,  title: "JavaScript", num: 70 },
    { tag:<i class="fa-brands fa-react"></i>, title: "React", num: 65 }
  ];

  const backend = [
    {tag:<i class="fa-brands fa-node-js"></i>,  title: "Node.js", num: 70 },
    {tag:<i class="fa-solid fa-database"></i>,  title: "PgSQL", num: 60 },
    {tag:<i class="fa-solid fa-database"></i>,  title: "MongoDB", num: 65 },
  ];

  const languages = [
    {tag:<i class="fa-solid fa-c"></i>,  title: "C/C++", num: 80 },
    {tag:<i class="fa-brands fa-python"></i>,  title: "Python", num: 70 },
    // { tag:<i class="fa-brands fa-html5"></i>, title: "Python", num: 75 },
    {tag:<i class="fa-brands fa-html5"></i>,  title: "JavaScript", num: 85 }
  ];

  // // Update height when activeButton changes
  // useEffect(() => {
  //   if (!mainRef.current) return;

  //   let height = "70vh"; // default
  //   if (activeButton === 1) {
  //     // backend has 3 items
  //     height = "55vh";
  //   } 
  //   mainRef.current.style.height = height;
  // }, [activeButton]);

  const renderSkills = (skills) => (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="data">
            <div className="dn">
                  {skill.tag}
          <p>{skill.title}</p>
            </div>
            <div className="pro">
                  <span >Proficiency</span>
           <span> {skill.num}%</span>
            </div>
          
          <div className="bar">
            <div className="fill" style={{ width: `${skill.num}%` }}></div>
          </div>
         
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills">
      <div className="main" ref={mainRef}>
        <div className="fline">
          <i className="fa-solid fa-laptop"></i> Technical Skills
        </div>
        <div className="sline">
          A snapshot of my technical strengths and expertise in modern
          development tools, frameworks, and programming languages.
        </div>

        <div className="typ">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={activeButton === index ? "active" : ""}
              onClick={() => setActiveButton(index)}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="dataframe">
          {activeButton === 0 && renderSkills(frontend)}
          {activeButton === 1 && renderSkills(backend)}
          {activeButton === 2 && renderSkills(languages)}
        </div>
      </div>
    </section>
  );
}
