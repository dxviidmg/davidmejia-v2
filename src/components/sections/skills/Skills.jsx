import { Container, Row, Col } from "react-bootstrap";
import skills from "../../../data/skills.json";
import { GetCustomIcon } from "../../commons/icons/Icons";
import { calcExperience } from "../../../utils/dateUtils";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import "./skills.css";

const MAX_MONTHS = 12 * 10;

const SkillCard = ({ category, items, index }) => {
  const [ref, visible] = useInView();
  const sorted = [...items].sort(
    (a, b) => calcExperience(b.periods).months - calcExperience(a.periods).months
  );
  return (
    <Col xs={12} sm={6} md={4} className="col-gap" ref={ref}>
      <div className={`dark-card fade-up ${visible ? "visible" : ""}`} style={{ transitionDelay: `${index * 0.1}s` }}>
        <h5 className="skill-card-title">{category}</h5>
        {sorted.map((skill, i) => {
          const { label, months } = calcExperience(skill.periods);
          return (
            <div key={i} className="skill-row">
              <div className="skill-info">
                <GetCustomIcon name={skill.icon || "Si" + skill.name} color={skill.color} />
                <span className="skill-name">{skill.name}</span>
                <span className="skill-exp">{label}</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: `${Math.min((months / MAX_MONTHS) * 100, 100)}%` }} />
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
  const [ref, visible] = useInView();
  return (
    <section className="section-light paddings" id="skills">
      <Container>
        <h2 ref={ref} className={`fade-up ${visible ? "visible" : ""}`}>{t.skills.title}</h2>
        <Row>
          {Object.entries(skills).map(([category, items], i) => (
            <SkillCard key={category} category={category} items={items} index={i} />
          ))}
        </Row>
      </Container>
    </section>
  );
};
