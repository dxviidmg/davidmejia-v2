import { Container, Row, Col } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./education.css";

export const Education = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section className="section-light paddings" id="education">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.education.title}</h2>
        <Row>
          {t.education.items.map((item, i) => (
            <Col xs={12} sm={6} key={i} className="col-gap">
              <div className={`dark-card dark-card-hover fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <h5 className="edu-degree">{item.degree}</h5>
                <p className="edu-institution">{item.institution}</p>
                <span className="edu-period">{item.period}</span>
                {item.note && <span className="edu-note">{item.note}</span>}
              </div>
            </Col>
          ))}
        </Row>
        <h4 className={`papers-title fade-up ${visible ? "visible" : ""}`}>{t.education.papers.title}</h4>
        <ul className={`papers-list fade-up ${visible ? "visible" : ""}`}>
          {t.education.papers.items.map((p, i) => (
            <li key={i}>
              <a href={p.url} target="_blank" rel="noreferrer">
                {p.title} <FaExternalLinkAlt size={10} />
              </a>
              <span className="paper-meta">{p.publisher}, {p.year}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
