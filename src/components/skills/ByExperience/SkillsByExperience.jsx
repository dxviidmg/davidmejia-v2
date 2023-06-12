import { useState } from "react";
import skills_by_categories from "../../exampleData/skills.json";
import { useEffect } from "react";
import { SkillList } from "./skillList";
import { Row, Col } from "react-bootstrap";

export const SkillsByExperience = () => {
  const [topSkils, setTopSkills] = useState([])
  const [mediumSkils, setMediumSkills] = useState([])
  const [lowSkils, setLowSkills] = useState([])

  const calculaExperience = (experience) => {
    let unity = parseInt(experience.charAt(0));


    if (experience.includes("Year")) {
      return 365 * unity;
    }
    return 30 * unity;
  };

  const skillList = () => {
    let r = []
    const entries = Object.entries(skills_by_categories);
    entries.forEach(([category, skills]) => {
      skills.forEach((skill, i) => {
        let experience_in_days = calculaExperience(skill.experience);
        let aux = {
          category,
          name: skill.name,
          experience: skill.experience,
          experience_in_days: experience_in_days,
        };
        r.push(aux);
      });
    });

    r.sort(function (a, b) {
      return b.experience_in_days - a.experience_in_days;
    });

    let top_skills = r.slice(0, 6);
    let medium_skills = r.slice(6, 15);
    let low_skills = r.slice(15);

    return [top_skills, medium_skills, low_skills];
  };
  
  useEffect(() => {
    let [a, b, c] = skillList();
    setTopSkills(a);
    setMediumSkills(b);
    setLowSkills(c);
  }, []);


  
  return (<Row>
    <Col md={4}>
      <h3>My top skills</h3>
    <SkillList skills={topSkils}></SkillList>
    </Col>
    <Col md={4}>
      <h3>My top skills</h3>
    <SkillList skills={mediumSkils}></SkillList>
    </Col>
    <Col md={4}>
      <h3>My top skills</h3>
    <SkillList skills={lowSkils}></SkillList>
    </Col>
  </Row>)
};

