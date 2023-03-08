import React from "react";
import { FilterContext } from "../context/FilterContext";
import Dropdown from "./Dropdown";
import { topics, sector, region, pestle, source, country } from "../utils/filters";
import DropdownButton from "./DropdownButton";

const DropdownContainer = () => {

    const { 
        handleDropdown, 
        dropdown1, setDropdown1, selected1, setSelected1, 
        dropdown2, setDropdown2, selected2, setSelected2,
        dropdown3, setDropdown3, selected3, setSelected3,
        filterCountry, filterSector, filterRegion,
    } = FilterContext();

    return (

        <div className="w-full h-full relative flex">

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown1} 
                setDropdown={setDropdown1} 
                selected={selected1}
            >
                {country.map(item => (
                    <DropdownButton 
                        key={item}
                        btnText={item} 
                        dropdown={dropdown1} 
                        setDropdown={setDropdown1}
                        setSelect={setSelected1} 
                        handleDropdown={handleDropdown} 
                        filter={filterCountry}
                    />
                ))}
            </Dropdown>

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown2} 
                setDropdown={setDropdown2} 
                selected={selected2}
            >
                {sector.map(item => (
                    <DropdownButton 
                        key={item}
                        btnText={item} 
                        dropdown={dropdown2} 
                        setDropdown={setDropdown2} 
                        setSelect={setSelected2} 
                        handleDropdown={handleDropdown} 
                        filter={filterSector}
                    />
                ))}
            </Dropdown>

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown3} 
                setDropdown={setDropdown3} 
                selected={selected3}
            >
                {region.map(item => (
                    <DropdownButton 
                        key={item}
                        btnText={item} 
                        dropdown={dropdown3} 
                        setDropdown={setDropdown3} 
                        setSelect={setSelected3} 
                        handleDropdown={handleDropdown} 
                        filter={filterRegion}
                    />
                ))}
            </Dropdown>

        </div>

    );
};

export default DropdownContainer;
