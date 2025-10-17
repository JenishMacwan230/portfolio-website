import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        '<span style="color: #33FF57;">Frontend Developer</span>',
        '<span style="color: #FF5733;">Learner and Builder</span>',
        '<span style="color: #f1ff33ff;">Problem Solver</span>',
        '<span style="color: #ff3333ff;">Open Source Contributor</span>',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      smartBackspace: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <section id="home"> {/* 👈 changed from div to section */}
      <div className="main">
        <div className="left">
          <img src="/3d.jpg" alt="Macwan Jenish" />
        </div>
        <div className="right">
          <div className="hi">Hi, My name is</div>
          <div className="name">Macwan Jenish</div>
          <div>& I am a passionate </div>
          <span ref={el}></span>
          <div className="line">
            Passionate about learning, building, and shaping the future through technology
          </div>
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
        </div>
      </div>
    </section>
  );
}
