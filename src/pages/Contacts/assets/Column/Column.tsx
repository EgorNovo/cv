import { FC } from "react";
import { TAvatarProps } from "../../../../Components/Avatar/Avatar";
import styles from '../../Contacts.module.scss'

export const Column: FC<TAvatarProps> = ({
  fill = "white",
  width = "64",
  height = "64",
}) => {
  return (
    <svg className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 1034 1034"
    >
      <path
        d="M499 228q-21 0 -36 15l-73 73l92 92q17 -6 34 -2t29.5 16.5t16 29.5t-1.5 34l88 88q17 -5 34 -1.5t30 16.5q18 18 18 43.5t-18 43t-43.5 17.5t-43.5 -17q-13 -14 -16.5 -32t3.5 -35l-83 -83v218q9 4 16 11q18 18 18 43.5t-18 43.5t-43.5 18t-43 -18t-17.5 -43.5t18 -43.5
q8 -8 20 -13v-220q-12 -4 -20 -13q-14 -13 -17.5 -31.5t3.5 -35.5l-90 -91l-240 240q-15 15 -15 36.5t15 36.5l349 349q15 15 36.5 15t36.5 -15l348 -348q15 -15 15 -36.5t-15 -36.5l-349 -349q-15 -15 -37 -15z"
      />
    </svg>
  );
};

export default Column;
