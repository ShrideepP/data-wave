import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="grid grid-cols-2 component-gap">
      <Card title="Intensity" percentage={45} donutColor="#3b82f6" />
      <Card title="Likelihood" percentage={75} donutColor="#f43f5e" />
    </div>
  );
};

export default CardContainer;
