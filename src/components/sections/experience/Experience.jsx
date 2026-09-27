import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import positions from "../../../data/positions.json";
import { useLang } from "../../../utils/LangContext";
import { useScroll } from "../../../utils/useScroll";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { WorkMap } from "./WorkMap";
import { getOrganization } from "../../../utils/organizations";
import { LogoPlate } from "../../commons/logo/LogoPlate";
import { Reveal } from "../../commons/reveal/Reveal";
import "./experience.css";

const VISIBLE_HIGHLIGHTS = 3;

const TimelineItem = ({ pos, tp, t, index }) => {
  const [expanded, setExpanded] = useState(false);
  const highlights = tp.highlights || [];
  const shown = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const hidden = highlights.length - VISIBLE_HIGHLIGHTS;
  const org = getOrganization(pos.company);
  return (
    <Reveal as="article" direction="left" className={`timeline-item ${index === 0 ? "is-current" : ""}`}>
      <div className="timeline-dot" />
      <div className="timeline-head">
        <LogoPlate logo={org.logo} name={org.name} className="timeline-logo" />
        <p className="timeline-period">{pos.current ? `${pos.period} ${t.experience.present}` : pos.period}</p>
        <h3 className="timeline-company">
          {org.url ? (
            <a href={org.url} target="_blank" rel="noreferrer">{org.name}<span className="timeline-link-icon" aria-hidden="true">↗</span></a>
          ) : org.name}
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
    </Reveal>
  );
};

// Draws the blue timeline spine as the section scrolls past the middle of the viewport
const useScrollProgress = () => {
  const ref = useRef(null);
  useScroll(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight * 0.6 - rect.top) / rect.height, 0), 1);
    el.style.setProperty("--progress", progress);
  });
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
