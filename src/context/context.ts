import { createContext } from "react";


type TThemeContext = {
  theme?: string;
  setTheme?: React.Dispatch<React.SetStateAction<string>>;
};

export const ThemeContext = createContext<TThemeContext>({});
