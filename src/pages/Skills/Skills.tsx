import SkillsList from "../../Components/SkiilsList/SkillsList";
import { useSelector } from "../../store/store";
import styles from "./Skills.module.scss";

const Skills = () => {
  const content = useSelector((state) => state.contentReducer.skills);

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
    <section className={styles.skills} id="skills">
      <SkillsList title={content[0]} skills={lan} />
      <SkillsList title={content[1]} skills={tech} />
      <SkillsList title={content[2]} skills={tools} />
    </section>
  );
};

export default Skills;
