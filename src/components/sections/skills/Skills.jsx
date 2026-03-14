import { Container, Row, Col } from "react-bootstrap";
import skills from "../../../data/skills.json";
import { GetCustomIcon } from "../../commons/icons/Icons";
import "./skills.css";

const MAX_YEARS = 8;

const toYears = (exp) => {
  const num = parseInt(exp);
  if (exp.toLowerCase().includes("year")) return num;
  return num / 12;
};

export const Skills = () => {
  return (
    <section className="paddings" id="skills">
      <Container>
        <h2>Skills</h2>
        <Row>
          {Object.entries(skills).map(([category, items]) => (
            <Col key={category} xs={12} sm={6} md={4} className="skill-col">
              <div className="skill-card">
                <h5 className="skill-card-title">{category}</h5>
                {items.map((skill, i) => (
                  <div key={i} className="skill-row">
                    <div className="skill-info">
                      <GetCustomIcon
                        name={skill.icon || "Si" + skill.name}
                        color={skill.color}
                      />
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-exp">{skill.experience}</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar-fill"
                        style={{ width: `${(toYears(skill.experience) / MAX_YEARS) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
