import React, { useState } from "react";

export default function About() {
  const [activeButton, setActiveButton] = useState(0);

  const buttons = ["About Me", "Experience"];
  const icons = [
    <i className="fa-solid fa-image-portrait" key="icon1"></i>,
    <i className="fa-solid fa-puzzle-piece" key="icon2"></i>,
  ];

  // Function to render content dynamically
  const renderContent = () => {
    if (activeButton === 0) {
      return (
        <>
          <h1>Macwan Jenish</h1>
          <h2>Frontend Developer | Tech Innovator</h2>
          <p>
            I’m a Fullstack Web Developer focused on building modern, scalable,
            and user-centric web applications. Passionate about learning,
            experimenting, and crafting impactful digital experiences.
          </p>
          <div className="cv">
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Z0yyzYDnudV9lU8HE4y9O330njxQcphk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-download"></i> Download CV
                </a>
              </li>
              <li>
                <a href="#contact">Let’s Connect</a>
              </li>
            </ul>
          </div>
        </>
      );
    } else if (activeButton === 1) {
      return (
        <>
          <h1>Teaching Intern</h1>
          <h2>Rural Internship at <a href="https://www.agastya.org/" target="_blank" >Agastya International Foundation</a> </h2>
            <h3>December 2024</h3>
          <p>
           Engaged in hands-on STEM teaching activities for rural students under Agastya’s TEACHING department.
Contributed to nurturing curiosity and creativity by facilitating science-based learning during a 3-week rural
internship.
          </p>
        </>
      );
    }
  };

  return (
    <section id="about">
      <div className="main">
        <div className="left">
          <div className="headbutton">
            {buttons.map((btn, index) => (
              <button
                key={index}
                className={activeButton === index ? "active" : ""}
                onClick={() => setActiveButton(index)}
              >
                {icons[index]} {btn}
              </button>
            ))}
          </div>

          <div className="content">{renderContent()}</div>
        </div>

        <div className="right">
          {/* Replace with your actual image */}
          {/* <img src="me.jpeg" alt="Jenish Macwan" /> */}
        </div>
      </div>
    </section>
  );
}
