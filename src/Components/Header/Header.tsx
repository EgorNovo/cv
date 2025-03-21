import { FC, useContext } from "react";
import { ThemeContext } from "../../context/context";
import { toggle } from "../../store/slice/content";
import { useDispatch, useSelector } from "../../store/store";
import { TLink } from "../Link/Link";
import Menu from "../Menu/Menu";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import styles from "./Header.module.scss";

type THeaderProps = {
  links: TLink[];
};

export const Header: FC<THeaderProps> = ({ links }) => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const lan = useSelector((store) => store.contentReducer.lan);

  const handleClick = () => {
    dispatch(toggle());
  };

  return (
    <nav
      className={styles.navigation}
      style={
        theme === "dark"
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" }
      }
    >
      <span className={styles.leftSide}>
        <p className={styles.title}>casle.dev</p>
        <ThemeToggler />
        <button className={styles.lan} onClick={handleClick}>
          {lan === "en" ? "Ru" : "En"}
        </button>
      </span>
      <Menu links={links} />
    </nav>
  );
};
