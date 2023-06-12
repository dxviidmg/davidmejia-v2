export const SkillList = ({ skills }) => {
  return (
    <div>
      {skills.map((skill, index) => (
        <div>{skill.name} {skill.experience} ({skill.category})</div>
      ))}
    </div>
  );
};
