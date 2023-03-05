import React, { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <Context.Provider
      value={{
        theme,
        handleTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const ThemeContext = () => useContext(Context);
