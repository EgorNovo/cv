import clsx from "clsx";
import { FC, ReactNode, useEffect, useState } from "react";
import "../styles/index.scss";
import { getTheme } from "../utils/utils";
import { ThemeContext } from "./context";

type TTheme = {
  children: ReactNode;
};

const ThemeProvider: FC<TTheme> = ({ children }) => {
  const [theme, setTheme] = useState<string>(getTheme());

  useEffect(() => {
    localStorage.setItem("Theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={clsx({
          dark: theme === "dark",
          light: theme === "light",
        })}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
