import React, { useState } from "react";
import Dropdown from "./Dropdown";
import DropdownBtn from "./DropdownBtn";
import { topics } from "../utils/filters";

const DropdownContainer = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);

  const [selected1, setSelected1] = useState("topic");
  const [selected2, setSelected2] = useState("sector");
  const [selected3, setSelected3] = useState("region");
  const [selected4, setSelected4] = useState("pestle");
  const [selected5, setSelected5] = useState("source");
  const [selected6, setSelected6] = useState("country");

  const handleDropdown = (dropdown, setDropdown) => setDropdown(!dropdown);

  return (
    <div>
      <Dropdown
        handleDropdown={handleDropdown}
        dropdown={dropdown1}
        setDropdown={setDropdown1}
        selected={selected1}
      >
        {topics.map((topic) => (
          <DropdownBtn
            key={topic}
            btnText={topic}
            setSelected={setSelected1}
            dropdown={dropdown1}
            setDropdown={setDropdown1}
          />
        ))}
      </Dropdown>
    </div>
  );
};

export default DropdownContainer;
