import { FC } from "react";
import Link, { TLink } from "../Link/Link";
import styles from "./Header.module.scss";

type THeaderProps = {
  links: TLink[];
};

export const Header: FC<THeaderProps> = ({ links }) => {
  return (
    <nav className={styles.navigation}>
      <p className={styles.title}>casle.dev</p>
      <ul className={styles.list}>
        {links.map((link, i) => (
          <Link key={i} url={link.url} title={link.title} />
        ))}
      </ul>
    </nav>
  );
};
