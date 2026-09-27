import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import positions from "../../../data/positions.json";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { WorkMap } from "./WorkMap";
import "./experience.css";

const VISIBLE_HIGHLIGHTS = 3;

// Fallback when a company has no logo: "Grupo Constructor CARSEV" -> "GC"
const initials = (name) => name.split(/\s+/).filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const TimelineItem = ({ pos, tp, t, index }) => {
  const [ref, visible] = useInView();
  const [expanded, setExpanded] = useState(false);
  const highlights = tp.highlights || [];
  const shown = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const hidden = highlights.length - VISIBLE_HIGHLIGHTS;
  return (
    <article className={`timeline-item fade-left ${visible ? "visible" : ""} ${index === 0 ? "is-current" : ""}`} ref={ref}>
      <div className="timeline-dot" />
      <div className="timeline-head">
        <div className="timeline-logo" aria-hidden="true">
          {pos.company.logo
            ? <img src={process.env.PUBLIC_URL + pos.company.logo} alt="" loading="lazy" />
            : <span className="timeline-logo-initials">{initials(pos.company.name)}</span>}
        </div>
        <p className="timeline-period">{pos.current ? `${pos.period} ${t.experience.present}` : pos.period}</p>
        <h3 className="timeline-company">
          {pos.company.url ? (
            <a href={pos.company.url} target="_blank" rel="noreferrer">{pos.company.name}<span className="timeline-link-icon" aria-hidden="true">↗</span></a>
          ) : pos.company.name}
        </h3>
        <p className="timeline-position">{tp.position}</p>
        <p className="timeline-industry"><span>{t.experience.industryLabel}</span> {tp.industry}</p>
        <p className="timeline-meta">{tp.modality} · {tp.lineOfBusiness}</p>
      </div>
      {shown.length === 0 && pos.current && (
        <div className="timeline-body">
          <p className="timeline-note">{t.experience.justStarted}<span className="timeline-cursor" /></p>
        </div>
      )}
      {shown.length > 0 && (
        <div className="timeline-body">
          <ul className="timeline-highlights">
            {shown.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
          {hidden > 0 && (
            <button className="link-more" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
              {expanded ? `− ${t.experience.showLess}` : `+ ${t.experience.showMore} (${hidden})`}
            </button>
          )}
        </div>
      )}
    </article>
  );
};

// Draws the blue timeline spine as the section scrolls past the middle of the viewport
const useScrollProgress = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight * 0.6 - rect.top) / rect.height, 0), 1);
      el.style.setProperty("--progress", progress);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);
  return ref;
};

export const Experience = () => {
  const { t } = useLang();
  const timelineRef = useScrollProgress();
  return (
    <section id="experience" className="section">
      <Container>
        <SectionHeader index={2} eyebrow={t.nav.experience} title={t.experience.title} />
        <WorkMap t={t} />
        <div className="timeline" ref={timelineRef}>
          {positions.map((pos, index) => (
            <TimelineItem key={index} pos={pos} tp={t.experience.positions[index]} t={t} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
