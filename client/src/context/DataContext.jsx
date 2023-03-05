import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const Context = createContext();
const URL = import.meta.env.VITE_REACT_API_URL;

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const DataContext = () => useContext(Context);
