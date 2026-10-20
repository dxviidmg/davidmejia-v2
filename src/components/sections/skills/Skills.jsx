'use client';

import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import skills from "../../../data/skills.json";
import { TechIcon } from "../../commons/icons/Icons";
import { calcExperience } from "../../../utils/dateUtils";
import { useLang } from "../../../utils/LangContext";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { Reveal } from "../../commons/reveal/Reveal";
import "./skills.css";

const MAX_MONTHS = 12 * 10;
const MAX_VISIBLE = 5;

const SkillCard = ({ label, items, index }) => {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const sorted = [...items].sort(
    (a, b) => calcExperience(b.periods).months - calcExperience(a.periods).months
  );
  const shown = expanded ? sorted : sorted.slice(0, MAX_VISIBLE);
  const hidden = sorted.length - MAX_VISIBLE;
  return (
    <div className="skills-slide">
      <Reveal className="card-dm" delay={(index % 4) * 0.08}>{(visible) => (<>
        <h3 className="skill-card-title">{label}</h3>
        {shown.map((skill, i) => {
          const { label, months } = calcExperience(skill.periods);
          return (
            <div key={i} className="skill-row">
              <div className="skill-info">
                <span className="skill-icon"><TechIcon name={skill.name} /></span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-exp">{label}</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: visible ? `${Math.min((months / MAX_MONTHS) * 100, 100)}%` : 0, transitionDelay: `${0.2 + i * 0.07}s, 0s` }} />
              </div>
            </div>
          );
        })}
        {hidden > 0 && (
          <button className="link-more" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? `− ${t.experience.showLess}` : `+ ${t.experience.showMore} (${hidden})`}
          </button>
        )}
      </>)}</Reveal>
    </div>
  );
};

// Scroll-snap carousel: native swipe/scroll plus prev/next buttons that move one card
const Carousel = ({ children, prevLabel, nextLabel }) => {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 1, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 });
  };
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Advance one card every 10s; loop back at the end. Paused while hovered/focused or with reduced motion.
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      const el = track.current;
      if (!el) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) el.scrollTo({ left: 0, behavior: "smooth" });
      else move(1);
    }, 10000);
    return () => clearInterval(id);
  }, [paused]);

  const move = (dir) => {
    const el = track.current;
    const slide = el.firstElementChild;
    const step = slide.offsetWidth + parseFloat(getComputedStyle(el).columnGap || 0);
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className="skills-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <button className="skills-arrow skills-arrow-prev" onClick={() => move(-1)} disabled={edge.start} aria-label={prevLabel}>‹</button>
      <div className="skills-track" ref={track} onScroll={update}>{children}</div>
      <button className="skills-arrow skills-arrow-next" onClick={() => move(1)} disabled={edge.end} aria-label={nextLabel}>›</button>
    </div>
  );
};

export const Skills = () => {
  const { t } = useLang();
  return (
    <section className="section section-light" id="skills">
      <Container>
        <SectionHeader title={t.skills.title} />
        <Carousel prevLabel={t.skills.prev} nextLabel={t.skills.next}>
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCard key={category} label={t.skills.categories[category] || category} items={items} index={i} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};
