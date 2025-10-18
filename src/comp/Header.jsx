import React, { useEffect, useState, useRef } from "react";
// ...existing code...

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const navEl = document.querySelector("nav");
    const navHeight = navEl ? Math.round(navEl.getBoundingClientRect().height) : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        const newId = visible[0].target.id;
        setActiveSection((prev) => (prev === newId ? prev : newId));
      },
      {
        root: null,
        rootMargin: `-${navHeight}px 0px -35% 0px`,
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // ...existing code...

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // ...existing code...

  return (
    // ...existing JSX...
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

        {/* ...other nav items... */}
      </ul>

      {/* debug overlay removed */}
    </nav>
  );
}
// ...existing code...