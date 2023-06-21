import { useState, useEffect, useCallback } from "react";
import skills_by_categories from "../../data/skills.json";
import { Row, Col } from "react-bootstrap";
import { SkillsCard } from "../SkillCard";

export const SkillsByExperience = () => {
  const [topSkills, setTopSkills] = useState([]);
  const [mediumSkills, setMediumSkills] = useState([]);
  const [lowSkills, setLowSkills] = useState([]);
  const [learningSkills, setLearningSkills] = useState([]);

  const calculaExperience = (experience) => {
    const unity = parseInt(experience.charAt(0));

    if (experience.includes("Year")) {
      return 365 * unity;
    }
    return 30 * unity;
  };

  const skillList = useCallback(() => {
    let skills_list = [];
    let skills_currently_learning = [];
    Object.entries(skills_by_categories).forEach(([category, skills]) => {
      skills.forEach((skill) => {
        const experience_in_days = calculaExperience(skill.experience);
        const aux = {
          category,
          name: skill.name,
          experience: skill.experience,
          experience_in_days,
          color: skill.color,
          icon: skill.icon
        };
        if ("learning_currently" in skill) {
          skills_currently_learning.push(aux);
        } else {
          skills_list.push(aux);
        }
      });
    });

    skills_list.sort((a, b) => b.experience_in_days - a.experience_in_days);

    const top_skills = skills_list.slice(0, 5);
    const medium_skills = skills_list.slice(5, 13);
    const low_skills = skills_list.slice(13);

    return [top_skills, medium_skills, low_skills, skills_currently_learning];
  }, []);
  
  
  

  useEffect(() => {
    const [a, b, c, d] = skillList();
    setTopSkills(a);
    setMediumSkills(b);
    setLowSkills(c);
    setLearningSkills(d);
  }, [skillList]);

  return (
    <Row>
        <Col sm={12}>
        <SkillsCard
          title="The most recent"
          description="Skills that I have learned in the last months"
          skills={learningSkills}
        />
      </Col>

      <Col sm={12} md={4}>
        <SkillsCard
          title="My top"
          description="Skills that I have used the most of my career"
          skills={topSkills}
        />
      </Col>
      <Col sm={12} md={4}>
        <SkillsCard
          title="My medium skills"
          description="Skills that I have used between 6 months and 3 years"
          skills={mediumSkills}
        />
      </Col>
      <Col sm={12} md={4}>
        <SkillsCard
          title="My low skills"
          description="Skills that I have used less them 6 months"
          skills={lowSkills}
        />
      </Col>
    </Row>
  );
};
