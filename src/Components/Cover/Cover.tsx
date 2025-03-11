import { FC } from "react";
import { useSelector } from "../../store/store";
import styles from "./Cover.module.scss";

const Cover: FC = () => {
  const content = useSelector((state) => state.contentReducer.cover);

  return (
    <div className={styles.cover}>
      <h1>
        <span className={styles.effect}>{content[0]}</span>
        <br />
        {content[1]} <span className={styles.effect}>{content[2]}</span>
        <br />
        {content[3]}{" "}
        <span className={styles.effect}>&lt;{content[4]} /&gt;</span>
      </h1>
    </div>
  );
};

export default Cover;
