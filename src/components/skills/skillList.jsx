import { GetCustomIconAndName } from "../icons/Icons";

export const SkillList = ({ skills }) => {
  return (
    <ul className="list-unstyled">
      {skills.map((skill, index) => (
        <li key={index}> <GetCustomIconAndName name={skill.name} icon={skill.icon} color={skill.color}/> - {skill.experience} {skill.category? ("(" + skill.category) + ")": ""}</li>
      ))}
    </ul>
  );
};


/*
GetCustomIcon name={skill.icon? skill.icon: "Si"+ skill.name} color={skill.color}/>
 */