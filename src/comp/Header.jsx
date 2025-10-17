import React, { useEffect, useState, useRef } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    // Select all elements that have an ID (div, section, etc.)
    const sections = Array.from(document.querySelectorAll("[id]"));
    console.log("[Header debug] Found sections:", sections.map(s => s.id));

    if (!sections.length) {
      console.warn(
        "[Header debug] No elements with IDs found! Add id='home', id='skills', etc. to your sections."
      );
      return;
    }

    // Setup IntersectionObserver
//   const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         setActiveSection(entry.target.id);
//       }
//     });
//   },
//   {
//     root: null,
//    rootMargin: "-10% 0px -10% 0px", // Top relaxed, bottom very loose
//       threshold: 0.1,
//   }
// );

  const observer = new IntersectionObserver(
  (entries) => {
    // Find the entry closest to the top that is intersecting
    let visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    if (visible.length > 0) {
      setActiveSection(visible[0].target.id);
    }
  },
  {
    root: null,
    rootMargin: "0px 0px -45% 0px",
    threshold: 0.1,
  }
);



    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav>
      <div id="logo">
        <div id="m">M</div>
        <div id="j">J</div>
      </div>

      <ul>
        {navItems.map((item) => (
          <li
            key={item.id}
            className={activeSection === item.id ? "active" : ""}
          >
            <a href={`#${item.id}`} onClick={(e) => handleNavClick(e, item.id)}>
              {item.label}
            </a>
          </li>
        ))}

        {/* <li>
          <button>
            <i className="fa-solid fa-moon"></i>
          </button>
        </li> */}
      </ul>
    </nav>
  );
}
