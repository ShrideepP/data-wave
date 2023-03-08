import React from 'react';

const DropdownButton = ({ btnText, setSelect, handleDropdown, dropdown, setDropdown, filter }) => {

    const handleClick = (event) => {
        setSelect(event.target.textContent);
        handleDropdown(dropdown, setDropdown);
        filter(event);
    };

    return (
        <button onClick={handleClick} className="px-6 py-3 text-start text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase hover:bg-primary hover:dark:bg-dark-primary list-disc">
            { btnText }
        </button>
    );

};

export default DropdownButton;