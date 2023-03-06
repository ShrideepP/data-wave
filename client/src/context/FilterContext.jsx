import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  topics,
  sector,
  region,
  pestle,
  source,
  country,
} from "../utils/filters";

const Context = createContext();
const URL = import.meta.env.VITE_REACT_API_URL;

export const FilterProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);

  const [selected1, setSelected1] = useState(topics[0]);
  const [selected2, setSelected2] = useState(sector[0]);
  const [selected3, setSelected3] = useState(region[0]);
  const [selected4, setSelected4] = useState(pestle[0]);
  const [selected5, setSelected5] = useState(source[0]);
  const [selected6, setSelected6] = useState(country[0]);

  const closeAllDropdowns = () => {
    setDropdown1(false);
    setDropdown2(false);
    setDropdown3(false);
    setDropdown4(false);
    setDropdown5(false);
    setDropdown6(false);
  };

  const handleDropdown = (dropdown, setDropdown) => {
    closeAllDropdowns();
    setDropdown(!dropdown);
  };

  const filterTopics = (event) => {
    const value = event.target.textContent;
    console.log(value);
  };
  
  const filterSector = (event) => {
    const value = event.target.textContent;
  };

  const filterPestle = (event) => {
    const value = event.target.textContent;
  };

  const filterCountry = (event) => {
    const value = event.target.textContent;
  };

  const filterRegion = (event) => {
    const value = event.target.textContent;
  };

  const filterSource = (event) => {
    const value = event.target.textContent;
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${URL}/data`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        handleDropdown,
        dropdown1,
        setDropdown1,
        selected1,
        setSelected1,
        dropdown2,
        setDropdown2,
        selected2,
        setSelected2,
        dropdown3,
        setDropdown3,
        selected3,
        setSelected3,
        dropdown4,
        setDropdown4,
        selected4,
        setSelected4,
        dropdown5,
        setDropdown5,
        selected5,
        setSelected5,
        dropdown6,
        setDropdown6,
        selected6,
        setSelected6,
        filterCountry,
        filterPestle,
        filterRegion,
        filterSector,
        filterSource,
        filterTopics,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const FilterContext = () => useContext(Context);
