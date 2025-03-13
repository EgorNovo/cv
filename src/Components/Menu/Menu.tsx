import clsx from "clsx";
import { FC, useState } from "react";
import Link, { TLink } from "../Link/Link";
import styles from "./Menu.module.scss";

type TMenu = {
  links: TLink[];
};

const Menu: FC<TMenu> = ({ links }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className={styles.burger} onClick={() => setOpen(!isOpen)}>
        <ul className={clsx(styles.list, { [styles.burgerMenu]: isOpen })}>
          {links.map((link, i) => (
            <Link key={i} url={link.url} title={link.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
