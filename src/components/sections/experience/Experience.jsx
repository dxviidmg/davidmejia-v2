import { Container } from "react-bootstrap";
import positions from "../../../data/positions.json";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import "./experience.css";

const FLAG = {
  MX: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Mexico_flag_icon.svg",
  US: "https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg",
};

const TimelineItem = ({ pos, tp, at, index }) => {
  const [ref, visible] = useInView();
  return (
    <div className={`timeline-item fade-left ${visible ? "visible" : ""}`} ref={ref} style={{ transitionDelay: `${index * 0.1}s` }}>
      <div className="timeline-dot" />
      <div className="timeline-card">
        <h3>
          {tp.position} {at}{" "}
          <a href={pos.company.url} target="_blank" rel="noreferrer">
            {pos.company.name}
          </a>
        </h3>
        <p className="timeline-meta">
          {pos.period} · {tp.modality} · {pos.location}{" "}
          {FLAG[pos.country] && (
            <img src={FLAG[pos.country]} alt={pos.country} className="country-flag" />
          )}
        </p>
        <p className="timeline-meta">{tp.lineOfBusiness}</p>
        {tp.highlights && (
          <ul className="timeline-highlights">
            {tp.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
};

export const Experience = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section id="experience" className="section-dark paddings">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.experience.title}</h2>
        <div className="timeline">
          {positions.map((pos, index) => (
            <TimelineItem key={index} pos={pos} tp={t.experience.positions[index]} at={t.experience.at} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
