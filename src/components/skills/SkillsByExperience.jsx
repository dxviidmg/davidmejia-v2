import skills_by_categories from '../exampleData/skills.json'


export const SkillsByExperience = () => {

    let r = [];

    function getSkillsList() {
        skills_by_categories.forEach(element => {
            console.log(element)
            
        });
        return 1
    }
    
    console.log(getSkillsList())    
    return (<>testito</>)
};

