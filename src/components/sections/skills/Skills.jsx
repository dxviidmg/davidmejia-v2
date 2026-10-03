'use client';

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import skills from "../../../data/skills.json";
import { TechIcon } from "../../commons/icons/Icons";
import { calcExperience } from "../../../utils/dateUtils";
import { useLang } from "../../../utils/LangContext";
import { SectionHeader } from "../../commons/section/SectionHeader";
import { Reveal } from "../../commons/reveal/Reveal";
import "./skills.css";

const MAX_MONTHS = 12 * 10;
const MAX_VISIBLE = 5;

const SkillCard = ({ label, items, index }) => {
  const { t } = useLang();
  const [expanded, setExpanded] = useState(false);
  const sorted = [...items].sort(
    (a, b) => calcExperience(b.periods).months - calcExperience(a.periods).months
  );
  const shown = expanded ? sorted : sorted.slice(0, MAX_VISIBLE);
  const hidden = sorted.length - MAX_VISIBLE;
  return (
    <Col xs={12} sm={6} lg={3} className="col-gap">
      <Reveal className="card-dm" delay={(index % 4) * 0.08}>{(visible) => (<>
        <h3 className="skill-card-title">{label}</h3>
        {shown.map((skill, i) => {
          const { label, months } = calcExperience(skill.periods);
          return (
            <div key={i} className="skill-row">
              <div className="skill-info">
                <span className="skill-icon"><TechIcon name={skill.name} /></span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-exp">{label}</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: visible ? `${Math.min((months / MAX_MONTHS) * 100, 100)}%` : 0, transitionDelay: `${0.2 + i * 0.07}s, 0s` }} />
              </div>
            </div>
          );
        })}
        {hidden > 0 && (
          <button className="link-more" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
            {expanded ? `− ${t.experience.showLess}` : `+ ${t.experience.showMore} (${hidden})`}
          </button>
        )}
      </>)}</Reveal>
    </Col>
  );
};

export const Skills = () => {
  const { t } = useLang();
  return (
    <section className="section section-light" id="skills">
      <Container>
        <SectionHeader id="skills" title={t.skills.title} />
        <Row>
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCard key={category} label={t.skills.categories[category] || category} items={items} index={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
