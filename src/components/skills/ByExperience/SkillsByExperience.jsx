import React, { useState, useEffect } from "react";
import skills_by_categories from "../../exampleData/skills.json";
import { SkillList } from "./skillList";
import { Row, Col } from "react-bootstrap";

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

  const skillList = () => {
    let skills_list = [];
    let skills_currently_learning    = []
    Object.entries(skills_by_categories).forEach(([category, skills]) => {
      skills.forEach((skill) => {
        const experience_in_days = calculaExperience(skill.experience);
        const aux = {
          category,
          name: skill.name,
          experience: skill.experience,
          experience_in_days,
        };
        if ('learning_currently' in skill){
          console.log('yes')
          skills_currently_learning.push(aux)
        }
        else {
          console.log('no')
          skills_list.push(aux);
        }

      });
    });

    skills_list.sort((a, b) => b.experience_in_days - a.experience_in_days);
    console.log(skills_list)


    const top_skills = skills_list.slice(0, 5);
    const medium_skills = skills_list.slice(5, 13);
    const low_skills = skills_list.slice(13);

    return [top_skills, medium_skills, low_skills, skills_currently_learning];
  };

  useEffect(() => {
    const [a, b, c, d] = skillList();
    setTopSkills(a);
    setMediumSkills(b);
    setLowSkills(c);
    setLearningSkills(d)

  }, []);

  return (
    <Row>
      <Col md={3}>
        <h3>My top</h3>
        <p>Skills that I have used the most of my career</p>
        <SkillList skills={topSkills} />
      </Col>
      <Col md={3}>
        <h3>My medium skills</h3>
        <p>Skills that I have used between 6 months and 3 years</p>
        <SkillList skills={mediumSkills} />
      </Col>
      <Col md={3}>
        <h3>My low skills</h3>
        <p>Skills that I have used less them 6 months</p>
        <SkillList skills={lowSkills} />
      </Col>
      <Col md={3}>
        <h3>The most recent</h3>
        <p>Skills that I have learned the last months</p>
        <SkillList skills={learningSkills} />
      </Col>

    </Row>
  );
};