import { Container, Row, Col } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import institutions from "../../../data/institutions.json";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { SectionHeader } from "../../commons/section/SectionHeader";
import "./education.css";

// Case-insensitive lookup ("FixterGeek" and "Fixtergeek" share a logo)
const LOGOS = Object.fromEntries(Object.entries(institutions).map(([name, logo]) => [name.toLowerCase(), logo]));
const logoFor = (institution) => LOGOS[(institution || "").toLowerCase()];

const EntryList = ({ title, entries, delay = 0 }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={`fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${delay}s` }}>
      <h3 className="edu-heading">{title}</h3>
      <ul className="edu-list">
        {entries.map((e, i) => (
          <li key={i} className="edu-item">
            <span className="edu-logo" aria-hidden="true">
              {logoFor(e.subtitle) && <img src={process.env.PUBLIC_URL + logoFor(e.subtitle)} alt="" loading="lazy" />}
            </span>
            <div className="edu-text">
              <p className="card-title-light">{e.title}</p>
              <p className="card-subtitle">{e.subtitle}</p>
              {e.note && <p className="card-meta mb-0">{e.note}</p>}
            </div>
            <span className="card-meta edu-date">{e.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Education = () => {
  const { t } = useLang();
  const degrees = t.education.items.map((item) => ({
    title: item.degree, subtitle: item.institution, date: item.period, note: item.note,
  }));
  const certs = certifications.map((c) => ({
    title: c.name, subtitle: c.institution, date: c.expedition, note: c.id && `ID: ${c.id}`,
  }));
  return (
    <section className="section section-light" id="education">
      <Container>
        <SectionHeader index={5} eyebrow={t.nav.education} title={t.education.section} />
        <Row className="g-5">
          <Col lg={5}><EntryList title={t.education.title} entries={degrees} /></Col>
          <Col lg={7}><EntryList title={t.certifications.title} entries={certs} delay={0.1} /></Col>
        </Row>
      </Container>
    </section>
  );
};
