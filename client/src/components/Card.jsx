import React from "react";

const Card = ({ title, percentage }) => {
  return (
    <div className="w-full h-fit card-space bg-secondary dark:bg-dark-secondary border border-tirtiary dark:border-dark-tirtiary rounded shadow-md">
      <div className="flex flex-col items-center gap-4">
        <div className="text-center space-y-2">
          <h2 className="text-sm text-compliment dark:text-dark-compliment font-semibold tracking-wider uppercase">
            {title}
          </h2>
          <hr className="w-24 h-[1px] mx-auto border-0 bg-accent rounded" />
        </div>
        <span className="text-2xl text-dominant dark:text-dark-dominant font-bold uppercase">
          {percentage}
        </span>
      </div>
    </div>
  );
};

export default Card;
