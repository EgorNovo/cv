import { FC } from "react";
import styles from "./SkillsList.module.scss";

type TSkillsProps = {
  title: string;
  skills: string[];
};

const SkillsList: FC<TSkillsProps> = ({skills, title }) => {
  return (
    <div className={styles.skills}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <ul className={styles.list}>
          {skills.map((item, i) => (
            <li key={i} className={styles.skill}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsList;
