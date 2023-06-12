import skills_by_categories from "../exampleData/skills.json";

function getSkillsList() {
  skills_by_categories.forEach((element) => {
    console.log(element);
  });
  return 1;
}

export const SkillsByExperience = () => {
  let r = [];

  const calculaExperience = (experience) => {
    let unity = parseInt(experience.charAt(0));

    console.log(unity, typeof unity);
    if (experience.includes("Year")) {
      return 365 * unity;
    }
    return 30 * unity;
  };

  const skillList = () => {
    console.log(skills_by_categories);
    const entries = Object.entries(skills_by_categories);
    entries.forEach(([category, skills]) => {
      console.log(`Key: ${category}, Value: ${skills}`);
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
    let medium_skills = r.slice(6, 18);
    let low_skills = r.slice(18);
    console.log(low_skills);

    return r;
  };
  console.log(skillList());
};
