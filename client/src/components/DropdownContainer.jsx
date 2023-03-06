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
        dropdown4, setDropdown4, selected4, setSelected4,
        dropdown5, setDropdown5, selected5, setSelected5,
        dropdown6, setDropdown6, selected6, setSelected6,
        filterCountry, filterPestle, filterRegion, filterSector, filterSource, filterTopics,
    } = FilterContext();

    return (

        <div className="w-full h-full relative flex">

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown1} 
                setDropdown={setDropdown1} 
                selected={selected1}
            >
                {topics.map(item => (
                    <DropdownButton 
                        key={item}
                        btnText={item} 
                        dropdown={dropdown1} 
                        setDropdown={setDropdown1} 
                        selected={selected1}
                        setSelect={setSelected1} 
                        handleDropdown={handleDropdown}
                        filterMethod={filterTopics} 
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
                        selected={selected2}
                        setSelect={setSelected2} 
                        handleDropdown={handleDropdown} 
                        filterMethod={filterSector}
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
                        selected={selected3}
                        setSelect={setSelected3} 
                        handleDropdown={handleDropdown} 
                        filterMethod={filterRegion}
                    />
                ))}
            </Dropdown>

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown4} 
                setDropdown={setDropdown4} 
                selected={selected4}
            >
                {pestle.map(item => (
                    <DropdownButton  
                        key={item}
                        btnText={item} 
                        dropdown={dropdown4} 
                        setDropdown={setDropdown4} 
                        selected={selected4}
                        setSelect={setSelected4} 
                        handleDropdown={handleDropdown}
                        filterMethod={filterPestle} 
                    />
                ))}
            </Dropdown>

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown5} 
                setDropdown={setDropdown5} 
                selected={selected5}
            >
                {source.map(item => (
                    <DropdownButton 
                        key={item}
                        btnText={item} 
                        dropdown={dropdown5} 
                        setDropdown={setDropdown5} 
                        selected={selected5}
                        setSelect={setSelected5} 
                        handleDropdown={handleDropdown} 
                        filterMethod={filterSource}
                    />
                ))}
            </Dropdown>

            <Dropdown 
                handleDropdown={handleDropdown} 
                dropdown={dropdown6} 
                setDropdown={setDropdown6} 
                selected={selected6}
            >
                {country.map(item => (
                    <DropdownButton 
                        key={item}
                        btnText={item} 
                        dropdown={dropdown6} 
                        setDropdown={setDropdown6}
                        selected={selected6} 
                        setSelect={setSelected6} 
                        handleDropdown={handleDropdown} 
                        filterMethod={filterCountry}
                    />
                ))}
            </Dropdown>

        </div>

    );
};

export default DropdownContainer;
