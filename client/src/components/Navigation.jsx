import React, { useState } from "react";
import { FiMoon, FiSun, FiBell } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";

const Navigation = () => {
  const [theme, setTheme] = useState(false);
  const changeTheme = () => setTheme(!theme);

  return (
    <nav className="w-full h-fit border-b-2 border-gray-200 bg-white">
      <div className="vertical-space horizontal-space flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-x-2">
          <img src="/logo.png" alt="logo" className="w-10" />
          <span className="text-xl text-dominant font-extrabold">DataWave</span>
        </div>

        <div className="flex items-center gap-x-4">
          <button
            onClick={changeTheme}
            className="w-10 h-10 grid place-items-center hover:bg-slate-100 rounded-full"
          >
            {!theme ? (
              <FiMoon className="text-xl text-dominant" />
            ) : (
              <FiSun className="text-xl text-dominant" />
            )}
          </button>
          <button className="w-10 h-10 relative grid place-items-center hover:bg-slate-100 rounded-full">
            <FiBell className="text-xl text-dominant" />
            <span className="w-5 h-5 grid place-items-center text-xs text-white font-bold absolute -top-1 -right-1 bg-red-400 rounded-full">
              4
            </span>
          </button>
          <div className="flex items-center gap-x-4">
            <span className="text-xs font-semibold uppercase">
              <span className="text-compliment">Hey,</span>
              &nbsp;
              <span className="text-dominant">John Doe</span>
            </span>
            <div className="w-10 h-10 grid place-items-center bg-accent rounded">
              <span className="text-lg text-white font-bold">J</span>
            </div>
          </div>
        </div>
      </div>

      <div className="vertical-space horizontal-space flex items-center gap-x-4">
        <button className="px-6 py-2 flex items-center gap-x-2 text-white cursor-default bg-accent shadow rounded">
          <IoFilterSharp className="text-xl" />
          <span className="text-sm font-semibold uppercase">Filters</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
