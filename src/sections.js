// Page sections in display order: drives the menu, the "01 — …" numbering and the section eyebrows.
// Keep App.js rendering them in this same order.
export const SECTIONS = [
  { id: "about-me", nav: "about" },
  { id: "experience", nav: "experience" },
  { id: "skills", nav: "skills" },
  { id: "projects", nav: "projects" },
  { id: "education", nav: "education" },
  { id: "footer", nav: "contact" },
];

const INDEX = Object.fromEntries(SECTIONS.map((s, i) => [s.id, i]));

export const sectionOf = (id) => SECTIONS[INDEX[id]];

// "02" for the second section
export const sectionNumber = (id) => String(INDEX[id] + 1).padStart(2, "0");
