import { FC, useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import styles from "./ThemeToggler.module.scss";

const ThemeToggler: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <label className={styles.label}>
      <span className={styles.toggler} />
      {theme === "dark" ? <p>🌕</p> : <p>🌑</p>}
      <input
        type="checkbox"
        className={styles.ratio}
        onChange={() => {
          if (setTheme) {
            return theme === "dark" ? setTheme("light") : setTheme("dark");
          }
        }}
      ></input>
    </label>
  );
};

export default ThemeToggler;
