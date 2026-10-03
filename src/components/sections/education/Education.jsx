'use client';

import { Container, Row, Col } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import { useLang } from "../../../utils/LangContext";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { getOrganization } from "../../../utils/organizations";
import { LogoPlate } from "../../commons/logo/LogoPlate";
import { Reveal } from "../../commons/reveal/Reveal";
import { formatMonth } from "../../../utils/dateUtils";
import "./education.css";


const EntryList = ({ title, entries, delay = 0 }) => {
  return (
    <Reveal delay={delay}>
      <h3 className="edu-heading">{title}</h3>
      <ul className="edu-list">
        {entries.map((e, i) => (
          <li key={i} className="edu-item">
            <LogoPlate logo={getOrganization(e.subtitle).logo} name={e.subtitle} fixed />
            <div className="edu-text">
              <p className="card-title-light">{e.title}</p>
              <p className="card-subtitle">{e.subtitle}</p>
              {e.note && <p className="card-meta mb-0">{e.note}</p>}
            </div>
            <span className="card-meta edu-date">{e.date}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};

export const Education = () => {
  const { t, lang } = useLang();
  const degrees = t.education.items.map((item) => ({
    title: item.degree, subtitle: item.institution, date: item.period, note: item.note,
  }));
  const certs = certifications.map((c) => ({
    title: c.name, subtitle: c.institution, date: formatMonth(c.date, lang), note: c.id && `ID: ${c.id}`,
  }));
  return (
    <section className="section section-light" id="education">
      <Container>
        <SectionHeader id="education" title={t.education.section} />
        <Row className="g-5">
          <Col lg={5}><EntryList title={t.education.title} entries={degrees} /></Col>
          <Col lg={7}><EntryList title={t.certifications.title} entries={certs} delay={0.1} /></Col>
        </Row>
      </Container>
    </section>
  );
};
