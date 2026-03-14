import { Container } from "react-bootstrap";
import positions from "../../../data/positions.json";
import { useLang } from "../../../utils/LangContext";
import "./experience.css";

const FLAG = {
  MX: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Mexico_flag_icon.svg",
  US: "https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg",
};

export const Experience = () => {
  const { t } = useLang();
  return (
    <section id="experience" className="section-dark paddings">
      <Container>
        <h2>{t.experience.title}</h2>
        <div className="timeline">
          {positions.map((pos, index) => {
            const tp = t.experience.positions[index];
            return (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <h3>
                    {tp.position} {t.experience.at}{" "}
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
          })}
        </div>
      </Container>
    </section>
  );
};
