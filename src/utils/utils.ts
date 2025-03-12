export const getTheme = (): string => {
  const theme = localStorage.getItem("Theme");

  if (!theme) {
    localStorage.setItem("Theme", "dark");
    return "dark";
  }

  return theme;
};
