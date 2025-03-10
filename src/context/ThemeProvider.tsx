import clsx from "clsx";
import { createContext, FC, ReactNode, useState } from "react";
import "../styles/index.scss";

type TThemeContext = {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<TThemeContext>({});

type TTheme = {
  children: ReactNode;
};

const ThemeProvider: FC<TTheme> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");

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
