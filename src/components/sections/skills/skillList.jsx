import { GetCustomIconAndName } from "../../commons/icons/Icons";

export const SkillList = ({ skills }) => {
  return (
    <ul className="list-unstyled">
      {skills.map((skill, index) => (
        <li key={index}> <GetCustomIconAndName name={skill.name} icon={skill.icon} color={skill.color}/> - {skill.experience} {skill.category? ("(" + skill.category) + ")": ""}</li>
      ))}
    </ul>
  );
};