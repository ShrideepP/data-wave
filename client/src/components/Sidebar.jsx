import React, { useState } from "react";
import { IoFilterSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const Sidebar = () => {
  const [dropdown, setDropdown] = useState({
    dropdown1: false,
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
  });

  const closeDropdown = (key, value) => {
    setDropdown({ ...dropdown, [key]: !value });
  };

  return (
    <aside className="w-full h-screen col-span-1 horizontal-space overflow-y-scroll border-r-2 border-tirtiary dark:border-dark-tirtiary bg-secondary dark:bg-dark-secondary">
      <div className="space-y-1">
        <div className="w-full h-[10vh] flex items-center gap-x-2">
          <img src="/logo.png" alt="logo" className="w-8" />
          <span className="text-xl text-dominant dark:text-dark-dominant font-extrabold">
            DataWave
          </span>
        </div>
        <div className="pb-3">
          <button className="flex items-center gap-x-2 cursor-default text-dominant dark:text-dark-dominant">
            <IoFilterSharp className="text-2xl text-accent" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Filters :
            </span>
          </button>
        </div>
        <Dropdown
          btnText="Topics"
          name="dropdown1"
          dropdown={dropdown.dropdown1}
          closeDropdown={closeDropdown}
        >
          <DropdownItem btnText="Export" />
          <DropdownItem btnText="Growth" />
          <DropdownItem btnText="Oil" />
          <DropdownItem btnText="Gas" />
          <DropdownItem btnText="Fracking" />
          <DropdownItem btnText="War" />
          <DropdownItem btnText="Energy" />
          <DropdownItem btnText="Coal" />
          <DropdownItem btnText="Security" />
          <DropdownItem btnText="Money" />
          <DropdownItem btnText="Car" />
          <DropdownItem btnText="Pollution" />
          <DropdownItem btnText="Economy" />
          <DropdownItem btnText="Unemployment" />
          <DropdownItem btnText="Market" />
          <DropdownItem btnText="Washington" />
          <DropdownItem btnText="Production" />
          <DropdownItem btnText="Material" />
          <DropdownItem btnText="GDP" />
          <DropdownItem btnText="Investment" />
          <DropdownItem btnText="Government" />
          <DropdownItem btnText="Consumer" />
          <DropdownItem btnText="Robot" />
          <DropdownItem btnText="Biofuel" />
        </Dropdown>
        <Dropdown
          btnText="Sector"
          name="dropdown2"
          dropdown={dropdown.dropdown2}
          closeDropdown={closeDropdown}
        ></Dropdown>
        <Dropdown
          btnText="Region"
          name="dropdown3"
          dropdown={dropdown.dropdown3}
          closeDropdown={closeDropdown}
        ></Dropdown>
        <Dropdown
          btnText="Pestle"
          name="dropdown4"
          dropdown={dropdown.dropdown4}
          closeDropdown={closeDropdown}
        ></Dropdown>
        <Dropdown
          btnText="Source"
          name="dropdown5"
          dropdown={dropdown.dropdown5}
          closeDropdown={closeDropdown}
        ></Dropdown>
        <Dropdown
          btnText="Country"
          name="dropdown6"
          dropdown={dropdown.dropdown6}
          closeDropdown={closeDropdown}
        ></Dropdown>
      </div>
    </aside>
  );
};

export default Sidebar;
