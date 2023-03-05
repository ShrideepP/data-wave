import React from "react";
import DropdownContainer from "./DropdownContainer";
import { BsFilterRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Filters = ({ slider, setSlider }) => {
  const date = new Date();
  const currentDate = date.toDateString();

  return (
    <div className="w-full h-fit z-50">
      <div className="h-[10vh] hidden md:flex justify-between items-center">
        <div className="h-full flex gap-x-6">
          <button className="flex items-center gap-x-2">
            <BsFilterRight className="text-2xl text-accent" />
            <span className="text-sm text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase">
              Filters
            </span>
          </button>
          <DropdownContainer />
        </div>
        <span className="text-sm text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase">
          {currentDate}
        </span>
      </div>

      <div
        className={`${
          slider ? "w-3/4" : "w-0"
        } h-screen fixed top-0 left-0 md:hidden overflow-y-scroll overflow-x-hidden bg-secondary dark:bg-dark-secondary border-r-2 border-tirtiary dark:border-dark-tirtiary`}
      >
        <div className="w-full h-[10vh] horizontal-space flex items-center justify-between">
          <div className="flex items-center gap-x-2 z-50">
            <img src="/logo.png" alt="logo" className="w-8" />
            <h1 className="text-xl text-dominant dark:text-dark-dominant font-bold">
              DataWave
            </h1>
          </div>
          <button onClick={() => setSlider(!slider)}>
            <AiOutlinePlus className="text-2xl text-dominant dark:text-dark-dominant rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
