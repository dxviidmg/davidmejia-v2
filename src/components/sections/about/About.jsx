'use client';

import { Container, Row, Col } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import { yearsOfExperience } from "../../../utils/dateUtils";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { CountUp } from "../../commons/countup/CountUp";
import { Reveal } from "../../commons/reveal/Reveal";
import positions from "../../../data/positions.json";
import projects from "../../../data/projects.json";
import './about.css'

// "**Python**" -> <strong>Python</strong>, built as React nodes instead of injected HTML
const Bold = ({ text }) => text.split(/\*\*(.*?)\*\*/g).map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part));

const STATS = [
  { key: "years", value: yearsOfExperience, prefix: "+" },
  { key: "companies", value: new Set(positions.map((p) => p.company)).size },
  { key: "projects", value: projects.length },
  { key: "countries", value: new Set(positions.map((p) => p.country)).size },
];

export const About = () => {
  const { t } = useLang();
  return (
    <section id="about-me" className="section section-light">
      <Container>
        <SectionHeader id="about-me" title={t.about.title} />
        <Row className="g-5 align-items-start">
          <Col lg={7} className="about-body">
            <Reveal as="p" className="about-intro"><Bold text={t.about.intro.replace("{years}", yearsOfExperience)} /></Reveal>
            <Reveal as="ul" className="about-highlights" delay={0.1}>
              {t.about.highlights.map((h, i) => <li key={i}><Bold text={h} /></li>)}
            </Reveal>
          </Col>
          <Col lg={{ span: 4, offset: 1 }}>
            <dl className="about-stats">
              {STATS.map((s, i) => (
                <Reveal key={s.key} className="about-stat" delay={0.15 + i * 0.1}>{(visible) => (<>
                  <dt className="about-stat-label">{t.about.stats[s.key]}</dt>
                  <dd className="about-stat-value">{s.prefix}<CountUp target={s.value} start={visible} /></dd>
                </>)}</Reveal>
              ))}
            </dl>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
