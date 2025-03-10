import { FC } from "react";
import { TAvatarProps } from "../../../../Components/Avatar/Avatar";
import styles from "../../Contacts.module.scss";

export const Alpha: FC<TAvatarProps> = ({
  fill = "white",
  width = "64",
  height = "64",
}) => {
  return (
    <svg
      className={styles.icon}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32.000000 32.000000"
      fill={fill}
    >
      <g
        transform="translate(4.000000,30.000000) scale(0.0200000,-0.0200000)"
        stroke="none"
      >
        <path
          d="M75 1111 c-33 -14 -65 -56 -71 -93 -12 -69 6 -85 312 -288 249 -166
290 -190 324 -190 34 0 75 24 325 190 229 152 289 197 302 224 21 45 11 95
-28 132 l-30 29 -557 2 c-306 1 -566 -2 -577 -6z"
        />
        <path
          d="M2 541 l3 -311 33 -32 32 -33 570 0 570 0 32 33 33 32 3 311 3 310
-273 -182 c-170 -114 -291 -188 -320 -197 -78 -22 -113 -6 -416 197 l-273 182
3 -310z"
        />
      </g>
    </svg>
  );
};

export default Alpha;
