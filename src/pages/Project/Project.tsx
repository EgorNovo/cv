import { FC } from "react";
import { useSelector } from "../../store/store";
import styles from "./Project.module.scss";

const projects = [
  {
    name: "Zakrivayuschiy Teg F",
    url: "https://egornovo.github.io/zakrivayuschiy-teg-f/",
  },
  {
    name: "Slozhno Sosredotochitsya",
    url: "https://egornovo.github.io/slozhno-sosredotochitsya/",
  },
  { name: "Pet Ujjo", url: "https://egornovo.github.io/pet-ujjo/" },
  {
    name: "Posmotri v Okno",
    url: "https://egornovo.github.io/posmotri_v_okno/",
  },
  { name: "Ono Tebe Nado", url: "https://egornovo.github.io/ono-tebe-nado" },
];

const Project: FC = () => {
  const content = useSelector((store) => store.contentReducer.projects);

  return (
    <section className={styles.content} id="project">
      <h2 className={styles.header}>{content}</h2>
      <ul className={styles.list}>
        {projects.map(({ name, url }, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.project}>{name}</span>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Preview
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
