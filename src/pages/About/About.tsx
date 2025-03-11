import Cube from "../../Components/Cube/Cube";
import { useSelector } from "../../store/store";
import styles from "./About.module.scss";

const About = () => {
  const content = useSelector((state) => state.contentReducer.about);

  return (
    <section className={styles.about} id="about">
      <Cube />
      <article>{content}</article>
    </section>
  );
};

export default About;
