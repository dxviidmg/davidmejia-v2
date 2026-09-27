import { Container, Row, Col } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import { yearsOfExperience } from "../../../utils/dateUtils";
import { useInView } from "../../../utils/useInView";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { CountUp } from "../../commons/countup/CountUp";
import positions from "../../../data/positions.json";
import projects from "../../../data/projects.json";
import './about.css'

const Bold = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
);

const STATS = [
  { key: "years", value: yearsOfExperience, prefix: "+" },
  { key: "companies", value: new Set(positions.map((p) => p.company)).size },
  { key: "projects", value: projects.length },
  { key: "countries", value: new Set(positions.map((p) => p.country)).size },
];

export const About = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section id="about-me" className="section section-light">
      <Container>
        <SectionHeader index={1} eyebrow={t.nav.about} title={t.about.title} />
        <Row ref={ref} className="g-5 align-items-start">
          <Col lg={7} className="about-body">
            <p className={`about-intro fade-up ${visible ? "visible" : ""}`}><Bold text={t.about.intro.replace("{years}", yearsOfExperience)} /></p>
            <ul className={`about-highlights fade-up stagger-1 ${visible ? "visible" : ""}`}>
              {t.about.highlights.map((h, i) => <li key={i}><Bold text={h} /></li>)}
            </ul>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <dl className="about-stats">
              {STATS.map((s, i) => (
                <div key={s.key} className={`about-stat fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
                  <dt className="about-stat-label">{t.about.stats[s.key]}</dt>
                  <dd className="about-stat-value">{s.prefix}<CountUp target={s.value} start={visible} /></dd>
                </div>
              ))}
            </dl>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
