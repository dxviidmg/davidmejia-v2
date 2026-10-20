'use client';

import { useState } from "react";
import { Container } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import { useLang } from "../../../utils/LangContext";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { getOrganization } from "../../../utils/organizations";
import { LogoPlate } from "../../commons/logo/LogoPlate";
import { Reveal } from "../../commons/reveal/Reveal";
import { Tabs } from "../../commons/tabs/Tabs";
import { formatMonth } from "../../../utils/dateUtils";
import "./education.css";


const EntryList = ({ entries }) => {
  return (
    <Reveal>
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
  const [tab, setTab] = useState("degrees");
  const degrees = t.education.items.map((item) => ({
    title: item.degree, subtitle: item.institution, date: item.period, note: item.note,
  }));
  const certs = certifications.map((c) => ({
    title: c.name, subtitle: c.institution, date: formatMonth(c.date, lang), note: c.id && `ID: ${c.id}`,
  }));
  return (
    <section className="section section-light" id="education">
      <Container>
        <SectionHeader title={t.education.section} />
        <Tabs
          className="tabs-full edu-tabs"
          label={t.education.section}
          tabs={[
            { id: "degrees", label: t.education.title },
            { id: "certs", label: t.certifications.title },
          ]}
          active={tab}
          onChange={setTab}
        />
        <EntryList key={tab} entries={tab === "degrees" ? degrees : certs} />
      </Container>
    </section>
  );
};
