import React from "react";
import { BsFilterRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import DropdownContainer from "./DropdownContainer";

const Filters = ({ slider, setSlider }) => {
  return (
    <div className="w-full h-fit z-50">

      <div className="h-[10vh] hidden md:flex justify-between items-center">
        <div className="h-full flex gap-x-6">
          <button className="flex items-center gap-x-2 cursor-default">
            <BsFilterRight className="text-2xl text-accent" />
            <span className="text-sm text-dominant dark:text-dark-dominant font-semibold tracking-wider uppercase">
              Filters
            </span>
          </button>
          <DropdownContainer />
        </div>
      </div>

      <div
        className={`${
          slider ? "w-3/4 border-r-2" : "w-0"
        } h-screen fixed top-0 left-0 md:hidden overflow-y-scroll overflow-x-hidden bg-secondary dark:bg-dark-secondary border-tirtiary dark:border-dark-tirtiary`}
      >
        <div className="w-full h-[10vh] horizontal-space flex items-center justify-between">
          <div className="flex items-center gap-x-2 z-50">
            <img src="/logo.png" alt="logo" className="w-8" />
            <h1 className="text-xl text-dominant dark:text-dark-dominant font-bold">
              DataWave
            </h1>
          </div>
          <button onClick={() => setSlider(!slider)}>
            <AiOutlinePlus className="text-4xl text-dominant dark:text-dark-dominant rotate-45" />
          </button>
        </div>
        <div className="h-[90vh] flex justify-center items-center flex-col text-center space-y-4 inner-space">
          <div className="space-y-2">
            <h2 className="text-base text-dominant dark:text-dark-dominant font-bold tracking-wider uppercase">
              No filters available
            </h2>
            <hr className="w-24 h-[2px] mx-auto bg-accent border-0 rounded" />
          </div>
          <p className="text-sm text-compliment dark:text-dark-compliment font-medium">
            Dashboard was getting messy so couldn't add filters here
          </p>
        </div>
      </div>

    </div>
  );
};

export default Filters;
