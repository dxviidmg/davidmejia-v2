import { CustomIcon } from "../icons/Icons";

export const SkillList = ({ skills }) => {
  return (
    <ul className="list-unstyled">
      {skills.map((skill, index) => (
        <li key={index}> <CustomIcon name={skill.icon? skill.icon: "Si"+ skill.name} color={skill.color}/> {skill.name}  - {skill.experience} {skill.category? ("(" + skill.category) + ")": ""}</li>
      ))}
    </ul>
  );
};
