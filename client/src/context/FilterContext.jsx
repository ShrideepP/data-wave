import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  sector,
  region,
  country,
} from "../utils/filters";

const Context = createContext();
const URL = import.meta.env.VITE_REACT_API_URL;

export const FilterProvider = ({ children }) => {

  const [bar, setBar] = useState([]);
  const [line, setLine] = useState([]);
  const [donut, setDonut] = useState([]);

  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const [selected1, setSelected1] = useState(country[0]);
  const [selected2, setSelected2] = useState(sector[0]);
  const [selected3, setSelected3] = useState(region[0]);

  const closeAllDropdowns = () => {
      setDropdown1(false);
      setDropdown2(false);
      setDropdown3(false);
  };

  const handleDropdown = (dropdown, setDropdown) => {
      closeAllDropdowns();
      setDropdown(!dropdown);
  };

  useEffect(() => {
    axios.get(`${URL}/bar-chart`)
        .then(response => {
          setBar(response.data.filter(item => item.country === selected1));
        })
        .catch(error => {
          console.log(error);
        });
  }, [selected1]);

  useEffect(() => {
    axios.get(`${URL}/line-chart`)
        .then(response => {
          setLine(response.data.filter(item => item.sector === selected2));
        })
        .catch(error => {
          console.log(error);
        });
  }, [selected2]);

  useEffect(() => {
    axios.get(`${URL}/donut-chart`)
        .then(response => {
          setDonut(response.data.filter(item => item.region === selected3));
        })
        .catch(error => {
          console.log(error);
        });
  }, [selected3]);

  const filterCountry = event => {
    const value = event.target.textContent;
    setBar(prevData => prevData.filter(item => item.country === value));
  };
  
  const filterSector = event => {
    const value = event.target.textContent;
    setLine(prevData => prevData.filter(item => item.sector === value));
  };
  
  const filterRegion = event => {
    const value = event.target.textContent;
    setDonut(prevData => prevData.filter(item => item.region === value));
  };

  return (
    <Context.Provider
      value={{
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
        filterCountry,
        filterSector,
        filterRegion,
        bar,
        line,
        donut
      }}
    >
      {children}
    </Context.Provider>
  );
  
};

export const FilterContext = () => useContext(Context);
