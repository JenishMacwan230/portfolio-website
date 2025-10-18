// ...existing code...
import React, { useEffect, useState, useRef } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    // select only top-level <section id="..."> elements
    const sections = Array.from(document.querySelectorAll("section[id]"));

    console.log("[Header debug] sections found:", sections.map(s => s.id));

    if (!sections.length) {
      console.warn("[Header debug] No <section id=...> elements found");
      return;
    }

    // detect any nested elements with ids inside sections (helps debug)
    const nestedIds = [];
    sections.forEach((s) => {
      Array.from(s.querySelectorAll("[id]")).forEach((el) => {
        if (el !== s) nestedIds.push({ section: s.id, childId: el.id });
      });
    });
    if (nestedIds.length) {
      console.warn(
        "[Header debug] Found nested ids inside sections. These can be picked up by observers or by other selectors and cause flicker:",
        nestedIds
      );
    }

    const navEl = document.querySelector("nav");
    const navHeight = navEl ? Math.round(navEl.getBoundingClientRect().height) : 0;
    console.log("[Header debug] navHeight:", navHeight);

    const observer = new IntersectionObserver(
      (entries) => {
        // debug log
        console.groupCollapsed("[Header debug] Intersection entries");
        entries.forEach((e) =>
          console.log(e.target.id, {
            ratio: e.intersectionRatio,
            intersecting: e.isIntersecting,
            top: e.boundingClientRect.top.toFixed(1),
          })
        );
        console.groupEnd();

        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        const newId = visible[0].target.id;
        if (newId && newId !== activeSection) setActiveSection(newId);
      },
      {
        root: null,
        rootMargin: `-${navHeight}px 0px -35% 0px`,
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    // observe only the section elements
    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [activeSection]);
  // ...existing code...

// ...existing code...

  // ...existing code...
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

      {/* Debug overlay: visible on screen to show current section */}
      <div
        style={{
          position: "fixed",
          right: 12,
          bottom: 12,
          background: "rgba(0,0,0,0.7)",
          color: "white",
          padding: "8px 12px",
          borderRadius: 8,
          zIndex: 9999,
          fontFamily: "monospace",
          fontSize: 12,
        }}
        aria-hidden="true"
      >
        Section: {activeSection}
      </div>
    </nav>
  );
}
// ...existing code...