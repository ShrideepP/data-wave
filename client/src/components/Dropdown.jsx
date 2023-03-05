import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Dropdown = ({
  children,
  dropdown,
  setDropdown,
  selected,
  handleDropdown,
}) => {
  return (
    <div className="w-fit h-full relative flex items-center">
      <button
        onClick={() => handleDropdown(dropdown, setDropdown)}
        className={`min-w-[10rem] max-w-fit h-full px-4 text-dominant dark:text-dark-dominant flex gap-x-4 items-center justify-between ${
          dropdown && "border-b-2"
        } border-accent`}
      >
        <span className="text-xs font-bold tracking-wider uppercase">
          {selected}
        </span>
        <AiFillCaretDown className={`text-sm ${dropdown && "rotate-180"}`} />
      </button>
      <div
        className={`min-w-full max-w-fit ${
          dropdown ? "max-h-[100rem]" : "max-h-0"
        } flex flex-col cursor-pointer z-50 whitespace-nowrap absolute top-full left-2/4 -translate-x-2/4 overflow-y-hidden bg-secondary dark:bg-dark-secondary border border-t-0 border-tirtiary dark:border-dark-tirtiary`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
