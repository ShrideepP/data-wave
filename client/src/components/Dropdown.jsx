import React from "react";
import { AiFillCaretDown } from 'react-icons/ai';

const Dropdown = ({ children, handleDropdown, dropdown, setDropdown, selected,}) => {

    const hadleClick = () => handleDropdown(dropdown, setDropdown);

    return (

        <div className="w-fit h-full flex items-center">

            <button
                onClick={hadleClick}
                className={`w-fit h-full px-4 flex items-center gap-x-4 ${dropdown && 'border-b-2'} border-accent`}
            >
                <span className="text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase">
                    {selected}
                </span>
                <AiFillCaretDown className={`text-sm text-dominant dark:text-dark-dominant ${dropdown && 'rotate-180'}`} />
            </button>

            {
                dropdown
                &&
                <div className={`w-full h-fit flex flex-wrap overflow-hidden whitespace-nowrap absolute top-full left-0 bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded-sm`}>
                    { children }
                </div>
            }

        </div>
        
    );
};

export default Dropdown;
