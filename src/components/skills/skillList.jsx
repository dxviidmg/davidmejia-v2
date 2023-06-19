export const SkillList = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill.name}  - {skill.experience} {skill.category? ("(" + skill.category) + ")": ""}</li>
      ))}
    </ul>
  );
};
