import React, { useState } from "react";
import Filters from "./Filters";
import { FiMoon, FiSun, FiBell } from "react-icons/fi";
import { Divide as Hamburger } from "hamburger-react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  
  const [slider, setSlider] = useState(false);
  const { theme, handleTheme } = ThemeContext();

  const hamburgerColor = theme === "dark" ? "#F0F3FA" : "#0f172a";

  return (
    <nav className="w-full h-fit sticky top-0 left-0 horizontal-space bg-secondary dark:bg-dark-secondary border-b-2 border-tirtiary dark:border-dark-tirtiary shadow-lg">
      <div className="w-full h-[10vh] flex justify-between items-center border-b-0 md:border-b border-tirtiary dark:border-dark-tirtiary">
        <div className="hidden md:flex items-center gap-x-2">
          <img src="/logo.png" alt="logo" className="w-8" />
          <h1 className="text-xl text-dominant dark:text-dark-dominant font-extrabold">
            DataWave
          </h1>
        </div>

        <button className="md:hidden">
          <Hamburger
            size={25}
            color={hamburgerColor}
            toggled={slider}
            toggle={setSlider}
          />
        </button>

        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <button
            onClick={handleTheme}
            className="w-10 h-10 grid place-items-center hover:bg-primary dark:hover:bg-dark-primary outline-none rounded-full"
          >
            {theme === "light" ? (
              <FiMoon className="text-xl text-dominant dark:text-dark-dominant" />
            ) : (
              <FiSun className="text-xl text-dominant dark:text-dark-dominant" />
            )}
          </button>
          <button className="w-10 h-10 relative grid place-items-center hover:bg-primary dark:hover:bg-dark-primary rounded-full">
            <FiBell className="text-xl text-dominant dark:text-dark-dominant" />
            <span className="w-5 h-5 grid place-items-center text-xs text-white font-bold absolute -top-1 -right-1 bg-red-400 rounded-full">
              4
            </span>
          </button>
          <div className="flex items-center gap-x-4">
            <span className="text-xs font-semibold uppercase">
              <span className="text-compliment dark:text-dark-compliment">
                Hey,
              </span>
              &nbsp;
              <span className="text-dominant dark:text-dark-dominant">
                John Doe
              </span>
            </span>
            <div className="w-10 h-10 grid place-items-center bg-accent rounded">
              <span className="text-lg text-white font-bold">J</span>
            </div>
          </div>
        </div>
      </div>

      <Filters slider={slider} setSlider={setSlider} />
    </nav>
  );
};

export default Header;
