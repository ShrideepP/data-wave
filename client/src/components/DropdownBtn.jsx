import React from "react";

const DropdownBtn = ({ btnText, setSelected, dropdown, setDropdown }) => {
  const handleSelect = (e) => {
    setSelected(e.target.textContent);
    setDropdown(!dropdown);
    console.log(e.target.textContent);
  };

  return (
    <button
      onClick={handleSelect}
      className="py-2 px-4 text-start text-xs text-dominant dark:text-dark-dominant font-bold tracking-wider uppercase hover:bg-primary dark:hover:bg-dark-primary"
    >
      {btnText}
    </button>
  );
};

export default DropdownBtn;
