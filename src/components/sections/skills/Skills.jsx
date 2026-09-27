import { Container, Row, Col } from "react-bootstrap";
import skills from "../../../data/skills.json";
import { GetCustomIcon, brandColor } from "../../commons/icons/Icons";
import { calcExperience } from "../../../utils/dateUtils";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { SectionHeader } from "../../commons/section/SectionHeader";
import "./skills.css";

const MAX_MONTHS = 12 * 10;

const SkillCard = ({ label, items, index }) => {
  const [ref, visible] = useInView();
  const sorted = [...items].sort(
    (a, b) => calcExperience(b.periods).months - calcExperience(a.periods).months
  );
  return (
    <Col xs={12} sm={6} lg={3} className="col-gap" ref={ref}>
      <div className={`card-dm fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
        <h3 className="skill-card-title">{label}</h3>
        {sorted.map((skill, i) => {
          const { label, months } = calcExperience(skill.periods);
          return (
            <div key={i} className="skill-row">
              <div className="skill-info">
                <span className="skill-icon"><GetCustomIcon name={skill.icon || "Si" + skill.name} color={brandColor(skill.name)} /></span>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-exp">{label}</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: visible ? `${Math.min((months / MAX_MONTHS) * 100, 100)}%` : 0, transitionDelay: `${0.2 + i * 0.07}s, 0s` }} />
              </div>
            </div>
          );
        })}
      </div>
    </Col>
  );
};

export const Skills = () => {
  const { t } = useLang();
  return (
    <section className="section section-light" id="skills">
      <Container>
        <SectionHeader index={3} eyebrow={t.nav.skills} title={t.skills.title} />
        <Row>
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCard key={category} label={t.skills.categories[category] || category} items={items} index={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
