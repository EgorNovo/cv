import { FC } from "react";
import styles from './Link.module.scss'

export type TLink = {
  url: string;
  title: string;
};

const Link: FC<TLink> = ({ url, title }) => {
  return (
    <li className={styles.li}>
      <a href={url}>{title}</a>
    </li>
  );
};

export default Link;
