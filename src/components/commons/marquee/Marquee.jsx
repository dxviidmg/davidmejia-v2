import skills from "../../../data/skills.json";
import { GetCustomIcon, brandColor } from "../icons/Icons";
import "./marquee.css";

const CATEGORIES = ["Backend", "Frontend", "Databases", "Payments", "Cloud & DevOps", "Processing"];
const ITEMS = CATEGORIES.flatMap((category) => skills[category] || []);

// Decorative: the same technologies are listed (accessibly) in the skills section
export const Marquee = () => (
  <div className="marquee" aria-hidden="true">
    <div className="marquee-track">
      {[0, 1].map((copy) => (
        <div className="marquee-group" key={copy}>
          {ITEMS.map((skill) => (
            <span className="marquee-item" key={skill.name}>
              <span className="marquee-logo"><GetCustomIcon name={skill.icon || "Si" + skill.name} color={brandColor(skill.name, true)} /></span>
              {skill.name}
              <span className="marquee-sep" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
