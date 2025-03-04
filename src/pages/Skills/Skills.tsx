import SkillsList from '../../Components/SkiilsList/SkillsList'
import styles from "./Skills.module.scss";

const Skills = () => {
  const lan = ["TS", "JS", "Python"];

  const tech = [
    "React",
    "Redux",
    "RTKQuery",
    "ReactForm",
    "HTML/CSS",
    "SCSS/SASS",
    "Vite",
    "Webpack",
  ];

  const tools = ["Git", "Developer Tool", "CI - GitHub Action"];

  return (
    <section className={styles.skills} id='skills'>
      <SkillsList title="Programming languages" skills={lan} />
      <SkillsList title="Web Techniques" skills={tech} />
      <SkillsList title="Tools/Development" skills={tools} />
    </section>
  );
};

export default Skills;


